"use client";

import { Mail } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { getVariable } from "./utils";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span>Developed by Archana Sardhara</span>

          <div className="flex gap-4">
            <a
              href={getVariable("GITHUB_URL")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={getVariable("LINKEDIN_URL")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${getVariable("EMAIL")}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            © 2026 Archana Sardhara. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
