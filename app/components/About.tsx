"use client";

import { Code2, Database, Rocket, Users } from "lucide-react";
import { getExperienceYear } from "./utils";

const totalYear = getExperienceYear();

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Architecture",
      description: "Designing scalable microservices and distributed systems",
    },
    {
      icon: Database,
      title: "System Design",
      description: "Building high performance backend infrastructures",
    },
    {
      icon: Rocket,
      title: "Leadership",
      description: "Mentoring teams and driving technical excellence",
    },
    {
      icon: Users,
      title: "Cross functional",
      description: "Collaborating with product, design, and stakeholders",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate">
          <h2 className="text-4xl mb-12 text-center text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                I'm a Senior Software Engineer with {totalYear}+ years of
                experience designing and delivering enterprise-scale web
                applications. I've led cross-functional teams, mentored
                engineers, and contributed to technical strategy across multiple
                successful products.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                My expertise lies in full-stack development, with a strong focus
                on building scalable backend systems, improving application
                performance, and applying best engineering practices to
                production systems. I enjoy solving complex technical challenges
                and turning ideas into reliable, production-ready solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Beyond engineering, I’m committed to continuous learning,
                contributing to open-source projects, and staying up to date
                with advancements in cloud computing, AI concepts, emerging
                technologies, and modern web development ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                //   transition={{ duration: 0.6, delay: index * 0.1 }}
                <div
                  key={item.title}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm scroll-animate"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
