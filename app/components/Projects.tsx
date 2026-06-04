"use client";

import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Github } from "./icons";
import { projects } from "../config/project";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate">
          <h2 className="text-4xl mb-12 text-center text-gray-900 dark:text-white">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group scroll-animate delay-[${index * 0.1}s] duration-[0.6s]`}
              >
                <div className="relative overflow-hidden h-48">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.role && (
                    <p className="absolute top-2 left-2 bg-primary/90 text-white px-2 py-1 rounded-full text-sm shadow-lg">
                      {project.role}
                    </p>
                  )}
                  {project.description && (
                    <p className="text-gray-500 dark:text-gray-400 mb-4 italic text-sm">
                      {project.description}
                    </p>
                  )}
                  {project.roleDescription && (
                    <p className="text-gray-700 dark:text-gray-400 mb-4">
                      {project.roleDescription}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {Boolean(project.github || project.url) && (
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          Code
                        </a>
                      )}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
