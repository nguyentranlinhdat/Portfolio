import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, GitBranch, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { projects } from "@/data/projects";
import { filterProjects } from "@/features/projects/projectUtils";
import { PageTransition } from "@/components/layout/PageTransition";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { ProjectCategory } from "@/types";

const categories: {
  value: ProjectCategory;
  label: { en: string; vi: string };
}[] = [
  { value: "all", label: { en: "All", vi: "Tất cả" } },
  { value: "nextjs", label: { en: "Next.js", vi: "Next.js" } },
  { value: "react", label: { en: "React", vi: "React" } },
  { value: "typescript", label: { en: "TypeScript", vi: "TypeScript" } },
  { value: "ai", label: { en: "AI", vi: "AI" } },
  { value: "ecommerce", label: { en: "E-commerce", vi: "E-commerce" } },
  { value: "3d", label: { en: "3D", vi: "3D" } },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Projects() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = filterProjects(
    projects,
    activeCategory,
    searchQuery,
    language,
  );

  return (
    <PageTransition>
      <section className="pt-10">
        <SectionTitle title={t.projects.title} />

        {/* Search */}
        <div className="relative mb-6">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="text"
            placeholder={t.projects.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === cat.value
                  ? "bg-accent text-bg font-medium"
                  : "bg-surface text-text-secondary border border-border hover:border-accent hover:text-text-primary"
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={itemVariants}
                  className="bg-surface rounded-xl border border-border overflow-hidden group hover:border-accent/50 transition-colors"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {project.title[language]}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                      {project.description[language]}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-surface-elevated text-text-muted rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
                      >
                        <GitBranch size={16} />
                        {t.projects.viewOnGithub}
                      </a>
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      ) : (
                        <span
                          title={t.projects.notDeployed}
                          className=" inline-flex items-center gap-1.5 text-sm text-text-muted cursor-not-allowed opacity-60 "
                        >
                          {t.projects.notDeployed}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-text-muted py-12"
            >
              {t.projects.noResults}
            </motion.p>
          )}
        </AnimatePresence>
      </section>
    </PageTransition>
  );
}
