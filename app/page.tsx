"use client";

import Image from "next/image";
import { useEffect, useState, type KeyboardEvent } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  Brain,
  Building2,
  Check,
  ChevronRight,
  Coins,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Mail,
  MapPin,
  Megaphone,
  MonitorPlay,
  Phone,
  Play,
  Quote,
  Scale,
  Search,
  Settings,
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

const franchiseSupportPillars = [
  {
    icon: Scale,
    title: "Legal documentation",
    detail:
      "Structured paperwork, compliance checkpoints, and brand-safe templates so your centre opens with clarity from day one."
  },
  {
    icon: Search,
    title: "Market survey",
    detail:
      "Catchment review, demand signals, and practical positioning notes to validate fit before you commit capital or lease terms."
  },
  {
    icon: Handshake,
    title: "Agreements",
    detail:
      "Transparent franchise discussions and agreements aligned to roles, territories, and ongoing responsibilities on both sides."
  },
  {
    icon: Coins,
    title: "Purchase savings",
    detail:
      "Guided procurement lists and negotiated supplier categories to protect quality while improving predictable setup spend."
  },
  {
    icon: Megaphone,
    title: "Branding & marketing",
    detail:
      "Brand-ready assets, launch narratives, local campaign ideas, and admissions storytelling tuned for premium preschool trust."
  },
  {
    icon: MonitorPlay,
    title: "Interactive Program Studio",
    detail:
      "A guided studio for interactive lesson flows, digital reinforcement, and classroom-ready assets—paired with tutorials and coaching so teachers adopt confidently."
  },
  {
    icon: UsersRound,
    title: "Admission support",
    detail:
      "Enquiry handling frameworks, parent walkthroughs, fee communication etiquette, and retention-minded onboarding rhythms."
  },
  {
    icon: Settings,
    title: "Operational support",
    detail:
      "Daily SOPs, quality routines, staffing rhythms, and escalation paths to the New Vedha team when decisions need a second opinion."
  }
];

const ecosystem = [
  {
    name: "Preschool",
    text: "Play Home, Nursery, LKG, and UKG built around joyful early childhood development—safe routines, trained educators, parent visibility, and progression into higher grades without friction."
  },
  {
    name: "Coaching",
    text: "Structured academic support for school-age learners: disciplined practice, doubt-solving, periodic assessments, and board-aware pacing without crushing curiosity."
  },
  {
    name: "Online Learning",
    text: "Accessible digital classes, assignments, and progress visibility so learning continues beyond the physical classroom for families who need flexibility."
  },
  {
    name: "Skill Academy",
    text: "Employability-focused pathways that bridge academics with communication, tools, and industry-aware projects as students approach higher study and first careers."
  },
  {
    name: "Corporate Training",
    text: "Campus-to-corporate journeys, workplace upskilling, and partnership models that align institutional training with hiring and productivity outcomes."
  },
  {
    name: "Franchise Network",
    text: "Entrepreneurs plug into shared curriculum, brand systems, and ongoing guidance—scaling ethical education businesses with lower guesswork and stronger learner outcomes."
  }
];

const leaders = [
  {
    name: "Nagabushan N",
    role: "Chief Executive Officer",
    phone: "+91 8310325960",
    email: "sandesh@newvedha.com "
  },
  {
    name: "Sandesh Shetty",
    role: "Managing Director",
    phone: "+91 9900313472",
    email: "sandesh@newvedha.com "
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
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      setHeaderScrolled(scrollTop > 36);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const program = programs[activeProgram];
  const eco = ecosystem[activeEco];

  const onEcoKeyDown = (event: KeyboardEvent, index: number) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const next =
      event.key === "ArrowDown"
        ? (index + 1) % ecosystem.length
        : (index - 1 + ecosystem.length) % ecosystem.length;
    setActiveEco(next);
    requestAnimationFrame(() => {
      document.getElementById(`eco-tab-${next}`)?.focus();
    });
  };

  return (
    <main className="page-gradient min-h-screen text-[#13251d]">
      <div
        className="fixed left-0 top-0 z-[70] h-[3px] bg-gradient-to-r from-[#f0b33b] via-[#ffd073] to-[#7dd3c0] transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b text-white backdrop-blur-2xl transition-[background-color,box-shadow,border-color] duration-300 ${
          headerScrolled
            ? "border-white/[0.07] bg-[#061b16]/90 shadow-[0_14px_50px_rgba(0,0,0,0.38)]"
            : "border-white/12 bg-[#061b16]/72"
        }`}
      >
        <div className="section-shell flex h-[4.5rem] items-center justify-between md:h-20">
          <a href="#home" className="group flex items-center gap-3">
            <Image
              src="/new-vedha-logo.png"
              alt="New Vedha Pre School logo"
              width={54}
              height={54}
              className="rounded-full bg-white object-contain p-1 shadow-[0_8px_28px_rgba(0,0,0,0.28)] ring-2 ring-white/25 transition group-hover:ring-[#f0b33b]/60"
              priority
            />
            <div>
              <p className="text-lg font-black tracking-wide text-white drop-shadow-sm">
                NEW VEDHA
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#96e0d3]">
                Pre School
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-white/76">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#123b2a] shadow-[0_8px_26px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-[#f0b33b] hover:shadow-[0_14px_36px_rgba(240,179,59,0.42)] md:flex"
          >
            Enquire Now <ArrowRight size={16} />
          </a>

          <a
            href="tel:+918310325960"
            aria-label="Call New Vedha"
            className="grid size-11 place-items-center rounded-full border border-white/22 bg-white/12 text-white shadow-inner transition hover:border-[#f0b33b]/50 hover:bg-white/18 md:hidden"
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
          className="z-0 object-cover opacity-[0.62]"
          priority
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
          aria-hidden
        >
          <div className="hero-blob absolute -left-[18%] top-[6%] h-[min(72vw,560px)] w-[min(72vw,560px)] rounded-full bg-[#0d5c52]/38 blur-[clamp(56px,11vw,118px)]" />
          <div className="hero-blob hero-blob-b absolute -right-[14%] top-[34%] h-[min(58vw,440px)] w-[min(58vw,440px)] rounded-full bg-[#f0b33b]/22 blur-[clamp(48px,9vw,102px)]" />
          <div className="absolute bottom-[18%] left-[22%] h-[min(42vw,280px)] w-[min(42vw,280px)] rounded-full bg-[#96e0d3]/12 blur-[72px]" />
        </div>
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(4,20,16,0.95)_0%,rgba(4,20,16,0.74)_42%,rgba(4,20,16,0.3)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-[3] h-36 bg-[linear-gradient(0deg,#faf6ee_0%,rgba(250,246,238,0)_100%)]" />

        <div className="section-shell relative z-10 grid min-h-[94vh] items-center gap-10 pb-24 pt-[6.5rem] lg:grid-cols-[1.04fr_0.96fr] lg:pb-20 lg:pt-28">
          <div className="max-w-4xl section-reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/22 bg-gradient-to-r from-white/[0.14] to-white/[0.06] px-4 py-2.5 text-sm font-black text-[#fff4d4] shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
              <WandSparkles size={16} className="text-[#f0b33b]" />
              Ancient Wisdom | Modern Minds
            </div>
            <h1 className="text-balance text-6xl font-black leading-[0.9] tracking-tight drop-shadow-[0_6px_48px_rgba(0,0,0,0.38)] sm:text-7xl lg:text-[6.6rem]">
              New Vedha Pre School
            </h1>
            <p className="mt-7 max-w-2xl text-balance text-xl font-semibold leading-8 text-white/[0.88]">
              A next-generation early learning environment where curiosity,
              character, creativity, and confidence are shaped from the very first
              years.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#programs"
                className="btn-primary-glow group inline-flex items-center justify-center gap-3 rounded-full bg-[#f0b33b] px-8 py-4 text-base font-black text-[#13251d] hover:-translate-y-1 hover:bg-white"
              >
                Explore Learning{" "}
                <Play size={17} fill="currentColor" className="transition group-hover:scale-110" />
              </a>
              <a
                href="#franchise"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/28 bg-white/[0.09] px-8 py-4 text-base font-black text-white shadow-[0_12px_40px_rgba(0,0,0,0.15)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#f0b33b]/45 hover:bg-white hover:text-[#13251d]"
              >
                Franchise Enquiry <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative hidden section-reveal section-reveal-delay-1 lg:block">
            <div className="hero-orbit mx-auto aspect-square max-w-[520px] rounded-full border border-white/22 bg-gradient-to-br from-white/[0.14] to-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
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

        <div className="absolute bottom-7 left-0 right-0 z-10 hidden overflow-hidden md:block">
          <div className="marquee-track flex w-max gap-4 text-xs font-black uppercase tracking-[0.32em] text-white/58">
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

      <section id="programs" className="relative overflow-hidden py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-70" aria-hidden />
        <div className="pointer-events-none absolute -right-[20%] top-1/4 h-[420px] w-[420px] rounded-full bg-[#f0b33b]/10 blur-[100px]" aria-hidden />
        <div className="section-shell relative">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="section-reveal">
              <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.28em] text-[#b87808]">
                <span className="h-px w-8 bg-[#f0b33b]" aria-hidden />
                Interactive Program Studio
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.08] text-[#123b2a] md:text-5xl lg:text-6xl">
                Choose an age group. Watch the learning path change.
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-semibold leading-8 text-[#30443b]/78 section-reveal section-reveal-delay-1">
              New Vedha’s preschool journey moves from safe settling and sensory play to
              literacy, number sense, social confidence, and school readiness.
            </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
          <div className="grid gap-3">
            {programs.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveProgram(index)}
                className={`group flex items-center justify-between rounded-2xl border p-5 text-left transition-all duration-300 ${
                  activeProgram === index
                    ? "border-[#123b2a] bg-[#123b2a] text-white shadow-[0_28px_70px_rgba(18,59,42,0.28)] ring-2 ring-[#f0b33b]/35"
                    : "border-[#dcd4c4] bg-white/85 text-[#123b2a] shadow-[0_6px_24px_rgba(18,59,42,0.05)] backdrop-blur-sm hover:-translate-y-0.5 hover:border-[#f0b33b]/65 hover:shadow-[0_14px_40px_rgba(240,179,59,0.14)]"
                }`}
              >
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.24em] opacity-70">
                    {item.age}
                  </span>
                  <span className="mt-1 block text-2xl font-black">{item.name}</span>
                </span>
                <ChevronRight
                  className={`shrink-0 transition group-hover:translate-x-0.5 ${
                    activeProgram === index ? "text-[#f0b33b]" : "text-[#2c897e]"
                  }`}
                />
              </button>
            ))}
          </div>

          <article className="program-panel grid overflow-hidden rounded-[2rem] border border-white/12 bg-[#102f25] text-white shadow-[0_36px_100px_rgba(18,59,42,0.28)] ring-1 ring-[#123b2a]/20 lg:grid-cols-[1.05fr_0.95fr]">
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
        </div>
      </section>

      <section id="experience" className="relative overflow-hidden bg-[#041910] py-24 text-white md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(240, 179, 59, 0.09) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
          aria-hidden
        />
        <div className="section-shell relative grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] shadow-[0_32px_90px_rgba(0,0,0,0.45)] ring-1 ring-white/12 lg:min-h-[620px]">
            <Image
              src="/images/play-based-learning.jpg"
              alt="Children in playful preschool learning"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,27,22,0.82),rgba(6,27,22,0.12))]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/18 bg-gradient-to-br from-white/[0.16] to-white/[0.06] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <Quote className="text-[#f0b33b]" />
              <p className="mt-4 text-2xl font-black leading-snug">
                We do not just teach children. We shape the minds that will shape
                India.
              </p>
            </div>
          </div>

          <div className="section-reveal">
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.28em] text-[#f0b33b]">
              <span className="h-px w-8 bg-[#f0b33b]" aria-hidden />
              Not Regular Preschool
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.08] md:text-5xl lg:text-6xl">
              A learning experience designed to feel alive.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/74">
              The New Vedha environment is built around active classrooms,
              teacher-led discovery, parent communication, child safety, and a
              deeper learning philosophy rooted in confidence and character.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {philosophy.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="group card-lift rounded-3xl border border-white/[0.13] bg-white/[0.06] p-6 backdrop-blur-md transition hover:border-[#f0b33b]/38 hover:bg-white/[0.1]"
                >
                  <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-[#f0b33b] to-[#d49216] text-[#13251d] shadow-[0_12px_28px_rgba(240,179,59,0.35)] transition duration-300 group-hover:scale-105 group-hover:rotate-3">
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

      <section id="franchise" className="relative overflow-hidden py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 leaf-grid opacity-40" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[90%] -translate-x-1/2 bg-gradient-to-b from-[#f0b33b]/14 to-transparent blur-2xl" aria-hidden />
        <div className="section-shell relative">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.28em] text-[#b87808]">
                <span className="h-px w-8 bg-[#f0b33b]" aria-hidden />
                Franchise Opportunity
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.08] text-[#123b2a] md:text-5xl lg:text-6xl">
                Build a New Vedha preschool with serious support.
              </h2>
              <p className="mt-6 text-lg font-semibold leading-8 text-[#30443b]/76">
                Commercials are shared only after consultation. The site focuses on
                vision, support, and fit, then invites serious partners to speak with
                leadership. Your preschool sits inside our wider{" "}
                <span className="font-black text-[#123b2a]">Kids To Careers</span>{" "}
                journey—not an isolated playschool, but an on-ramp into lifelong learning.
              </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#123b2a] px-8 py-4 font-black text-white shadow-[0_14px_44px_rgba(18,59,42,0.28)] transition hover:-translate-y-1 hover:bg-[#0b5f63] hover:shadow-[0_20px_50px_rgba(11,95,99,0.35)]"
            >
              Request Details <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-6">
            <article className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f5c24f] via-[#f0b33b] to-[#d49216] p-8 text-[#13251d] shadow-[0_28px_70px_rgba(240,179,59,0.42)] md:p-10">
              <div className="pointer-events-none absolute -right-12 top-0 h-40 w-40 rounded-full bg-white/25 blur-2xl" aria-hidden />
              <Building2 size={36} className="relative drop-shadow-sm" />
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
                  className="card-lift group rounded-3xl border border-[#dcd4c4] bg-white/92 p-6 shadow-[0_8px_28px_rgba(18,59,42,0.06)] backdrop-blur-sm transition hover:border-[#123b2a]/35 hover:shadow-[0_18px_50px_rgba(18,59,42,0.1)]"
                >
                  <p className="inline-grid size-9 place-items-center rounded-xl bg-[#e8f4ee] text-sm font-black text-[#123b2a] transition group-hover:bg-[#123b2a] group-hover:text-white">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-black leading-snug text-[#123b2a] md:text-2xl">{step}</h3>
                </article>
              ))}
            </div>

            <article className="relative overflow-hidden rounded-[2rem] border border-[#e5dcc8] bg-gradient-to-br from-[#fffdf7] via-[#fff9eb] to-[#f5ecd8] p-8 shadow-[0_20px_60px_rgba(18,59,42,0.08)] md:p-10">
              <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-[#0b5f63]/10 blur-3xl" aria-hidden />
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b87808]">
                Kids To Careers
              </p>
              <h3 className="mt-4 text-3xl font-black leading-tight text-[#123b2a] md:text-4xl">
                One education ecosystem, many future pathways.
              </h3>
              <p className="mt-5 text-lg font-semibold leading-8 text-[#30443b]/82">
                Franchise partners inherit more than a preschool brand—you join a continuum
                from early childhood through coaching, digital learning, skills, and
                corporate programs. Families can grow with New Vedha; your centre becomes
                the trusted first chapter.
              </p>
              <a
                href="#ecosystem"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#123b2a]/15 bg-white/70 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#0b5f63] shadow-sm transition hover:border-[#f0b33b]/50 hover:bg-white"
              >
                Explore the ecosystem <ChevronRight size={16} />
              </a>
            </article>

            <article className="rounded-[2rem] border border-[#e0dcd4] bg-[#faf9f6] p-7 shadow-[0_16px_48px_rgba(18,59,42,0.06)] md:p-9">
              <div className="flex flex-col gap-3 border-b border-[#e5e1da] pb-6 md:flex-row md:items-end md:justify-between md:gap-6">
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-[#123b2a] md:text-3xl">
                    360° support for franchise success
                  </h3>
                  <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-[#30443b]/80 md:text-[1.05rem] md:leading-8">
                    Templates, live conversations with the central team, and clear escalation—so
                    your rollout stays practical, not theoretical.
                  </p>
                </div>
              </div>

              <ul className="mt-6 grid list-none gap-0 overflow-hidden rounded-xl border border-[#e5e1da] bg-white p-0 md:grid-cols-2">
                {franchiseSupportPillars.map(({ icon: Icon, title, detail }, index) => (
                  <li
                    key={title}
                    className={`flex gap-4 border-[#e8e5df] p-5 md:gap-5 md:p-6 ${
                      index < franchiseSupportPillars.length - 1 ? "border-b" : ""
                    } md:odd:border-r md:[&:nth-child(7)]:border-b-0`}
                  >
                    <span
                      className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(18,59,42,0.06)] text-[#123b2a]"
                      aria-hidden
                    >
                      <Icon size={21} strokeWidth={2} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[1.05rem] font-black leading-snug text-[#123b2a] md:text-lg">
                        {title}
                      </h4>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-[#30443b]/85 md:text-[0.9375rem] md:leading-7">
                        {detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
        </div>
      </section>

      <section id="ecosystem" className="relative overflow-hidden bg-[#efe8dc] py-24 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,247,0.65)_0%,transparent_45%,rgba(248,242,230,0.4)_100%)]"
          aria-hidden
        />
        <div className="section-shell relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center justify-center gap-2 text-sm font-black uppercase tracking-[0.28em] text-[#b87808]">
              <span className="h-px w-10 bg-[#123b2a]/20" aria-hidden />
              Kids To Careers
              <span className="h-px w-10 bg-[#123b2a]/20" aria-hidden />
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.08] text-[#123b2a] md:text-5xl lg:text-6xl">
              One education ecosystem, many future pathways.
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-[#243831]/85">
              Use the module list to explore each pathway. The preview updates instantly—read
              the detail panel at comfortable contrast on any screen size.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(260px,400px)_minmax(0,1fr)] lg:items-start lg:gap-10">
            <div>
              <p
                id="ecosystem-module-label"
                className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#123b2a]/50"
              >
                Select a module
              </p>
              <div
                className="grid gap-2.5"
                role="tablist"
                aria-labelledby="ecosystem-module-label"
              >
                {ecosystem.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    id={`eco-tab-${index}`}
                    aria-selected={activeEco === index}
                    aria-controls="eco-panel"
                    onClick={() => setActiveEco(index)}
                    onKeyDown={(e) => onEcoKeyDown(e, index)}
                    className={`group flex w-full cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123b2a] md:px-5 md:py-4 ${
                      activeEco === index
                        ? "border-[#123b2a] bg-[#123b2a] text-white shadow-[0_16px_44px_rgba(18,59,42,0.28)]"
                        : "border-[#c9bfb0] bg-white text-[#123b2a] shadow-[0_4px_18px_rgba(18,59,42,0.05)] hover:border-[#123b2a]/45 hover:shadow-[0_10px_32px_rgba(18,59,42,0.09)] active:scale-[0.99]"
                    }`}
                  >
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-xl text-xs font-black tabular-nums ${
                        activeEco === index
                          ? "bg-[#f0b33b] text-[#13251d]"
                          : "bg-[#e8f4ee] text-[#123b2a] transition group-hover:bg-[#dcefe8]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1 text-base font-black md:text-lg">{item.name}</span>
                    <ChevronRight
                      aria-hidden
                      className={`size-5 shrink-0 transition duration-200 ${
                        activeEco === index
                          ? "translate-x-0 text-[#f0b33b]"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                      }`}
                      strokeWidth={2.5}
                    />
                  </button>
                ))}
              </div>
            </div>

            <article
              id="eco-panel"
              role="tabpanel"
              aria-labelledby={`eco-tab-${activeEco}`}
              className="flex min-h-[min(420px,70vh)] flex-col overflow-hidden rounded-[2rem] border border-[#cfc7bc] bg-white shadow-[0_26px_70px_rgba(18,59,42,0.11)] lg:min-h-[460px] lg:flex-row"
            >
              <div className="relative h-48 shrink-0 overflow-hidden lg:h-auto lg:w-[41%] lg:min-h-0">
                <Image
                  src="/images/children-activity.jpg"
                  alt={`Students and classrooms representing ${eco.name} at New Vedha`}
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-white/30 lg:to-white" />
                <p className="absolute bottom-3 left-4 max-w-[12rem] text-xs font-bold uppercase tracking-wider text-white drop-shadow-md lg:text-[0.65rem] lg:text-white/90">
                  {eco.name}
                </p>
              </div>

              <div className="relative flex flex-1 flex-col justify-center px-7 py-8 md:px-10 md:py-10">
                <div
                  key={eco.name}
                  className="eco-detail-enter max-w-prose"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <p className="text-xs font-black uppercase tracking-[0.26em] text-[#b87808]">
                    Pathway overview
                  </p>
                  <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#123b2a] md:text-[2rem] lg:text-[2.15rem]">
                    {eco.name}
                  </h3>
                  <p className="mt-5 text-[1.05rem] font-semibold leading-[1.8] text-[#243831] md:text-lg md:leading-[1.85]">
                    {eco.text}
                  </p>
                  <a
                    href="#contact"
                    className="group/link mt-8 inline-flex items-center gap-2 text-sm font-black text-[#0b5f63] underline decoration-[#0b5f63]/35 underline-offset-4 transition hover:text-[#123b2a] hover:decoration-[#123b2a]"
                  >
                    Discuss this pathway with our team
                    <ArrowRight
                      size={16}
                      className="transition group-hover/link:translate-x-1"
                      aria-hidden
                    />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-24 md:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f0b33b]/10 to-transparent" aria-hidden />
        <div className="section-shell relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.28em] text-[#b87808]">
                <span className="h-px w-8 bg-[#f0b33b]" aria-hidden />
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.08] text-[#123b2a] md:text-5xl lg:text-6xl">
                Speak directly with New Vedha leadership.
              </h2>
              <p className="mt-6 text-lg font-semibold leading-8 text-[#30443b]/76">
                For admissions, partnerships, franchise enquiries, and commercial details,
                contact the New Vedha team.
              </p>

            <div className="mt-8 grid gap-4">
              <a
                href="mailto:sandesh@newvedha.com "
                className="group flex items-center gap-4 rounded-3xl bg-[#123b2a] p-5 font-black text-white shadow-[0_18px_50px_rgba(18,59,42,0.28)] transition hover:-translate-y-1 hover:bg-[#0b5f63] hover:shadow-[0_24px_60px_rgba(11,95,99,0.35)]"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-white text-[#123b2a] shadow-inner transition group-hover:scale-105">
                  <Mail size={22} />
                </span>
                sandesh@newvedha.com 
              </a>
              <div className="flex items-start gap-4 rounded-3xl border border-[#dcd4c4] bg-white/90 p-5 shadow-[0_12px_36px_rgba(18,59,42,0.06)] backdrop-blur-sm">
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
                key={leader.name}
                className="card-lift relative overflow-hidden rounded-[2rem] border border-[#ebe7df] bg-white p-7 shadow-[0_18px_56px_rgba(18,59,42,0.09)] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-[#f0b33b] before:to-[#0b5f63] before:content-['']"
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

            <article className="rounded-[2rem] border border-white/12 bg-gradient-to-br from-[#0a3028] via-[#061b16] to-[#041910] p-8 text-white shadow-[0_28px_80px_rgba(0,0,0,0.35)] md:col-span-2">
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
              className="group rounded-3xl border border-[#dcd4c4] bg-white/95 shadow-[0_10px_36px_rgba(18,59,42,0.06)] backdrop-blur-sm transition-[border-color,box-shadow] open:border-[#123b2a]/35 open:shadow-[0_18px_48px_rgba(18,59,42,0.1)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-xl font-black text-[#123b2a] md:p-7">
                {faq.q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#e8f4ee] text-[#123b2a] transition duration-300 group-open:rotate-90 group-open:bg-[#123b2a] group-open:text-white">
                  <ChevronRight size={19} />
                </span>
              </summary>
              <p className="border-t border-[#ece8e0] px-6 pb-6 pt-4 text-lg font-semibold leading-8 text-[#30443b]/72 md:px-7 md:pb-7">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-[#061b16] py-12 text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0b33b]/55 to-transparent" aria-hidden />
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
