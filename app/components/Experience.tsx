"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "../config/experience";

export function Experience() {
  const experiences2 = [
    {
      type: "work",
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Leading a team of 5 engineers in building cloud native solutions. Architected microservices infrastructure serving 100k+ daily active users. Mentored junior developers and established coding standards that improved team productivity by 30%.",
    },
    {
      type: "work",
      title: "Software Engineer II",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Led full stack development of core product features. Implemented CI/CD pipelines reducing deployment time by 70%. Optimized database queries improving application performance by 40%. Collaborated with product team to define technical roadmap.",
    },
    {
      type: "work",
      title: "Software Engineer",
      company: "Digital Solutions Corp",
      period: "2018 - 2020",
      description:
        "Developed and maintained multiple client facing web applications using React and Node.js. Built RESTful APIs and integrated third-party services. Participated in code reviews and contributed to technical documentation.",
    },
    {
      type: "work",
      title: "Junior Software Developer",
      company: "WebDev Agency",
      period: "2017 - 2018",
      description:
        "Built responsive web applications and worked on e commerce platforms. Gained experience in agile development and collaborative team environments. Contributed to open-source projects and improved front-end development skills.",
    },
    {
      type: "education",
      title: "B.S. Computer Science",
      company: "University of Technology",
      period: "2013 - 2017",
      description:
        "Graduated with honors (GPA: 3.8/4.0). Focus on software engineering, algorithms, data structures, and distributed systems. Led capstone project on machine learning applications.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-animate">
          <h2 className="text-4xl mb-12 text-center text-gray-900 dark:text-white">
            Experience & Education
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                //   transition={{ duration: 0.6, delay: index * 0.1 }}
                <div key={index} className="relative pl-20 scroll-animate">
                  <div className="absolute left-5 top-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    {exp.type === "work" ? (
                      <Briefcase className="w-3 h-3 text-white" />
                    ) : (
                      <GraduationCap className="w-3 h-3 text-white" />
                    )}
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-xl text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary mb-3">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
