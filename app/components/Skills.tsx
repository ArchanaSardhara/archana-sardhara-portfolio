"use client";

import { skills } from "../config/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate">
          <h2 className="text-4xl mb-12 text-center text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((category, catIndex) => (
              <div
                key={category.category}
                className={`bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-sm scroll-animate delay-[${catIndex * 0.1}s] duration-[0.6s]`}
              >
                <h3 className="text-xl mb-6 text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
