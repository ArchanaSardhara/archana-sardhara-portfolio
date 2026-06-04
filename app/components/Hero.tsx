"use client";

import { Mail, ArrowDown } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { getVariable, getExperienceYear } from "./utils";

const totalYear = getExperienceYear();

export function Hero() {
  function scrollDown(ele: any) {
    ele.target.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-in">
          <h1 className="text-5xl md:text-7xl mb-6 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-primary">{getVariable("NAME")}</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">
            Senior Full Stack Software Engineer
          </p>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {totalYear}+ years of experience building scalable web applications.
            I specialize in system architecture, team leadership, and delivering
            robust solutions to complex engineering problems.
          </p>

          <div className="flex gap-6 justify-center mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href={getVariable("GITHUB_URL")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={getVariable("LINKEDIN_URL")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${getVariable("EMAIL")}`}
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="float absolute bottom-10 left-1/2 -translate-x-1/2 hover:cursor-pointer p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
        <ArrowDown
          className="w-6 h-6 text-gray-500 dark:text-gray-400"
          onClick={scrollDown}
        />
      </div>
    </section>
  );
}
