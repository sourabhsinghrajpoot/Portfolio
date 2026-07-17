import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { lazy, Suspense, useRef } from "react";
import {
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink,
  Code2, Brain, Sparkles, ArrowUpRight, Award, Briefcase, GraduationCap,
} from "lucide-react";
import sourabhAsset from "@/assets/sourabh.png.asset.json";

const Scene3D = lazy(() => import("@/components/Scene3D"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sourabh Singh — SDE / AI-ML Engineer Portfolio" },
      { name: "description", content: "B.Tech CSE (AKGEC 2026). Built a 121K pps DPI engine in C++, StockAlphas AI trading platform, Orynta AI e-commerce, and Career-Connect. Prodigy InfoTech + Zidio intern." },
      { property: "og:title", content: "Sourabh Singh — SDE / AI-ML Engineer" },
      { property: "og:description", content: "Full-stack + AI/ML engineer building high-performance systems." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: sourabhAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const EMAIL = "sourabhsingh2003ltp@gmail.com";
const PHONE = "+91-9695098754";
const GITHUB = "https://github.com/sourabhsinghrajpoot";
const LINKEDIN = "https://linkedin.com/in/sourabhsingh2003";

const projects = [
  {
    title: "Packet Analyzer — DPI Engine",
    tag: "Systems / C++",
    year: "2026",
    metric: "121,500+ pps",
    desc: "Multi-threaded Deep Packet Inspection engine with producer-consumer queues and consistent-hashing load balancing. 45% throughput gain over single-threaded design. SNI extraction, stateful connection tracking, rule-based app identification (YouTube, Facebook, DNS).",
    stack: ["C++", "Multi-threading", "Consistent Hashing", "Linux"],
    live: "https://github.com/sourabhsinghrajpoot/packet-analyzer",
    liveLabel: "View on GitHub",
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "StockAlphas — AI Trading Platform",
    tag: "Full-stack / AI",
    year: "2026",
    metric: "10+ REST APIs",
    desc: "AI-powered stock analysis platform with JWT auth, real-time watchlists, and portfolio P&L. Yahoo Finance OHLCV, RSI/MACD/MA indicators, and an external ML microservice for Buy/Sell/Hold signals.",
    stack: ["Next.js 16", "TypeScript", "MongoDB", "Python ML", "Framer Motion"],
    live: "https://stockalphas-eight.vercel.app/",
    liveLabel: "Live Demo",
    accent: "from-cyan-400 to-blue-600",
  },
  {
    title: "Orynta — AI E-Commerce",
    tag: "AI Commerce",
    year: "2025",
    metric: "93% TypeScript",
    desc: "AI-powered e-commerce platform on Next.js App Router. Strict TS + ESLint reduced runtime errors by ~30%. Reusable components and optimized routing sped feature delivery by ~40%.",
    stack: ["Next.js", "TypeScript", "AI", "App Router"],
    live: "https://www.orynta.store/",
    liveLabel: "Live Store",
    accent: "from-emerald-400 to-teal-600",
  },
  {
    title: "Career-Connect",
    tag: "EdTech / SSR",
    year: "2025",
    metric: "35% faster prep",
    desc: "Placement-prep platform with structured roadmaps, curated interview questions, and SSR. Cut peer prep time by 35% and improved learning consistency by 30% across a 20-user cohort.",
    stack: ["Next.js", "React", "Node.js", "SSR"],
    live: "https://career-connect99.vercel.app/",
    liveLabel: "Live Site",
    accent: "from-orange-400 to-pink-600",
  },
];

const experiences = [
  {
    role: "AI/ML Intern",
    company: "Prodigy InfoTech",
    period: "Dec 2025 – May 2026",
    points: [
      "Built and evaluated predictive models with Python, Pandas, NumPy, Scikit-learn.",
      "Data preprocessing, feature engineering, EDA; visualized insights with Matplotlib & Seaborn.",
      "Contributed to real-world AI/ML use cases, documentation, and technical presentations.",
    ],
    icon: Brain,
  },
  {
    role: "Frontend Developer Intern",
    company: "Zidio Development",
    period: "Aug 2025 – Sep 2025",
    points: [
      "Built responsive UI for an Excel Analytics Platform; cut re-renders 30% via useMemo/useCallback.",
      "Developed chart & dashboard modules with backend API integration for live Excel updates.",
      "Shipped 3 feature modules on schedule in a 5-person agile team.",
    ],
    icon: Code2,
  },
  {
    role: "Technology Apprentice",
    company: "Accenture UK — Virtual Experience",
    period: "2025",
    points: [
      "Completed Accenture UK Technology Apprenticeship simulation program.",
      "Practical exposure to enterprise engineering workflows, agile delivery, and code review.",
      "Built solutions aligned with real client-project constraints and stakeholder briefs.",
    ],
    icon: Briefcase,
  },
];

const certificates = [
  { name: "IBM SkillBuild — Agentic AI: Learner to Builder", issuer: "CSRBOX × IBM", link: "https://drive.google.com/file/d/1RxjVTcPDN_an4YWRpMP2WMl2U3wD_ICE/view" },
  { name: "J.P. Morgan SWE Virtual Experience", issuer: "Forage × JPMC", link: "https://drive.google.com/file/d/18lkjVZKr2IXqM6hPMA2E1inMEqH3bcsm/view" },
  { name: "React Development", issuer: "Certified", link: "https://drive.google.com/file/d/1h78QktMah2aAegZh5I_uMK5j2Bmczxdr/view?usp=sharing" },
  { name: "Python & Django", issuer: "Certified", link: "https://drive.google.com/file/d/1UiPntQmXgHqqzLNWgo_6zcQZKISRRYPt/view?usp=drive_link" },
  { name: "IDE Bootcamp", issuer: "Bootcamp", link: "https://drive.google.com/file/d/1tuVonp4-kgjEdXLv5Mq6ezqPoATxGhTO/view?usp=sharing" },
  { name: "Graphs Camp Participation", issuer: "DSA Camp", link: "https://drive.google.com/file/d/1jPLYkfG3Rznd6_D_EhPiFAOcckPJDZ5z/view?usp=drive_link" },
];

const skills = {
  Languages: ["C++", "JavaScript", "TypeScript", "Python"],
  Frontend: ["React.js", "Next.js", "Tailwind", "Framer Motion"],
  Backend: ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL"],
  "AI / ML": ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  Tools: ["Git", "Docker", "Linux/Bash", "Vercel", "Postman", "Figma"],
};

function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Font imports */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <Nav />

      {/* HERO */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 -z-10">
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </motion.div>

        <div className="container mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for SDE / AI-ML roles · 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold leading-[0.95] mb-6"
            >
              Sourabh
              <br />
              <span className="text-gradient">Singh.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8"
            >
              I engineer <span className="text-foreground font-medium">high-performance systems</span> and <span className="text-foreground font-medium">AI-driven products</span>. B.Tech CSE from AKGEC · Ex-Prodigy InfoTech · Ex-Zidio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:scale-105 transition-transform glow">
                View my work <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium hover:bg-white/5 transition">
                <Mail className="w-4 h-4" /> Hire me
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full glass hover:bg-white/5 transition"><Github className="w-4 h-4" /></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full glass hover:bg-white/5 transition"><Linkedin className="w-4 h-4" /></a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 grid grid-cols-3 gap-6 max-w-lg"
            >
              {[
                { k: "121K+", v: "packets/sec" },
                { k: "3", v: "internships" },
                { k: "4+", v: "shipped projects" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-3xl font-bold text-gradient">{s.k}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent blur-3xl opacity-40 rounded-full" />
            <div className="relative animate-float">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glass p-2 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={sourabhAsset.url} alt="Sourabh Singh" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 rotate-[-6deg]">
                <div className="text-xs text-muted-foreground">Currently</div>
                <div className="font-mono text-sm">AI/ML @ Prodigy</div>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 rotate-6">
                <div className="text-xs text-muted-foreground">Grad</div>
                <div className="font-mono text-sm">AKGEC · 2026</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-8 border-y border-border/50 overflow-hidden glass">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-2xl font-display font-semibold">
          {[...Array(2)].flatMap((_, i) =>
            ["C++", "•", "Next.js", "•", "TypeScript", "•", "Python", "•", "React", "•", "Node.js", "•", "MongoDB", "•", "Docker", "•", "AI / ML", "•"].map((t, j) => (
              <span key={`${i}-${j}`} className={t === "•" ? "text-primary" : "text-muted-foreground"}>{t}</span>
            ))
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Selected work" title="Projects that shipped." subtitle="Real users, real metrics, real code.">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.live}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-3xl p-8 overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-gradient-to-br ${p.accent}`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">{p.tag} · {p.year}</div>
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-gradient transition">{p.title}</h3>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition" />
                </div>
                <div className={`inline-block text-4xl font-bold bg-gradient-to-r ${p.accent} bg-clip-text text-transparent mb-4`}>{p.metric}</div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs font-mono px-3 py-1 rounded-full border border-border">{s}</span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <ExternalLink className="w-4 h-4" /> {p.liveLabel}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="Where I've built" title="Internship experience." subtitle="Hands-on across AI/ML, frontend, and enterprise engineering.">
        <div className="grid md:grid-cols-3 gap-5">
          {experiences.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-3xl p-6 hover:border-primary/50 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5">
                <e.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">{e.period}</div>
              <h3 className="text-xl font-bold mb-1">{e.role}</h3>
              <div className="text-primary text-sm font-medium mb-4">{e.company}</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Toolkit" title="Stack I ship with." subtitle="">
        <div className="grid md:grid-cols-5 gap-4">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-5"
            >
              <h4 className="text-sm font-mono uppercase text-primary mb-3">{cat}</h4>
              <ul className="space-y-1.5">
                {items.map((it) => (
                  <li key={it} className="text-sm text-foreground/80">{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CERTIFICATES */}
      <Section id="certificates" eyebrow="Verified" title="Certifications." subtitle="Every badge is clickable — recruiters can verify in one tap.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-5 flex items-start gap-4 hover:border-primary/50 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium leading-tight mb-1 group-hover:text-primary transition">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.issuer}</div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition shrink-0" />
            </motion.a>
          ))}
        </div>
      </Section>

      {/* EDUCATION + ACHIEVEMENT */}
      <Section id="education" eyebrow="Background" title="Education & recognition." subtitle="">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="glass rounded-3xl p-8">
            <GraduationCap className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-1">B.Tech, Computer Science</h3>
            <div className="text-primary mb-2">Ajay Kumar Garg Engineering College, Ghaziabad</div>
            <div className="text-muted-foreground font-mono text-sm">2022 – 2026</div>
          </div>
          <div className="glass rounded-3xl p-8">
            <Sparkles className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-1">Viksit Uttar Pradesh @2047</h3>
            <div className="text-primary mb-2">Selected participant — Resolution to Prosperity initiative</div>
            <div className="text-muted-foreground text-sm">Contributing to state-level innovation & technology roadmap.</div>
          </div>
        </div>
      </Section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass rounded-[2.5rem] p-10 md:p-20 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
            <div className="relative">
              <div className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Let's build</div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Have a role in mind?
                <br />
                <span className="text-gradient">Let's talk.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Open to SDE and AI/ML Engineer roles. I ship fast, write clean code, and love hard problems.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:scale-105 transition glow">
                  <Mail className="w-4 h-4" /> {EMAIL}
                </a>
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass font-medium hover:bg-white/5 transition">
                  <Phone className="w-4 h-4" /> {PHONE}
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> Noida, India</span>
                <a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition"><Github className="w-4 h-4" /> GitHub</a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition"><Linkedin className="w-4 h-4" /> LinkedIn</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        © 2026 Sourabh Singh · Crafted with React, Three.js & Framer Motion
      </footer>
    </div>
  );
}

function Nav() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-2 py-2 flex items-center gap-1"
    >
      <a href="#home" className="px-4 py-1.5 text-sm font-semibold">SS.</a>
      {[
        ["Work", "#projects"],
        ["Experience", "#experience"],
        ["Certs", "#certificates"],
        ["Contact", "#contact"],
      ].map(([label, href]) => (
        <a key={href} href={href} className="hidden sm:inline-block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition rounded-full hover:bg-white/5">
          {label}
        </a>
      ))}
      <a href={`mailto:${EMAIL}`} className="ml-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition">Hire</a>
    </motion.nav>
  );
}

function Section({
  id, eyebrow, title, subtitle, children,
}: { id: string; eyebrow: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <div className="text-sm font-mono uppercase tracking-wider text-primary mb-3">{eyebrow}</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
