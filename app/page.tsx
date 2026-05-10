"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  Brain,
  Building2,
  Check,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Sprout,
  UsersRound,
  WandSparkles
} from "lucide-react";

const navItems = ["Programs", "Experience", "Franchise", "Ecosystem", "Contact"];

const programs = [
  {
    name: "Play Home",
    age: "Age 2-3",
    image: "/images/play-based-learning.jpg",
    title: "A gentle first step into discovery.",
    text: "Sensory play, music, movement, storytelling, motor skills, and emotional comfort for tiny learners.",
    outcomes: ["Settling confidence", "Motor development", "Social comfort"]
  },
  {
    name: "Nursery",
    age: "Age 3-4",
    image: "/images/children-activity.jpg",
    title: "Language, rhythm, play, and social foundations.",
    text: "Children begin expressing ideas, building routines, sharing space, and learning through creative classroom experiences.",
    outcomes: ["Language growth", "Creative expression", "Peer interaction"]
  },
  {
    name: "LKG",
    age: "Age 4-5",
    image: "/images/classroom-learning.jpg",
    title: "Curiosity-led foundations for reading and numbers.",
    text: "Pre-reading, pre-writing, number sense, stories, problem solving, and confidence-building activities.",
    outcomes: ["Early literacy", "Number sense", "Thinking habits"]
  },
  {
    name: "UKG",
    age: "Age 5-6",
    image: "/images/children-activity.jpg",
    title: "School readiness with confidence and character.",
    text: "Phonics, early mathematics, communication, independence, and readiness for the next academic stage.",
    outcomes: ["Phonics confidence", "School readiness", "Independent learning"]
  }
];

const philosophy = [
  {
    icon: Brain,
    title: "Mind Development First",
    text: "Curiosity, imagination, communication, and critical thinking are treated as core skills."
  },
  {
    icon: Sparkles,
    title: "Joyful Learning",
    text: "Learning happens through movement, stories, exploration, creativity, and play."
  },
  {
    icon: Sprout,
    title: "Holistic Growth",
    text: "Emotional, social, cognitive, and physical development move together."
  },
  {
    icon: ShieldCheck,
    title: "Safe Foundations",
    text: "Child-safe infrastructure, trained teachers, parent updates, and thoughtful routines."
  }
];

const franchiseSteps = [
  "Discovery call",
  "Location and space review",
  "Setup, curriculum and training",
  "Launch with admissions support"
];

const support = [
  "Brand license and identity guidance",
  "Structured curriculum and academic framework",
  "Teacher training and professional development",
  "Marketing and admissions support",
  "School management and operational systems",
  "Continuous guidance from the New Vedha team"
];

const ecosystem = [
  {
    name: "Preschool",
    text: "Play Home, Nursery, LKG, and UKG built around joyful early childhood development."
  },
  {
    name: "Coaching",
    text: "Academic support for school students with discipline, doubt-solving, and board readiness."
  },
  {
    name: "Online Learning",
    text: "A digital learning layer for accessible classes, assessments, and student progress tracking."
  },
  {
    name: "Skill Academy",
    text: "Future-facing employability programs designed for students moving toward careers."
  },
  {
    name: "Corporate Training",
    text: "Campus-to-corporate, employee upskilling, and placement-focused training partnerships."
  },
  {
    name: "Franchise Network",
    text: "A scalable partner ecosystem for education entrepreneurs across India."
  }
];

const leaders = [
  {
    name: "Nagabushan N",
    role: "Chief Executive Officer",
    phone: "+91 8310325960",
    email: "ceo@newvedha.com"
  },
  {
    name: "Sandesh Shetty",
    role: "Managing Director",
    phone: "+91 9900313472",
    email: "md@newvedha.com"
  }
];

const faqs = [
  {
    q: "Do you show investment or module prices on the website?",
    a: "No. Commercial details are shared directly after understanding the requirement, location, and selected module."
  },
  {
    q: "What kind of space is suitable for a New Vedha preschool?",
    a: "A well-connected, child-safe location with approximately 1500-2500 sq ft is ideal for a preschool setup discussion."
  },
  {
    q: "What does a franchise partner receive?",
    a: "Partners receive brand guidance, curriculum support, teacher training, marketing support, operations systems, and ongoing assistance."
  }
];

export default function Home() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [activeEco, setActiveEco] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const program = programs[activeProgram];
  const eco = ecosystem[activeEco];

  return (
    <main className="min-h-screen bg-[#f8f2e6] text-[#13251d]">
      <div
        className="fixed left-0 top-0 z-[70] h-1 bg-[#f0b33b] transition-[width]"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-[#061b16]/70 text-white backdrop-blur-2xl">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/new-vedha-logo.png"
              alt="New Vedha Pre School logo"
              width={54}
              height={54}
              className="rounded-full bg-white object-contain p-1"
              priority
            />
            <div>
              <p className="text-lg font-black tracking-wide text-white">NEW VEDHA</p>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#96e0d3]">
                Pre School
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-white/72 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#123b2a] transition hover:bg-[#f0b33b] md:flex"
          >
            Enquire Now <ArrowRight size={16} />
          </a>

          <a
            href="tel:+918310325960"
            aria-label="Call New Vedha"
            className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white md:hidden"
          >
            <Phone size={19} />
          </a>
        </div>
      </header>

      <section id="home" className="relative min-h-[94vh] overflow-hidden bg-[#061b16] text-white">
        <Image
          src="/images/classroom-learning.jpg"
          alt="Children learning in a preschool classroom"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.62]"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,20,16,0.95)_0%,rgba(4,20,16,0.74)_42%,rgba(4,20,16,0.3)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(0deg,#f8f2e6_0%,rgba(248,242,230,0)_100%)]" />

        <div className="section-shell relative grid min-h-[94vh] items-center gap-10 pb-20 pt-28 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-sm font-black text-[#f9dc8f] backdrop-blur-xl">
              <WandSparkles size={16} />
              Ancient Wisdom | Modern Minds
            </div>
            <h1 className="text-balance text-6xl font-black leading-[0.9] tracking-normal sm:text-7xl lg:text-[6.8rem]">
              New Vedha Pre School
            </h1>
            <p className="mt-7 max-w-2xl text-balance text-xl font-semibold leading-8 text-white/84">
              A next-generation early learning environment where curiosity,
              character, creativity, and confidence are shaped from the very first
              years.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#programs"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f0b33b] px-7 py-4 text-base font-black text-[#13251d] shadow-[0_20px_70px_rgba(240,179,59,0.35)] transition hover:-translate-y-1 hover:bg-white"
              >
                Explore Learning <Play size={17} fill="currentColor" />
              </a>
              <a
                href="#franchise"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:text-[#13251d]"
              >
                Franchise Enquiry <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="hero-orbit mx-auto aspect-square max-w-[520px] rounded-full border border-white/18 bg-white/10 p-8 backdrop-blur-md">
              <div className="relative grid h-full place-items-center rounded-full bg-white/92 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
                <Image
                  src="/new-vedha-logo.png"
                  alt="New Vedha symbolic learning tree"
                  width={620}
                  height={620}
                  className="w-[82%] object-contain"
                />
                {["Mind", "Play", "Safety", "Future"].map((item, index) => (
                  <span
                    key={item}
                    className={`orbit-chip orbit-chip-${index + 1} absolute rounded-full bg-[#07231c] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f9dc8f] shadow-xl`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 hidden overflow-hidden md:block">
          <div className="marquee-track flex w-max gap-4 text-sm font-black uppercase tracking-[0.28em] text-white/70">
            {[
              "Curiosity",
              "Creativity",
              "Character",
              "Confidence",
              "Joyful Learning",
              "Parent Partnership",
              "Future Ready",
              "Mind Development"
            ]
              .concat([
                "Curiosity",
                "Creativity",
                "Character",
                "Confidence",
                "Joyful Learning",
                "Parent Partnership",
                "Future Ready",
                "Mind Development"
              ])
              .map((item, index) => (
                <span key={`${item}-${index}`} className="px-6">
                  {item}
                </span>
              ))}
          </div>
        </div>
      </section>

      <section id="programs" className="section-shell py-24">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b87808]">
              Interactive Program Studio
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#123b2a] md:text-6xl">
              Choose an age group. Watch the learning path change.
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-semibold leading-8 text-[#30443b]/78">
            New Vedha’s preschool journey moves from safe settling and sensory
            play to literacy, number sense, social confidence, and school readiness.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
          <div className="grid gap-3">
            {programs.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveProgram(index)}
                className={`group flex items-center justify-between rounded-2xl border p-5 text-left transition ${
                  activeProgram === index
                    ? "border-[#123b2a] bg-[#123b2a] text-white shadow-[0_24px_80px_rgba(18,59,42,0.2)]"
                    : "border-[#d8cdb8] bg-white/70 text-[#123b2a] hover:-translate-y-1 hover:border-[#f0b33b]"
                }`}
              >
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.24em] opacity-70">
                    {item.age}
                  </span>
                  <span className="mt-1 block text-2xl font-black">{item.name}</span>
                </span>
                <ChevronRight
                  className={activeProgram === index ? "text-[#f0b33b]" : "text-[#2c897e]"}
                />
              </button>
            ))}
          </div>

          <article className="program-panel grid overflow-hidden rounded-[2rem] bg-[#102f25] text-white shadow-[0_30px_100px_rgba(18,59,42,0.22)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[420px]">
              <Image
                key={program.image}
                src={program.image}
                alt={`${program.name} children learning`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,47,37,0.72),rgba(16,47,37,0)_62%)]" />
              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/14 px-5 py-4 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f9dc8f]">
                  Current Program
                </p>
                <p className="mt-1 text-3xl font-black">{program.name}</p>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#f0b33b]">
                {program.age}
              </p>
              <h3 className="mt-4 text-4xl font-black leading-tight">{program.title}</h3>
              <p className="mt-5 text-lg leading-8 text-white/76">{program.text}</p>
              <div className="mt-8 grid gap-3">
                {program.outcomes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-full bg-[#f0b33b] text-[#13251d]">
                      <Check size={17} strokeWidth={3} />
                    </span>
                    <span className="font-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" className="bg-[#061b16] py-24 text-white">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="relative min-h-[620px] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/play-based-learning.jpg"
              alt="Children in playful preschool learning"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,27,22,0.74),rgba(6,27,22,0.06))]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/16 bg-white/12 p-6 backdrop-blur-2xl">
              <Quote className="text-[#f0b33b]" />
              <p className="mt-4 text-2xl font-black leading-snug">
                We do not just teach children. We shape the minds that will shape
                India.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f0b33b]">
              Not Regular Preschool
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              A learning experience designed to feel alive.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              The New Vedha environment is built around active classrooms,
              teacher-led discovery, parent communication, child safety, and a
              deeper learning philosophy rooted in confidence and character.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {philosophy.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.07] p-6 transition hover:-translate-y-1 hover:bg-white/[0.12]"
                >
                  <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-[#f0b33b] text-[#13251d] transition group-hover:rotate-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-white/68">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="franchise" className="section-shell py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b87808]">
              Franchise Opportunity
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#123b2a] md:text-6xl">
              Build a New Vedha preschool with serious support.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-[#30443b]/76">
              Commercials are shared only after consultation. The site focuses on
              vision, support, and fit, then invites serious partners to speak with
              leadership.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#123b2a] px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-[#0b5f63]"
            >
              Request Details <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-6">
            <article className="rounded-[2rem] bg-[#f0b33b] p-8 text-[#13251d] md:p-10">
              <Building2 size={36} />
              <h3 className="mt-5 text-3xl font-black">Space-first planning</h3>
              <p className="mt-3 text-lg font-semibold leading-8">
                Ideal preschool discussion starts with a child-safe, accessible
                space of approximately 1500-2500 sq ft.
              </p>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {franchiseSteps.map((step, index) => (
                <article
                  key={step}
                  className="group rounded-3xl border border-[#d8cdb8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#123b2a]"
                >
                  <p className="text-sm font-black text-[#b87808]">0{index + 1}</p>
                  <h3 className="mt-4 text-2xl font-black text-[#123b2a]">{step}</h3>
                </article>
              ))}
            </div>

            <article className="rounded-[2rem] bg-white p-8 shadow-[0_24px_80px_rgba(18,59,42,0.12)] md:p-10">
              <h3 className="text-3xl font-black text-[#123b2a]">Partner support</h3>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {support.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#e8f4ee] text-[#123b2a]">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    <p className="font-bold leading-7 text-[#30443b]/78">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="bg-[#f2e5cc] py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b87808]">
              Kids To Careers
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#123b2a] md:text-6xl">
              One education ecosystem, many future pathways.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[420px_1fr]">
            <div className="grid gap-3">
              {ecosystem.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveEco(index)}
                  className={`rounded-2xl border px-5 py-4 text-left text-lg font-black transition ${
                    activeEco === index
                      ? "border-[#123b2a] bg-[#123b2a] text-white"
                      : "border-[#cdbf9e] bg-white/60 text-[#123b2a] hover:bg-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <article className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#061b16] p-8 text-white md:p-12">
              <Image
                src="/images/children-activity.jpg"
                alt="Children participating in classroom activity"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover opacity-42"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,27,22,0.96),rgba(6,27,22,0.56))]" />
              <div className="relative max-w-xl">
                <p className="text-sm font-black uppercase tracking-[0.26em] text-[#f0b33b]">
                  Ecosystem Module
                </p>
                <h3 className="mt-5 text-5xl font-black">{eco.name}</h3>
                <p className="mt-6 text-xl font-semibold leading-9 text-white/78">
                  {eco.text}
                </p>
                <div className="mt-10 inline-flex rounded-full border border-white/20 bg-white/12 px-5 py-3 text-sm font-black text-[#f9dc8f] backdrop-blur-xl">
                  Contact us for module details
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b87808]">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#123b2a] md:text-6xl">
              Speak directly with New Vedha leadership.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-[#30443b]/76">
              For admissions, partnerships, franchise enquiries, and commercial
              details, contact the New Vedha team.
            </p>

            <div className="mt-8 grid gap-4">
              <a
                href="mailto:contact@newvedha.com"
                className="group flex items-center gap-4 rounded-3xl bg-[#123b2a] p-5 font-black text-white transition hover:-translate-y-1 hover:bg-[#0b5f63]"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-white text-[#123b2a]">
                  <Mail size={22} />
                </span>
                contact@newvedha.com
              </a>
              <div className="flex items-start gap-4 rounded-3xl border border-[#d8cdb8] bg-white p-5 shadow-sm">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#f0b33b] text-[#13251d]">
                  <MapPin size={22} />
                </span>
                <p className="font-bold leading-7 text-[#30443b]/78">
                  No 176, 9th Cross, Annapurneshwari Nagar, near Nagarbhavi BDA
                  Complex, Bangalore 79
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {leaders.map((leader) => (
              <article
                key={leader.email}
                className="rounded-[2rem] bg-white p-7 shadow-[0_24px_80px_rgba(18,59,42,0.12)] transition hover:-translate-y-1"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid size-14 place-items-center rounded-2xl bg-[#123b2a] text-white">
                    <UsersRound size={24} />
                  </div>
                  <HeartHandshake className="text-[#f0b33b]" />
                </div>
                <h3 className="text-2xl font-black text-[#123b2a]">{leader.name}</h3>
                <p className="mt-1 text-sm font-black uppercase tracking-[0.2em] text-[#b87808]">
                  {leader.role}
                </p>
                <div className="mt-7 space-y-3">
                  <a
                    href={`tel:${leader.phone.replaceAll(" ", "")}`}
                    className="flex items-center gap-3 font-bold text-[#30443b]/76 hover:text-[#123b2a]"
                  >
                    <Phone size={18} className="text-[#0b5f63]" /> {leader.phone}
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center gap-3 font-bold text-[#30443b]/76 hover:text-[#123b2a]"
                  >
                    <Mail size={18} className="text-[#0b5f63]" /> {leader.email}
                  </a>
                </div>
              </article>
            ))}

            <article className="rounded-[2rem] bg-[#061b16] p-8 text-white md:col-span-2">
              <GraduationCap className="text-[#f0b33b]" size={36} />
              <h3 className="mt-5 text-3xl font-black">
                Take the first step toward building the future of education.
              </h3>
              <p className="mt-4 leading-8 text-white/72">
                Share your requirement with us and our team will guide you through
                admissions, franchise options, setup support, and next steps.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-16 grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-3xl border border-[#d8cdb8] bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-black text-[#123b2a]">
                {faq.q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#e8f4ee] text-[#123b2a] transition group-open:rotate-90">
                  <ChevronRight size={19} />
                </span>
              </summary>
              <p className="mt-4 max-w-4xl text-lg font-semibold leading-8 text-[#30443b]/72">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-[#061b16] py-10 text-white">
        <div className="section-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/new-vedha-logo.png"
              alt="New Vedha logo"
              width={48}
              height={48}
              className="rounded-full bg-white p-1"
            />
            <div>
              <p className="font-black">New Vedha Pre School</p>
              <p className="text-sm font-bold text-white/58">
                Ancient Wisdom | Modern Minds
              </p>
            </div>
          </div>
          <p className="text-sm font-semibold text-white/58">
            © 2026 New Vedha. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
