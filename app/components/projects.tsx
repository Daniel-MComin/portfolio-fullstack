"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ImageIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.description"),
      technologies: ["Angular", "Angular Material", "SQLite", "Python", "Django REST"],
      github: "https://github.com/Daniel-MComin/stockmaster-api",
      image: "https://www.phsoft.com.br/wp-content/uploads/2020/10/controle-estoque.png",
    },
    {
      title: t("projects.taskManager.title"),
      description: t("projects.taskManager.description"),
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Daniel-MComin/The-Pokedex-Finished",
      demo: "https://daniel-mcomin.github.io/The-Pokedex-Finished/",
      image: "/pokedex.png",
    },
    {
      title: t("projects.weather.title"),
      description: t("projects.weather.description"),
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: null,
    },
    {
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: null,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            {t("projects.title")} <span className="text-primary">{t("projects.titleHighlight")}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent to-card">
                      <ImageIcon size={48} className="text-muted-foreground/50" />
                    </div>
                  )}
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card rounded-full text-foreground hover:text-primary hover:bg-card/80 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card rounded-full text-foreground hover:text-primary hover:bg-card/80 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-mono text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 bg-accent/50 text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default ProjectsSection;