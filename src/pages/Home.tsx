import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { profile } from "@/data/profile";
import { PageTransition } from "@/components/layout/PageTransition";
import { Container } from "@/components/ui/Container";

export function Home() {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      text: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      text: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: MapPin,
      text: profile.location[language],
      href: null,
    },
  ];

  return (
    <PageTransition>
      <section className="relative min-h-screen overflow-hidden bg-surface text-text-secondary px-5 sm:px-8 lg:px-[60px] max-[1200px]:pt-8 rounded-xl">
        <Container>
          <div className="mx-auto w-full max-w-[1280px]">
            {/* Hero Grid */}
            <div className="grid min-h-[716px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="relative z-10 lg:col-span-7">
                {/* Role */}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-6 block text-[12px] font-semibold uppercase tracking-[0.18em]"
                >
                  {profile.role[language]}
                </motion.span>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-4 max-w-2xl text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-text-secondary sm:text-3xl lg:text-[40px]"
                >
                  {t.hero.greeting}
                </motion.h2>
                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8 text-[48px] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[64px] lg:text-[84px]"
                >
                  {profile.name[language]}
                </motion.h1>

                {/* Introduction */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-12 max-w-xl text-base leading-[1.6] text-text-secondary sm:text-lg"
                >
                  {profile.intro[language]}
                </motion.p>

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-14 flex flex-wrap items-center gap-4"
                >
                  <a
                    href="/CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-4 text-[12px] font-bold uppercase tracking-[0.1em] text-bg transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5"
                  >
                    <Download size={17} />
                    {t.hero.viewResume}
                  </a>

                  {/* Projects */}
                  <a
                    href="/projects"
                    className="group inline-flex items-center justify-center gap-3 border px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-text-primary transition-all duration-300 hover:border-accent hover:text-accent"
                  >
                    {t.hero.exploreProjects}
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-4 "
                >
                  {contactInfo.map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 hover:text-accent"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center border-border   transition-colors duration-700 hover:border-accent hover:text-accent">
                        <item.icon size={15} />
                      </div>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm  transition-colors duration-300 hover:text-accent"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-sm hover:text-accent">
                          {item.text}
                        </span>
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="relative mt-10 flex justify-center lg:col-span-5 lg:mt-0"
              >
                <div className="group relative aspect-[4/5] w-full max-w-[430px]">
                  {/* Background Card */}
                  <div className="absolute inset-0 rounded-lg bg-surface-elevated rotate-3 transition-transform duration-500 group-hover:rotate-6" />

                  {/* Image */}
                  <img
                    src={profile.avatar}
                    alt={profile.name[language]}
                    className="absolute inset-0 z-10 h-full w-full rounded-lg object-cover -rotate-2 transition-transform duration-500 group-hover:rotate-0"
                  />

                  {/* React */}
                  <div className="absolute -left-5 top-1/4 z-20 border border-border bg-surface-elevated/90 px-4 py-2 text-[12px] font-semibold tracking-[0.1em] text-text-primary shadow-xl backdrop-blur-md -rotate-6 transition-transform duration-500 group-hover:-translate-x-1">
                    REACT
                  </div>

                  {/* Next.js */}
                  <div className="absolute -right-4 top-1/2 z-20 border border-border bg-surface-elevated/90 px-4 py-2 text-[12px] font-semibold tracking-[0.1em] text-text-primary shadow-xl backdrop-blur-md rotate-3 transition-transform duration-500 group-hover:translate-x-1">
                    NEXT.JS
                  </div>

                  {/* TypeScript */}
                  <div className="absolute -left-4 bottom-1/4 z-20 border border-border bg-surface-elevated/90 px-4 py-2 text-[12px] font-semibold tracking-[0.1em] text-text-primary shadow-xl backdrop-blur-md rotate-2 transition-transform duration-500 group-hover:-translate-x-1">
                    TYPESCRIPT
                  </div>

                  {/* UI/UX */}
                  <div className="absolute bottom-8 right-8 z-20 border border-border bg-surface-elevated/90 px-4 py-2 text-[12px] font-semibold tracking-[0.1em] text-text-primary shadow-xl backdrop-blur-md -rotate-3 transition-transform duration-500 group-hover:translate-x-1">
                    UI/UX
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ================= HERO BOTTOM ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-8 border-t border-border pt-8 pb-5 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] ">
                <span>Web Technologies</span>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 sm:gap-12">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-text-secondary">
                    Next.js
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl font-bold text-text-secondary">
                    React.js
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl font-bold text-text-secondary">
                    Three.js
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-text-secondary">
                    UI/UX
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
