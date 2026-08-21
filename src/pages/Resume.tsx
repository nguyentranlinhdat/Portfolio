import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Download, User } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { profile, education, workExperience } from "@/data/profile";
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

export function Resume() {
  const { t, language } = useLanguage();

  return (
    <PageTransition>
      <section className="pt-10">
        <SectionTitle title={t.resume.title} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Personal Info */}
          <motion.article
            variants={itemVariants}
            className="bg-surface rounded-xl p-6 border border-border"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              {t.resume.personalInfo}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-secondary">
                <User size={18} className="text-accent shrink-0" />
                <div>
                  <p className="text-accent text-[20px] font-semibold">
                    {profile.name[language]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Calendar size={18} className="text-accent shrink-0" />
                <div>
                  <p className="text-sm text-text-muted">{t.resume.dob}</p>
                  <p className="text-text-primary">{profile.dob}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <span className="text-accent w-4.5 text-center shrink-0">
                  ♂
                </span>
                <div>
                  <p className="text-sm text-text-muted">{t.resume.gender}</p>
                  <p className="text-text-primary">
                    {profile.gender[language]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin size={18} className="text-accent shrink-0" />
                <div>
                  <p className="text-sm text-text-muted">
                    {t.contact.location}
                  </p>
                  <p className="text-text-primary">
                    {profile.location[language]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Mail size={18} className="text-accent shrink-0" />
                <div>
                  <p className="text-sm text-text-muted">{t.resume.email}</p>
                  <p className="text-text-primary">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Phone size={18} className="text-accent shrink-0" />
                <div>
                  <p className="text-sm text-text-muted">{t.resume.phone}</p>
                  <p className="text-text-primary">{profile.phone}</p>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="bg-surface rounded-xl p-6 border border-border"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              {t.resume.careerObjective}
            </h3>
            <p className="text-text-secondary leading-relaxed whitespace-pre-line">
              {profile.careerObjective[language]}
            </p>
          </motion.article>

          {/* Education */}
          <motion.article
            variants={itemVariants}
            className="bg-surface rounded-xl p-6 border border-border"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              {t.resume.education}
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <p className="text-accent font-medium">
                  {edu.institution[language]}
                </p>
                <p className="text-text-primary">{edu.degree[language]}</p>
                <p className="text-text-muted text-sm">
                  {edu.startDate} – {edu.endDate}
                </p>
                <p className="text-text-secondary">GPA: {edu.gpa}</p>
              </div>
            ))}
          </motion.article>

          {/* Work Experience */}
          <motion.article
            variants={itemVariants}
            className="bg-surface rounded-xl p-6 border border-border"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              {t.resume.workExperience}
            </h3>
            {workExperience.map((work, index) => (
              <div key={index} className="space-y-3">
                <div>
                  <p className="text-accent font-medium">
                    {work.position[language]}
                  </p>
                  <p className="text-accent">{work.company}</p>
                  <p className="text-text-muted text-sm">
                    {work.startDate} – {work.endDate}
                  </p>
                </div>
                <p className="text-text-secondary">
                  {work.description[language]}
                </p>
                <ul className="space-y-1">
                  {work.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-text-secondary text-sm flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      {highlight[language]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.article>
        </motion.div>

        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg font-semibold rounded-lg hover:bg-accent-hover transition-colors"
          >
            <Download size={18} />
            {t.resume.downloadCV}
          </a>
        </motion.div>
      </section>
    </PageTransition>
  );
}
