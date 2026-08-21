import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { profile } from "@/data/profile";
import { validateContactForm } from "@/features/contact/contactValidation";
import { PageTransition } from "@/components/layout/PageTransition";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { ContactFormData, ContactFormErrors, FormStatus } from "@/types";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData, t.contact);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <PageTransition>
      <section className="pt-10">
        <SectionTitle title={t.contact.title} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 lg:col-span-4"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">
                    {t.contact.emailLabel}
                  </p>
                  <p className="text-text-primary">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="text-text-primary">{profile.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">
                    {t.contact.location}
                  </p>
                  <p className="text-text-primary">
                    {profile.location[language]}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-surface rounded-xl p-8 border border-border text-center"
              >
                <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {t.contact.successTitle}
                </h3>
                <p className="text-text-secondary">
                  {t.contact.successMessage}
                </p>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-surface rounded-xl p-8 border border-border text-center"
              >
                <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {t.contact.errorTitle}
                </h3>
                <p className="text-text-secondary">{t.contact.errorMessage}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-text-muted mb-1.5"
                  >
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-text-muted mb-1.5"
                  >
                    {t.contact.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-text-muted mb-1.5"
                  >
                    {t.contact.subjectLabel}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.subjectPlaceholder}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-text-muted mb-1.5"
                  >
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    rows={5}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    t.contact.sending
                  ) : (
                    <>
                      <Send size={18} />
                      {t.contact.sendMessage}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
