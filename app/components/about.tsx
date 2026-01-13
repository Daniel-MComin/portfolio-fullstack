"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const education = [
    {
      institution: t("about.edu1.institution"),
      degree: t("about.edu1.degree"),
      period: t("about.edu1.period"),
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-2">
            <span className="text-primary">{t("about.title")}</span> {t("about.titleHighlight")}
          </h2>
          <div className="w-24 h-1 bg-primary mb-8" />

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("about.intro")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.description")}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" size={24} />
                {t("about.education")}
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="border-l-2 border-primary pl-4"
                  >
                    <h4 className="font-mono font-semibold text-foreground">
                      {edu.institution}
                    </h4>
                    <p className="text-muted-foreground text-sm">{edu.degree}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <span className="flex items-center gap-1 text-primary">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default AboutSection;
