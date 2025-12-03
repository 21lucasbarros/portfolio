import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import { motion } from "motion/react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(1, t.contact.requiredField),
    email: z.string().email(t.contact.invalidEmail),
    message: z.string().min(8, t.contact.minCharacters),
  });

  type FormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/devlucasbarros@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          reset();
        }, 3000);
      } else {
        throw new Error(t.contact.errorMessage);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert(t.contact.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/lucasbarrossimon/",
      icon: FaLinkedin,
    },
    {
      name: "GITHUB",
      url: "https://github.com/21lucasbarros",
      icon: FaGithub,
    },
    {
      name: "INSTAGRAM",
      url: "https://instagram.com/21lucasbarros",
      icon: FaInstagram,
    },
    {
      name: "BEHANCE",
      url: "https://www.behance.net/21lucasbarros",
      icon: SiBehance,
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-4 text-[#f7f7f7]">
            {t.contact.title.toUpperCase()}
            <span className="text-xl align-super opacity-60">™</span>
          </h2>
          <div className="w-16 h-[1px] bg-blue-500 mt-4"></div>
          <p className="text-[#f7f7f7]/60 text-base mt-6 font-light max-w-2xl">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-12"
          >
            {/* Email */}
            <div>
              <p className="text-xs font-mono tracking-[0.2em] text-[#f7f7f7]/40 mb-4 uppercase">
                Email
              </p>
              <motion.a
                href="mailto:devlucasbarros@gmail.com"
                className="group block"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg text-[#f7f7f7] group-hover:text-blue-400 transition-colors">
                    devlucasbarros@gmail.com
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#f7f7f7]/0 group-hover:text-blue-400 transition-all"
                    strokeWidth={1.5}
                  />
                </div>
              </motion.a>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-mono tracking-[0.2em] text-[#f7f7f7]/40 mb-6 uppercase">
                Social
              </p>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group flex items-center gap-3 text-[#f7f7f7]/60 hover:text-[#f7f7f7] transition-colors"
                  >
                    <social.icon className="w-4 h-4" strokeWidth={1.5} />
                    <span className="text-sm">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Nome e Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono tracking-[0.2em] text-[#f7f7f7]/40 mb-3 uppercase"
                  >
                    {t.contact.name}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    className={`bg-transparent border-[#f7f7f7]/10 border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 h-12 focus-visible:border-[#f7f7f7]/30 focus-visible:ring-0 transition-colors text-[#f7f7f7] placeholder:text-[#f7f7f7]/20 ${
                      errors.name ? "border-red-400/50" : ""
                    }`}
                    {...register("name")}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-2 font-mono"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono tracking-[0.2em] text-[#f7f7f7]/40 mb-3 uppercase"
                  >
                    {t.contact.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    className={`bg-transparent border-[#f7f7f7]/10 border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 h-12 focus-visible:border-[#f7f7f7]/30 focus-visible:ring-0 transition-colors text-[#f7f7f7] placeholder:text-[#f7f7f7]/20 ${
                      errors.email ? "border-red-400/50" : ""
                    }`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-2 font-mono"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              {/* Mensagem */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="block text-xs font-mono tracking-[0.2em] text-[#f7f7f7]/40 mb-3 uppercase"
                >
                  {t.contact.message}
                </label>
                <Textarea
                  id="message"
                  placeholder={t.contact.messagePlaceholder}
                  className={`min-h-[200px] bg-transparent border-[#f7f7f7]/10 border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 resize-none focus-visible:border-[#f7f7f7]/30 focus-visible:ring-0 transition-colors text-[#f7f7f7] placeholder:text-[#f7f7f7]/20 ${
                    errors.message ? "border-red-400/50" : ""
                  }`}
                  {...register("message")}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-2 font-mono"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 pt-4"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-12 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-sm tracking-wide overflow-hidden transition-all hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <motion.span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <span>{t.contact.sending.toUpperCase()}</span>
                        <motion.div className="flex gap-1">
                          {[0, 0.2, 0.4].map((delay, i) => (
                            <motion.div
                              key={i}
                              className="w-1 h-1 bg-white rounded-full"
                              animate={{ y: [0, -4, 0] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay,
                              }}
                            />
                          ))}
                        </motion.div>
                      </>
                    ) : (
                      <>
                        <span>{t.contact.send.toUpperCase()}</span>
                        <motion.div
                          animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Send className="w-4 h-4" strokeWidth={2} />
                        </motion.div>
                      </>
                    )}
                  </motion.span>
                </motion.button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-blue-400 text-sm font-mono"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="w-5 h-5" strokeWidth={2} />
                    </motion.div>
                    <span>{t.contact.successMessage.toUpperCase()}</span>
                  </motion.div>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
