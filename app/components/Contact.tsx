"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { getVariable } from "./utils";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate">
          <h2 className="text-4xl mb-12 text-center text-gray-900 dark:text-white">
            Get In Touch
          </h2>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to discussing new projects, technical leadership
              opportunities, or collaborations. Whether you're looking for a
              senior engineer to architect your next platform or want to explore
              innovative solutions, feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 justify-between flex-col md:flex-row">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <a
                      href={`mailto:${getVariable("EMAIL")}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      {getVariable("EMAIL")}
                    </a>
                  </div>
                </div>

                <a
                  href={`mailto:${getVariable("EMAIL")}?subject=Project%20Inquiry`}
                >
                  <button className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2">
                    Email Me
                    <Send className="w-5 h-5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
