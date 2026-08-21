import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { skillCategories } from "@/data/skills";
import type { SkillLevel } from "@/types";
import { getSkillLevelLabel, getLocalizedValue } from "@/lib/utils";
import { PageTransition } from "@/components/layout/PageTransition";
import { SectionTitle } from "@/components/common/SectionTitle";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const levelColors: Record<SkillLevel, string> = {
  advanced: "bg-accent/20 text-accent",
  intermediate: "bg-surface-elevated text-text-secondary border border-border",
  familiar: "bg-surface-elevated text-text-muted",
};

// Visual bar widths per level — labels stay the source of truth (no percentages shown)
const levelWidth: Record<SkillLevel, string> = {
  advanced: "90%",
  intermediate: "65%",
  familiar: "40%",
};

export function Skills() {
  const { t, language } = useLanguage();

  return (
    <PageTransition>
      <section className="pt-10">
        <SectionTitle title={t.skills.title} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.article
              key={category.title.en}
              variants={itemVariants}
              className="bg-surface rounded-xl p-6 border border-border"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                {getLocalizedValue(category.title, language)}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-text-secondary text-sm">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${levelColors[skill.level]}`}
                      >
                        {getSkillLevelLabel(skill.level, language)}
                      </span>
                    </div>
                    {/* Decorative bar — the text badge is the accessible source of truth */}
                    <div
                      aria-hidden="true"
                      className="h-1 w-full overflow-hidden rounded-full bg-surface-elevated"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: levelWidth[skill.level] }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: index * 0.05,
                        }}
                        className="h-full rounded-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}
