"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Layers, Wrench, Lightbulb } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.languages"),
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "PostgreSQL"],
    },
    {
      title: t("skills.frameworks"),
      icon: Layers,
      skills: ["React","Angular", "Node.js", "Express", "Tailwind CSS", "Next.js", "Bootstrap", "Angular Material"],
    },
    {
      title: t("skills.tools"),
      icon: Wrench,
      skills: ["Git & GitHub", "GitLab", "Insomnia", "Postman", "Docker", "VS Code", "Figma"],
    },
    {
      title: t("skills.soft"),
      icon: Lightbulb,
      skills: [t("skills.problemSolving"), t("skills.teamwork"), t("skills.agile"), t("skills.cleanCode")],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            {t("skills.title")} <span className="text-primary">{t("skills.titleHighlight")} {t("skills.titleSuffix")}</span> 
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="text-primary" size={24} />
                  <h3 className="font-mono text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="px-3 py-1 bg-accent/50 text-muted-foreground text-sm rounded font-mono hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default SkillsSection;
