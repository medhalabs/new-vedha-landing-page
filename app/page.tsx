"use client";

import Image from "next/image";
import { useEffect, useState, type KeyboardEvent } from "react";
import {
  ArrowRight,
  Award,
  Bot,
  Brain,
  Briefcase,
  Building2,
  Check,
  ChevronRight,
  Coins,
  FileSearch,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Laptop,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Monitor,
  MonitorPlay,
  Palette,
  Phone,
  Play,
  Quote,
  Scale,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Sprout,
  TrendingUp,
  UsersRound,
  WandSparkles
} from "lucide-react";

const navItems = [
  "Programs",
  "Experience",
  "Franchise",
  "Ecosystem",
  "Skill Academy",
  "Contact"
];

const heroRotatingPhrases = ["Pre School", "Coaching center", "Skill Academy"];

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
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Young children exploring hands-on preschool activities—play, sensory learning, and discovery.",
    text: "Play Home, Nursery, LKG, and UKG built around joyful early childhood development—safe routines, trained educators, parent visibility, and progression into higher grades without friction."
  },
  {
    name: "Coaching",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "School-age students in focused classroom coaching—study, discipline, and academic support.",
    text: "Structured academic support for school-age learners: disciplined practice, doubt-solving, periodic assessments, and board-aware pacing without crushing curiosity."
  },
  {
    name: "Online Learning",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Learner following an online lesson on a laptop—digital classes and flexible schedules.",
    text: "Accessible digital classes, assignments, and progress visibility so learning continues beyond the physical classroom for families who need flexibility."
  },
  {
    name: "Skill Academy",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Professionals collaborating at computers—skills training, tools, and employability-focused learning.",
    text: "Industry-relevant skills, project-based learning, and exam-backed certification—plus job application support, interview prep, and career guidance so learners move from classroom to career with confidence. We teach what you ask for: the published list covers only sample tracks; faculty are drawn from a much wider bench, so whatever you want to pursue, ask us—we can typically match you with the right mentors."
  },
  {
    name: "Franchise Network",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Partners planning together—franchise support, entrepreneurship, and brand-aligned centres.",
    text: "Entrepreneurs plug into shared curriculum, brand systems, and ongoing guidance—scaling ethical education businesses with lower guesswork and stronger learner outcomes."
  }
];

const skillAcademyTeachAreas = [
  {
    title: "IT Skills",
    icon: Laptop,
    iconGradient: "from-[#6d28d9] to-[#4c1d95]",
    items: ["Code: Python, Java, React (Frontend)", "DBMS (SQL, MySQL)", "AI Skills"]
  },
  {
    title: "Robotics & Electronics",
    icon: Bot,
    iconGradient: "from-[#059669] to-[#047857]",
    items: ["Robotics", "Electronics", "Arduino Programming", "Raspberry Pi Projects"]
  },
  {
    title: "Design & Software",
    icon: Palette,
    iconGradient: "from-[#2563eb] to-[#1d4ed8]",
    items: ["CAD Design", "MS Excel (Advanced)", "Software Tools (Latest Industry Usage)"]
  },
  {
    title: "Communication & Personal Growth",
    icon: UsersRound,
    iconGradient: "from-[#ea580c] to-[#c2410c]",
    items: ["Personality Development", "Advanced English", "German Language"]
  },
  {
    title: "Basic & Advanced Computer Skills",
    icon: Monitor,
    iconGradient: "from-[#db2777] to-[#be185d]",
    items: ["Basic Computer", "Advanced Computer Skills", "Internet & Digital Literacy"]
  },
  {
    title: "Self Employment",
    icon: Briefcase,
    iconGradient: "from-[#0d9488] to-[#0f766e]",
    items: ["Entrepreneurship Skills", "Small Business Ideas", "Self Employment Guidance"]
  }
] as const;

const skillAcademyApproachItems = [
  {
    icon: Lightbulb,
    title: "Project-Based Learning",
    text: "Learn by building real-world projects that strengthen concepts and practical understanding."
  },
  {
    icon: Award,
    title: "Certificate Based on Exams",
    text: "Certificates awarded based on performance in exams and project evaluations."
  },
  {
    icon: GraduationCap,
    title: "Industry Relevant Curriculum",
    text: "Updated skills aligned with industry standards and future technologies."
  }
] as const;

const skillAcademyCareerSteps = [
  {
    icon: FileSearch,
    title: "Job Application Support",
    text: "We help you apply to the right job opportunities."
  },
  {
    icon: MessageCircle,
    title: "Interview Preparation",
    text: "Resume building, mock interviews, and personal guidance."
  },
  {
    icon: TrendingUp,
    title: "Push Through Consultancies",
    text: "We connect and recommend you through our trusted consultancy partners."
  },
  {
    icon: Handshake,
    title: "Career Guidance",
    text: "One-to-one support to help you choose the right career path."
  }
] as const;

const leaders = [
  {
    name: "Nagabushan N",
    role: "Chief Executive Officer",
    phone: "+91 8310325960",
    email: "sandesh@newvedha.com "
  },
  {
    name: "Narasimha Murthy",
    role: "Chief Managing Officer",
    phone: "+91 9743595827",
    email: "sandesh@newvedha.com "
  }
];

/** Leadership roster: role, highlights. Featured links tie to public products (e.g. medhalabs.in, venmox.in). */
const executives: {
  name: string;
  designation: string;
  achievements: string[];
  filled: boolean;
  seeAlso?: { href: string; label: string; trailing: string };
}[] = [
  {
    name: "Sandesh Shetty",
    designation: "Founder & Managing Director",
    achievements: [
      "Brings more than 25 years of experience running a long-standing family legacy business—discipline in finance, relationships, and steady execution that now anchors how New Vedha scales with integrity.",
      "Founder of New Vedha Pre School and highly ambitious for the education sector—focused on expanding access to high-trust early learning, franchise growth, and programs that pair timeless values with modern classroom practice."
    ],
    filled: true
  },
  {
    name: "Nagabushan N",
    designation: "Chief Executive Officer",
    achievements: [
      "Founder & CEO of Venmox Crypto Broker, a next-generation crypto brokerage platform delivering secure, transparent, and high-performance trading solutions for global investors.Dedicated to creating advanced financial platforms that empower communities, encourage financial growth, and support digital transformation.",
      "Visionary entrepreneur passionate about innovation, finance, blockchain technology, and building scalable business ecosystems for the future."
    ],
    filled: true,
    seeAlso: {
      href: "https://venmox.in/",
      label: "Venmox Exchange",
      trailing: "—the crypto platform led from the CEO office."
    }
  },
  {
    name: "Pavan Raj K G",
    designation: "Chief Operating Officer",
    achievements: [
      "Founded Medhā Labs in 2022 and leads its product line—highlighting shipped tools such as Billinator and Medha Inbrix, while supporting many technology companies with customised software solutions.",
      "Continues to ship and evolve further web products alongside bespoke software and growth-focused builds for startups and brands."
    ],
    filled: true,
    seeAlso: {
      href: "https://medhalabs.in/",
      label: "Medhā Labs",
      trailing: "—the studio behind our digital presence."
    }
  },
  {
    name: "Narasimha Murthy",
    designation: "Chief Marketing Officer",
    achievements: [
      "An industrialist and the founder of H S CNC Tech—bringing a manufacturing mindset, operational rigor, and long-horizon business building to how we position New Vedha and its programs in the market.",
      "Co-founder of Venmox Exchange, helping steer brand narrative, community growth, and partnerships alongside the core product—connecting institutional-grade ambition with how families and partners experience our education brands."
    ],
    filled: true,
    seeAlso: {
      href: "https://venmox.in/",
      label: "Venmox Exchange",
      trailing: "—co-founded with the Venmox leadership team."
    }
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
  const [heroTyped, setHeroTyped] = useState("");
  const [heroPhraseIndex, setHeroPhraseIndex] = useState(0);
  const [heroDeleting, setHeroDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPrefersReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setHeroTyped(heroRotatingPhrases[0]);
      setHeroDeleting(false);
      setHeroPhraseIndex(0);
      return;
    }

    const full = heroRotatingPhrases[heroPhraseIndex];
    const typeMs = heroDeleting ? 42 : 78;
    const pauseMs = 2200;
    const pauseBetweenMs = 360;

    let timer: ReturnType<typeof setTimeout>;

    if (!heroDeleting && heroTyped === full) {
      timer = setTimeout(() => setHeroDeleting(true), pauseMs);
    } else if (heroDeleting && heroTyped === "") {
      timer = setTimeout(() => {
        setHeroDeleting(false);
        setHeroPhraseIndex((i) => (i + 1) % heroRotatingPhrases.length);
      }, pauseBetweenMs);
    } else if (heroDeleting) {
      timer = setTimeout(() => setHeroTyped((t) => t.slice(0, -1)), typeMs);
    } else {
      timer = setTimeout(() => setHeroTyped(full.slice(0, heroTyped.length + 1)), typeMs);
    }

    return () => clearTimeout(timer);
  }, [heroTyped, heroPhraseIndex, heroDeleting, prefersReducedMotion]);

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
                Pre School | Skill Academy
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="nav-link text-white/76"
              >
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
          <div className="relative z-20 max-w-4xl section-reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/22 bg-gradient-to-r from-white/[0.14] to-white/[0.06] px-4 py-2.5 text-sm font-black text-[#fff4d4] shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
              <WandSparkles size={16} className="text-[#f0b33b]" />
              Ancient Wisdom | Modern Minds
            </div>
            <h1 className="text-balance font-black tracking-tight drop-shadow-[0_6px_48px_rgba(0,0,0,0.38)]">
              <span className="block text-6xl leading-[0.95] sm:text-7xl lg:text-[6.6rem]">
                New Vedha
              </span>
              <span className="mt-1.5 block text-4xl leading-[1.05] sm:mt-2 sm:text-5xl lg:mt-2.5 lg:text-[3.15rem]">
                <span className="relative inline-block min-w-[13ch] max-w-full text-left">
                  <span className="text-[#f0b33b]" aria-hidden="true">
                    {heroTyped}
                    <span
                      className={`hero-type-caret ml-1 inline-block h-[0.78em] w-[3px] translate-y-px bg-current align-[-0.1em] sm:align-[-0.08em] ${prefersReducedMotion ? "hero-type-caret-static" : ""}`}
                    />
                  </span>
                  <span className="sr-only">{heroRotatingPhrases.join(", ")}</span>
                </span>
              </span>
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

          <div className="relative z-0 hidden section-reveal section-reveal-delay-1 lg:block">
            <div className="hero-orbit hero-orbit-glass mx-auto aspect-square max-w-[520px] rounded-full p-7 md:p-8">
              <div className="hero-orbit-inner relative grid h-full w-full place-items-center overflow-visible rounded-full">
                <svg
                  className="orbit-connectors pointer-events-none absolute inset-[6%] z-0 h-[88%] w-[88%]"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <defs>
                    <linearGradient
                      id="heroOrbitLineGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#96e0d3" stopOpacity="0.25" />
                      <stop offset="45%" stopColor="#f0b33b" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#96e0d3" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="31"
                    className="orbit-connectors-ring"
                    stroke="url(#heroOrbitLineGrad)"
                    strokeWidth="0.45"
                  />
                  <g
                    stroke="url(#heroOrbitLineGrad)"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    className="orbit-connectors-spokes"
                  >
                    <line x1="50" y1="50" x2="15" y2="25" />
                    <line x1="50" y1="50" x2="85" y2="28" />
                    <line x1="50" y1="50" x2="18" y2="76" />
                    <line x1="50" y1="50" x2="82" y2="74" />
                  </g>
                </svg>
                <Image
                  src="/new-vedha-hero-logo.png"
                  alt="New Vedha symbolic learning tree"
                  width={500}
                  height={500}
                  className="relative z-[1] w-[76%] object-contain drop-shadow-[0_14px_40px_rgba(6,27,22,0.2)]"
                />
                {["Mind", "Play", "Safety", "Future"].map((item, index) => (
                  <span
                    key={item}
                    className={`orbit-chip orbit-chip-${index + 1} absolute z-[2] rounded-full border border-[#f0b33b]/40 bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f9dc8f] shadow-[0_10px_34px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md`}
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
          <div className="flex flex-col gap-8 lg:gap-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-10">
              <div className="lg:sticky lg:top-28">
                <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.28em] text-[#b87808]">
                  <span className="h-px w-8 bg-[#f0b33b]" aria-hidden />
                  Franchise Opportunity
                </p>
                <h2 className="mt-3 text-4xl font-black leading-[1.08] text-[#123b2a] md:text-5xl lg:text-[3.35rem]">
                  Build a New Vedha preschool with serious support.
                </h2>
                <p className="mt-5 text-[1.05rem] font-semibold leading-[1.75rem] text-[#30443b]/78 md:text-lg md:leading-8">
                  Commercials are shared only after consultation. The site focuses on
                  vision, support, and fit, then invites serious partners to speak with
                  leadership. Your preschool sits inside our wider{" "}
                  <span className="font-black text-[#123b2a]">Kids To Careers</span>{" "}
                  journey—not an isolated playschool, but an on-ramp into lifelong learning.
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#123b2a] px-8 py-3.5 font-black text-white shadow-[0_14px_44px_rgba(18,59,42,0.28)] transition hover:-translate-y-1 hover:bg-[#0b5f63] hover:shadow-[0_20px_50px_rgba(11,95,99,0.35)]"
                >
                  Request Details <ArrowRight size={18} />
                </a>
              </div>

              <div className="min-w-0">
                <article className="overflow-hidden rounded-[2rem] border border-[#d6cfc3] bg-white shadow-[0_20px_56px_rgba(18,59,42,0.08)]">
                  <div className="relative bg-gradient-to-br from-[#f5c24f] via-[#f0b33b] to-[#d49216] px-6 py-6 text-[#13251d] md:flex md:items-center md:gap-8 md:px-8 md:py-6">
                    <div className="pointer-events-none absolute -right-12 top-0 h-36 w-36 rounded-full bg-white/22 blur-2xl" aria-hidden />
                    <div className="relative grid size-14 shrink-0 place-items-center rounded-2xl bg-black/12 ring-2 ring-black/10">
                      <Building2 size={28} className="drop-shadow-sm" />
                    </div>
                    <div className="relative mt-5 md:mt-0">
                      <h3 className="text-xl font-black md:text-2xl">Space-first planning</h3>
                      <p className="mt-2 text-[0.95rem] font-semibold leading-relaxed opacity-92 md:text-base md:leading-7">
                        Ideal preschool discussion starts with a child-safe, accessible space of
                        approximately 1500-2500 sq ft.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-px border-t border-[#e8e4dc] bg-[#e8e4dc] sm:grid-cols-2">
                    {franchiseSteps.map((step, index) => (
                      <div
                        key={step}
                        className="flex min-w-0 items-start gap-3 bg-[#fafaf8] px-5 py-4 md:gap-3.5 md:px-6 md:py-4 lg:py-[1.125rem]"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#123b2a] text-[0.7rem] font-black text-white md:size-10 md:text-[0.75rem]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="min-w-0 pt-0.5 text-[0.9375rem] font-black leading-snug text-[#123b2a] md:text-base">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative border-t border-[#e5e0d6] bg-gradient-to-br from-[#fffdf7] via-[#fff9eb] to-[#f5ecd8] px-6 py-6 md:px-8 md:py-7">
                    <div className="pointer-events-none absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-[#0b5f63]/10 blur-3xl" aria-hidden />
                    <p className="text-xs font-black uppercase tracking-[0.26em] text-[#b87808]">
                      Kids To Careers
                    </p>
                    <h3 className="mt-2 text-2xl font-black leading-tight text-[#123b2a] md:text-3xl">
                      One education ecosystem, many future pathways.
                    </h3>
                    <p className="mt-3 text-[0.95rem] font-semibold leading-relaxed text-[#30443b]/85 md:text-base md:leading-7">
                      Franchise partners inherit more than a preschool brand—you join a continuum
                      from early childhood through coaching, digital learning, and skills-focused
                      programs. Families can grow with New Vedha; your centre becomes the trusted
                      first chapter.
                    </p>
                    <a
                      href="#ecosystem"
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#123b2a]/15 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#0b5f63] shadow-sm transition hover:border-[#f0b33b]/50 hover:bg-white"
                    >
                      Explore the ecosystem <ChevronRight size={15} />
                    </a>
                  </div>
                </article>
              </div>
            </div>

            <article className="min-w-0 overflow-hidden rounded-[2rem] border border-[#e0dcd4] bg-[#faf9f6] shadow-[0_14px_44px_rgba(18,59,42,0.05)]">
              <div className="flex flex-col gap-4 border-b border-[#e5e1da] bg-white/60 px-6 py-5 md:flex-row md:items-end md:justify-between md:gap-10 md:px-8 lg:py-6">
                <div className="max-w-none md:max-w-[min(100%,42rem)] lg:max-w-[min(100%,52rem)]">
                  <h3 className="text-xl font-black tracking-tight text-[#123b2a] md:text-2xl lg:text-[1.65rem]">
                    360° support for franchise success
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-[#30443b]/82 md:text-[0.9375rem] md:leading-7 lg:text-[1rem] lg:leading-7">
                    Templates, live conversations with the central team, and clear escalation—so
                    your rollout stays practical, not theoretical.
                  </p>
                </div>
              </div>
              <div className="grid gap-px bg-[#e5e1da] sm:grid-cols-2 lg:grid-cols-4">
                {franchiseSupportPillars.map(({ icon: Icon, title, detail }) => (
                  <div key={title} className="flex gap-3 bg-white p-4 md:gap-3.5 md:p-5 lg:p-6">
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(18,59,42,0.06)] text-[#123b2a] lg:size-11"
                      aria-hidden
                    >
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[0.9375rem] font-black leading-snug text-[#123b2a] md:text-[1rem] lg:text-[1.02rem]">
                        {title}
                      </h4>
                      <p className="mt-1.5 text-[0.8125rem] font-semibold leading-relaxed text-[#30443b]/85 md:text-[0.875rem] md:leading-6 lg:text-[0.9rem] lg:leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
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
              className="flex min-h-[min(420px,70vh)] flex-col overflow-hidden rounded-[2rem] border border-[#cfc7bc] bg-white shadow-[0_26px_70px_rgba(18,59,42,0.11)] lg:min-h-[460px] lg:flex-row lg:items-stretch"
            >
              <div className="relative isolate h-48 w-full shrink-0 overflow-hidden bg-[#e8ebe9] lg:w-[41%] lg:min-h-[min(560px,calc(100vh-180px))] lg:max-w-none">
                {/* Native img: avoids Next/Image + flex `height:100%` gaps; URLs are HTTPS only */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={`${activeEco}-${eco.image}`}
                  src={eco.image}
                  alt={eco.imageAlt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 z-0 h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/45 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-white/30 lg:to-white" />
                <p className="absolute bottom-3 left-4 z-20 max-w-[12rem] text-xs font-bold uppercase tracking-wider text-white drop-shadow-md lg:text-[0.65rem] lg:text-white/90">
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

      <section
        id="skill-academy"
        className="relative overflow-hidden bg-[#f4eef8] py-24 md:py-28"
        aria-labelledby="skill-academy-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(109, 40, 217, 0.07) 1px, transparent 1px)",
            backgroundSize: "26px 26px"
          }}
          aria-hidden
        />
        <div className="section-shell relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#3d2966] via-[#4c1d6e] to-[#312066] px-8 py-12 text-white shadow-[0_32px_90px_rgba(49,32,102,0.35)] md:px-12 md:py-14">
            <div
              className="pointer-events-none absolute -right-[20%] top-1/2 h-[min(80%,420px)] w-[55%] -translate-y-1/2 skew-x-[-14deg] rounded-3xl bg-[#f0b33b]/12 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-5">
                <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-white/12 ring-2 ring-white/25 backdrop-blur-sm md:size-[4.25rem]">
                  <GraduationCap className="text-[#f9dc8f]" size={36} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.32em] text-[#e9d5ff]/80">
                    New Vedha
                  </p>
                  <h2
                    id="skill-academy-heading"
                    className="mt-2 text-4xl font-black tracking-tight md:text-5xl"
                  >
                    Skill Academy
                  </h2>
                  <p className="mt-3 max-w-xl text-lg font-semibold italic text-[#e9d5ff]/95 md:text-xl">
                    Skills Today, Success Tomorrow.
                  </p>
                </div>
              </div>
              <p className="max-w-md text-base font-black leading-snug text-white/92 md:text-right md:text-lg">
                Industry-Relevant Skills | Project-Based Learning | Career-Ready Future
              </p>
            </div>
          </div>

          <div className="mt-14 section-reveal">
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.28em] text-[#5b21b6]">
              <span className="h-px w-8 bg-[#7c3aed]" aria-hidden />
              What We Teach
            </p>
            <h3 className="mt-4 text-3xl font-black leading-[1.1] text-[#123b2a] md:text-4xl lg:text-[2.65rem]">
              Programs that mirror what employers value.
            </h3>
            <div className="mt-6 rounded-2xl border border-[#c4b5fd] bg-gradient-to-br from-[#faf5ff] via-[#f5f3ff] to-[#ede9fe] px-6 py-5 shadow-[0_12px_36px_rgba(91,33,182,0.07)] md:px-8 md:py-6">
              <p className="text-xl font-black text-[#312066] md:text-2xl">
                We teach what you ask for.
              </p>
              <p className="mt-3 max-w-3xl text-[0.95rem] font-semibold leading-relaxed text-[#30443b]/90 md:text-lg md:leading-8">
                The tracks below are popular starting points—not a closed menu. Tell us what you want to learn or achieve, and we will align delivery to your goals. Our faculty spans many more skills and stacks than fit on one page—you are not limited to this list alone.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {skillAcademyTeachAreas.map(({ title, icon: Icon, iconGradient, items }) => (
                <article
                  key={title}
                  className="card-lift rounded-[1.65rem] border border-[#e4d9f5] bg-white/95 p-6 shadow-[0_14px_44px_rgba(49,32,102,0.06)] backdrop-blur-sm md:p-7"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${iconGradient} text-white shadow-lg`}
                      aria-hidden
                    >
                      <Icon size={26} strokeWidth={2} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg font-black text-[#123b2a] md:text-xl">{title}</h4>
                      <ul className="mt-4 list-none space-y-2.5 p-0 text-sm font-semibold leading-relaxed text-[#30443b]/88 md:text-[0.9375rem]">
                        {items.map((line) => (
                          <li key={line} className="flex gap-2">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#7c3aed]/70" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-[#d8c4eb] bg-white/90 p-8 shadow-[0_20px_60px_rgba(49,32,102,0.07)] backdrop-blur-sm md:p-10">
            <p className="text-center text-sm font-black uppercase tracking-[0.28em] text-[#5b21b6]">
              Our Unique Learning Approach
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
              {skillAcademyApproachItems.map(({ icon: Icon, title: approachTitle, text }) => (
                <div key={approachTitle} className="text-center md:px-2">
                  <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#f3e8ff] text-[#5b21b6] shadow-inner">
                    <Icon size={28} strokeWidth={2} aria-hidden />
                  </span>
                  <h4 className="mt-5 text-lg font-black text-[#123b2a] md:text-xl">{approachTitle}</h4>
                  <p className="mx-auto mt-3 max-w-sm text-[0.95rem] font-semibold leading-relaxed text-[#30443b]/85">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-[#fcd9a8] bg-gradient-to-br from-[#fff4e6] via-[#ffedd5] to-[#fde68a]/40 p-8 shadow-[0_24px_70px_rgba(180,83,9,0.09)] md:p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#c2410c]">
                  Career Support &amp; Job Assistance
                </p>
                <h3 className="mt-4 text-2xl font-black text-[#123b2a] md:text-3xl">
                  From readiness to referrals—support at every step.
                </h3>
                <ol className="mt-10 grid gap-6 sm:grid-cols-2">
                  {skillAcademyCareerSteps.map(({ icon: Icon, title: stepTitle, text }, index) => (
                    <li
                      key={stepTitle}
                      className="relative flex gap-4 rounded-2xl border border-white/60 bg-white/75 p-5 shadow-[0_8px_28px_rgba(180,83,9,0.08)] backdrop-blur-sm"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#fff7ed] text-[#c2410c]">
                        <Icon size={22} strokeWidth={2} aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#92400e]/80">
                          Step {index + 1}
                        </p>
                        <p className="mt-1 text-lg font-black text-[#123b2a]">{stepTitle}</p>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-[#30443b]/85">
                          {text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <aside className="flex w-full shrink-0 flex-col justify-center gap-4 lg:w-[min(100%,280px)]">
                <div className="rounded-2xl bg-gradient-to-br from-[#312066] to-[#1e1039] px-6 py-7 text-[#fde047] shadow-[0_20px_50px_rgba(49,32,102,0.35)]">
                  <p className="text-xs font-black uppercase tracking-[0.26em] text-[#fcd34d]/80">
                    Pathway
                  </p>
                  <p className="mt-4 text-lg font-black leading-snug md:text-xl">
                    Learn • Build • Get Certified • Get Hired
                  </p>
                </div>
                <div className="rounded-2xl border-2 border-[#f0b33b] bg-white px-6 py-5 text-center shadow-md">
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-[#312066] md:text-[0.9375rem]">
                    We build your skills. We shape your future.
                  </p>
                </div>
              </aside>
            </div>
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#312066] via-[#3d2966] to-[#261a4d] px-8 py-12 text-center text-white md:px-12 md:py-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.2]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(253, 224, 71, 0.35) 1px, transparent 1px)",
                backgroundSize: "22px 22px"
              }}
              aria-hidden
            />
            <GraduationCap
              className="relative mx-auto text-[#f0b33b]"
              size={44}
              strokeWidth={2}
              aria-hidden
            />
            <p className="relative mt-6 text-2xl font-black tracking-tight text-[#fcd34d] md:text-[1.85rem]">
              Your Skills. Your Future. Our Support.
            </p>
            <p className="relative mx-auto mt-4 max-w-xl text-[1.05rem] font-semibold text-white/88">
              Learn. Build Projects. Get Certified. Get Placed.
            </p>
            <a
              href="#contact"
              className="relative mt-10 inline-flex items-center gap-3 rounded-full border-2 border-[#f0b33b] bg-white px-8 py-4 text-base font-black text-[#312066] shadow-[0_14px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:bg-[#f0b33b]"
            >
              Join now &amp; start your journey toward a successful career
              <span className="text-[#f0b33b]" aria-hidden>
                &gt;&gt;
              </span>
            </a>
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

      <section
        id="leadership"
        className="relative overflow-hidden bg-[#f7f2e8] py-24 md:py-28"
        aria-labelledby="leadership-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,247,0.9)_0%,transparent_40%,rgba(232,244,238,0.35)_100%)]"
          aria-hidden
        />
        <div className="section-shell relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center justify-center gap-2 text-sm font-black uppercase tracking-[0.28em] text-[#b87808]">
              <span className="h-px w-10 bg-[#123b2a]/20" aria-hidden />
              Founder &amp; executives
              <span className="h-px w-10 bg-[#123b2a]/20" aria-hidden />
            </p>
            <h2
              id="leadership-heading"
              className="mt-4 text-4xl font-black leading-[1.08] text-[#123b2a] md:text-5xl lg:text-6xl"
            >
              The people guiding New Vedha forward.
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-[#243831]/85">
              A quick introduction to our leadership bench—background, mandate, and what
              they have already delivered in education, operations, and growth.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {executives.map((exec) => (
              <article
                key={exec.designation}
                className={`card-lift flex flex-col overflow-hidden rounded-[2rem] border bg-white shadow-[0_18px_56px_rgba(18,59,42,0.08)] transition ${
                  exec.filled
                    ? "border-[#dbe8e0] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-[#f0b33b] before:to-[#0b5f63] before:content-[''] relative"
                    : "border-[#ebe7df]"
                }`}
              >
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="text-xl font-black text-[#123b2a] md:text-[1.35rem]">{exec.name}</h3>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.2em] text-[#b87808]">
                    {exec.designation}
                  </p>

                  <ul className="mt-5 list-none space-y-2.5 p-0 text-sm font-semibold leading-relaxed text-[#30443b]/82 md:text-[0.9375rem]">
                    {exec.achievements.map((line) => (
                      <li key={line} className="flex gap-2.5">
                        <span
                          className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-[#0b5f63]"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  {exec.seeAlso ? (
                    <p className="mt-6 text-xs font-bold text-[#30443b]/55">
                      Also see{" "}
                      <a
                        href={exec.seeAlso.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-black text-[#0b5f63] underline decoration-[#0b5f63]/30 underline-offset-4 transition hover:text-[#123b2a] hover:decoration-[#123b2a]"
                      >
                        {exec.seeAlso.label}
                      </a>{" "}
                      {exec.seeAlso.trailing}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-[#061b16] py-12 text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0b33b]/55 to-transparent" aria-hidden />
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
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
          <div className="flex flex-col gap-2 md:items-end md:text-right">
            <p className="text-sm font-semibold text-white/58">
              © 2026 New Vedha. All rights reserved.
            </p>
            <p className="text-sm font-semibold text-white/45">
              Website built by{" "}
              <a
                href="https://medhalabs.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white/72 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-[#f0b33b]"
              >
                Medhālabs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
