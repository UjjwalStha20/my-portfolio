"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download
} from "lucide-react";
import emailjs from "@emailjs/browser";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  image: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  location: string;
  cgpa: string;
  highlights: string[];
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
  icon: React.ReactNode;
}

const HomePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "TrueType Plagrism Detection System",
      description:
        "A system to detect plagiarism in TrueType fonts using advanced pattern matching and machine learning algorithms.",
      technologies: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "Python",
        "Transformers",
      ],
      github: "https://github.com/lazyanusha/TrueType",
      live: undefined,
      image: "/truetype.png",
    },
  ];

  const education: EducationItem[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Tribhuvan University",
      year: "2020 — present",
      location: "Kathmandu, Nepal",
      cgpa: "-",
      highlights: [
        "Projects: 'Doctor Management System', 'Plagiarism Detection System'",
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering",
      ],
    },
  ];

  const certifications: Certification[] = [
    {
      title: "Pandas Certificate",
      issuer: "Kaggle",
      year: "2025",
      icon: <span className="text-[#a5d8ff] text-3xl">🟦</span>,
    },
    {
      title: "Data Visualization with Python",
      issuer: "Kaggle",
      year: "2025",
      icon: <span className="text-[#c4b5fd] text-3xl">🔧</span>,
    },
    {
      title: "Git and Github Certificate",
      issuer: "Advanced College of Engineering, Tribhuvan University",
      year: "2025",
      icon: <span className="text-[#f9a8d4] text-3xl">☁️</span>,
    },
  ];

  const skills = {
    technical: [
      { name: "React / Node.js", level: 56 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 78 },
      { name: "REST APIs", level: 54 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 },
      { name: "Git & GitHub", level: 76 },
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Quick Learner",
      "Effective Communication",
      "Time Management",
      "Adaptability",
    ],
    tools: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "Pycharm",
      "Jupyter Notebook",
    ],
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert(
        "Thank you! Your message has been received. I'll get back to you soon ✨",
      );
      setFormData({ name: "", email: "", message: "" });
      emailjs.send(
        import.meta.env.VITE_service_id,
        import.meta.env.VITE_template_id,
        formData,
        import.meta.env.VITE_user_id,
      );
      setIsSubmitting(false);
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0f0f15] text-[#f0f0f5] overflow-x-hidden font-sans">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#16181f]/80 backdrop-blur-2xl border-b border-[#2a2f3f] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-end md:justify-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {[
              { label: "Home", id: "hero" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Projects", id: "projects" },
              { label: "Education", id: "education" },
              { label: "Certifications", id: "certifications" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#c4b5fd] transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-3 text-[#f0f0f5]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#16181f]/95 backdrop-blur-2xl border-t border-[#2a2f3f]">
            <div className="flex flex-col py-6 px-6 gap-6 text-lg">
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "about" },
                { label: "Skills", id: "skills" },
                { label: "Projects", id: "projects" },
                { label: "Education", id: "education" },
                { label: "Certifications", id: "certifications" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left hover:text-[#c4b5fd] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-4 px-8 py-4 rounded-3xl bg-gradient-to-r from-[#c4b5fd] to-[#a5d8ff] text-[#0f0f15] text-center font-medium"
              >
                Let's Connect
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#0f0f15] via-[#1a1b2e] to-[#0f0f15] pt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(at_30%_70%,rgba(196,181,253,0.08)_0%,transparent_60%)]"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#16181f]/70 backdrop-blur-md border border-[#2a2f3f] mb-8">
            <div className="w-2 h-2 bg-[#a5d8ff] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium tracking-widest uppercase text-[#a0a0c0]">
              Open to opportunities
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-[#c4b5fd] via-[#a5d8ff] to-[#f9a8d4] bg-clip-text text-transparent">
              Ujjwal
            </span>
          </h1>

          <p className="text-4xl md:text-5xl font-light tracking-tight text-[#a0a0c0] mb-8">
            Aspiring Software Developer
          </p>

          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[#a0a0c0] leading-relaxed mb-12">
            Recent CS graduate passionate about crafting elegant, performant
            digital experiences with modern tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-10 py-5 rounded-3xl bg-gradient-to-r from-[#c4b5fd] to-[#a5d8ff] text-[#0f0f15] font-medium flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-[#c4b5fd]/30"
            >
              View Projects
              <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>

            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1WuDjocuQ4N4eHXF8zcuyS52maaj_mWgr&export=download"
              target="_blank"
              className="px-10 py-5 rounded-3xl border-2 border-[#2a2f3f] hover:border-[#c4b5fd] font-medium flex items-center gap-3 hover:bg-[#16181f] transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <div className="absolute  mt-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs tracking-widest opacity-60">
            SCROLL TO EXPLORE
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#a0a0c0] to-transparent"></div>
          </div>
        </div>

        <div className="absolute top-1/4 right-12 w-64 h-64 bg-[#f9a8d4]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-12 w-80 h-80 bg-[#a5d8ff]/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="py-28 px-6 bg-[#16181f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <div className="sticky top-28">
                <div className="inline-block px-5 py-2 rounded-3xl bg-[#c4b5fd]/10 text-[#c4b5fd] text-sm font-medium mb-6">
                  ABOUT ME
                </div>
                <h2 className="text-6xl font-bold tracking-tighter leading-none mb-8">
                  Turning ideas into
                  <br />
                  beautiful code
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#c4b5fd] to-[#a5d8ff] rounded-full"></div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-10 text-lg leading-relaxed text-[#a0a0c0]">
              <p>
                Hey! I'm a passionate fresher with solid foundations in
                full-stack web development. Currently studying at Tribhuvan
                University — focused on clean, performant and user-centered
                applications.
              </p>
              <p>
                From curiosity about how the web works to building real products
                — I enjoy solving problems with elegant, modern solutions.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#2a2f3f]">
                <div>
                  <div className="uppercase text-xs tracking-widest text-[#a0a0c0]/70 mb-4">
                    STRENGTHS
                  </div>
                  <ul className="space-y-4 text-base">
                    {[
                      "Problem Solver",
                      "Fast Learner",
                      "Team Player",
                      "Detail-Oriented",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#a5d8ff]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="uppercase text-xs tracking-widest text-[#a0a0c0]/70 mb-4">
                    CURRENT FOCUS
                  </div>
                  <p className="leading-relaxed">
                    Machine learning and AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-28 px-6 bg-[#0f0f15]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 rounded-3xl bg-[#f9a8d4]/10 text-[#f9a8d4] text-sm font-medium mb-4">
              SKILLS
            </div>
            <h2 className="text-6xl font-bold tracking-tighter">
              What I bring to the table
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <span className="text-[#a5d8ff]">💻</span> Technical
              </h3>
              <div className="space-y-8">
                {skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2.5 text-[#a0a0c0]">
                      <span className="font-medium">{skill.name}</span>
                      <span className="opacity-70">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-[#2a2f3f] rounded-3xl overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#c4b5fd] to-[#a5d8ff] rounded-3xl transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <span className="text-[#f9a8d4]">🤝</span> Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.soft.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-[#16181f] rounded-3xl px-7 py-6 text-center border border-[#2a2f3f] hover:border-[#c4b5fd]/40 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <span className="text-[#c4b5fd]">🛠️</span> Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool, i) => (
                  <div
                    key={i}
                    className="bg-[#16181f] px-6 py-3 rounded-3xl text-sm border border-[#2a2f3f] hover:bg-[#2a2f3f] hover:border-[#a5d8ff]/40 transition-all"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6 bg-[#16181f]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="inline-block px-5 py-2 rounded-3xl bg-[#a5d8ff]/10 text-[#a5d8ff] text-sm font-medium mb-4">
                FEATURED WORK
              </div>
              <h2 className="text-6xl font-bold tracking-tighter">
                Projects that I’m proud of
              </h2>
            </div>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[#c4b5fd] transition-colors"
            >
              All projects on GitHub <ExternalLink size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#0f0f15] border border-[#2a2f3f] rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#c4b5fd]/10 hover:-translate-y-3 transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f15]/90 via-[#0f0f15]/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-3xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-[#a0a0c0] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-4 py-1.5 bg-[#2a2f3f] text-[#c0c0d0] rounded-3xl"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-3 border border-[#2a2f3f] hover:bg-[#2a2f3f] transition-all py-4 rounded-2xl font-medium text-[#f0f0f5]"
                    >
                      <Github size={20} /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-[#c4b5fd] to-[#a5d8ff] text-[#0f0f15] py-4 rounded-2xl font-medium hover:brightness-110 transition-all"
                      >
                        Live Demo <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-28 px-6 bg-[#0f0f15]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 rounded-3xl bg-[#c4b5fd]/10 text-[#c4b5fd] text-sm font-medium mb-4">
              JOURNEY
            </div>
            <h2 className="text-6xl font-bold tracking-tighter">Education</h2>
          </div>

          <div className="relative pl-10 border-l-2 border-[#c4b5fd]/30">
            {education.map((edu, index) => (
              <div key={index} className="mb-16 last:mb-0 relative">
                <div className="absolute -left-[13px] top-2 w-6 h-6 rounded-full border-4 border-[#0f0f15] bg-gradient-to-br from-[#c4b5fd] to-[#a5d8ff]"></div>

                <div className="bg-[#16181f] rounded-3xl p-10 border border-[#2a2f3f]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-3xl font-semibold tracking-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-[#a0a0c0] text-xl mt-1">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right md:text-left">
                      <p className="font-medium text-lg">{edu.year}</p>
                      <p className="text-sm text-[#a0a0c0]/70">
                        {edu.location}
                      </p>
                    </div>
                  </div>

                  <div className="inline-block px-5 py-1 bg-[#2a2f3f] text-[#f0f0f5] rounded-3xl text-sm mb-6">
                    CGPA: {edu.cgpa}
                  </div>

                  <ul className="space-y-3">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-[#a0a0c0]">
                        <span className="text-[#a5d8ff] mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-28 px-6 bg-[#16181f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 rounded-3xl bg-[#f9a8d4]/10 text-[#f9a8d4] text-sm font-medium mb-4">
              VALIDATIONS
            </div>
            <h2 className="text-6xl font-bold tracking-tighter">
              Certifications & Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#0f0f15] rounded-3xl p-10 border border-[#2a2f3f] hover:border-[#c4b5fd]/40 transition-all group"
              >
                <div className="mb-8 text-6xl opacity-80 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <h4 className="font-semibold text-2xl leading-tight mb-3">
                  {cert.title}
                </h4>
                <p className="text-[#a0a0c0] mb-6">{cert.issuer}</p>
                <div className="inline-block px-6 py-2 bg-[#2a2f3f] rounded-3xl text-sm font-medium">
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 px-6 bg-gradient-to-br from-[#0f0f15] to-[#1a1b2e]"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 rounded-3xl bg-[#16181f]/70 backdrop-blur-md text-[#f0f0f5] text-sm font-medium mb-6">
              SAY HELLO 👋
            </div>
            <h2 className="text-6xl font-bold tracking-tighter">
              Let’s build something together
            </h2>
            <p className="mt-6 text-xl text-[#a0a0c0]">
              I’m currently open to full-time roles, internships, and exciting
              freelance projects.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-3 text-[#a0a0c0]">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-7 py-6 bg-[#16181f] rounded-3xl focus:outline-none border border-[#2a2f3f] focus:border-[#c4b5fd] transition-all placeholder:text-[#a0a0c0]/50 text-[#f0f0f5]"
                  placeholder="Alex Rivera"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3 text-[#a0a0c0]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-7 py-6 bg-[#16181f] rounded-3xl focus:outline-none border border-[#2a2f3f] focus:border-[#c4b5fd] transition-all placeholder:text-[#a0a0c0]/50 text-[#f0f0f5]"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 text-[#a0a0c0]">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-7 py-6 bg-[#16181f] rounded-3xl focus:outline-none border border-[#2a2f3f] focus:border-[#c4b5fd] transition-all resize-y placeholder:text-[#a0a0c0]/50 text-[#f0f0f5]"
                placeholder="Hi Ujjwal, I came across your portfolio and..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-7 rounded-3xl bg-gradient-to-r from-[#c4b5fd] to-[#a5d8ff] text-[#0f0f15] font-semibold text-lg hover:brightness-110 active:scale-[0.985] transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg shadow-[#c4b5fd]/20"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="flex justify-center gap-8 mt-16">
            <a
              href="https://www.linkedin.com/in/ujjwal-shrestha-917581266/"
              target="_blank"
              className="text-[#f0f0f5] hover:text-[#c4b5fd] transition-colors"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/UjjwalStha20"
              target="_blank"
              className="text-[#f0f0f5] hover:text-[#c4b5fd] transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="mailto:ujjwal@email.com"
              className="text-[#f0f0f5] hover:text-[#c4b5fd] transition-colors"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0f] text-[#a0a0c0]/80 py-12 px-6 border-t border-[#2a2f3f]">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>
            © {new Date().getFullYear()} Ujjwal Shrestha. Crafted with ❤️ and
            lots of ☕ in Kathmandu, Nepal.
          </p>
          
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
