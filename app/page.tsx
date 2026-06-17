"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  LayoutGrid,
  Mail,
  MapPin,
  Phone,
  Play,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

/* ─────────────────────────── DATA ─────────────────────────── */

const navItems = [
  { label: "Why New Vedha", href: "#why" },
  { label: "Modules", href: "#modules" },
  { label: "Franchise Plans", href: "#plans" },
  { label: "Success Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

const stats = [
  { num: "₹2Cr+", label: "Revenue potential / year" },
  { num: "55-60%", label: "Profit margins" },
  { num: "3-4 Mo", label: "Break-even timeline" },
  { num: "500+", label: "Education entrepreneurs" }
];

const whyCards = [
  {
    icon: LayoutGrid,
    title: "5 Revenue Streams",
    desc: "Play Home, Preschool, Tutorials, Skill Academy & Exam Coaching — all under one roof.",
    bullets: ["Diversified income", "Year-round demand", "Cross-sell students"]
  },
  {
    icon: Shield,
    title: "Recession-Proof",
    desc: "Education demand never dips. Parents invest in their children regardless of the economy.",
    bullets: ["Essential service", "Government exam boom", "Skill gap demand"]
  },
  {
    icon: Zap,
    title: "Quick Break-Even",
    desc: "Structured ops and proven systems get you profitable in 3-4 months, not years.",
    bullets: ["Low operating costs", "High-margin courses", "Fast admissions"]
  },
  {
    icon: HeartHandshake,
    title: "Complete Support",
    desc: "Curriculum, training, marketing, tech, and placement support — we build together.",
    bullets: ["360° onboarding", "Ongoing mentorship", "Central resources"]
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    desc: "Start with one module, expand into all five. Scale at your own pace.",
    bullets: ["Module-wise launch", "Multi-centre option", "Proven playbook"]
  },
  {
    icon: Award,
    title: "Social Impact",
    desc: "Build wealth while transforming thousands of lives in your community.",
    bullets: ["Trusted brand", "Government tie-ups", "Community respect"]
  }
];

const marketStats = [
  { num: "3L+", label: "Competitive exam aspirants per year" },
  { num: "5L+", label: "Skill development seekers per year" },
  { num: "1L+", label: "Self-employment aspirants per year" },
  { num: "5-8K", label: "Govt job vacancies (Constable alone)" }
];

const modules = [
  {
    id: "play-home",
    name: "Play Home",
    age: "Ages 2–4",
    fee: "₹15,000 – ₹35,000 / year",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: "🧸",
    desc: "Sensory play, motor development, and emotional comfort — the gentlest first step into learning.",
    outcomes: ["Settling confidence", "Motor skills", "Social comfort"],
    href: "/play-home"
  },
  {
    id: "preschool",
    name: "Preschool",
    age: "Ages 4–6",
    fee: "₹20,000 – ₹50,000 / year",
    color: "from-blue-400 to-indigo-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "📚",
    desc: "Phonics, early maths, communication and school readiness built on joyful foundations.",
    outcomes: ["School readiness", "Phonics & numbers", "Independent learning"],
    href: "/preschool"
  },
  {
    id: "tutorials",
    name: "Tutorials",
    age: "Classes 7 – PUC",
    fee: "₹1,500 – ₹5,000 / month",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    icon: "🎯",
    desc: "Personalised academic support closing the gap between school teaching and board exam excellence.",
    outcomes: ["Board exam results", "Subject mastery", "Study habits"],
    href: "/tutorials"
  },
  {
    id: "skill-academy",
    name: "Skill Academy",
    age: "84 Courses",
    fee: "₹38,000 – ₹80,000 each",
    color: "from-orange-400 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: "💡",
    desc: "Industry-relevant tech, design, language and business skills paired with job placement support.",
    outcomes: ["Industry certification", "Job placement", "Career guidance"],
    href: "/skill-academy"
  },
  {
    id: "exam-coaching",
    name: "Exam Coaching",
    age: "26 Competitive Exams",
    fee: "₹10,000 – ₹60,000 each",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    icon: "🏛️",
    desc: "Karnataka and national government exam coaching — your guaranteed demand engine year-round.",
    outcomes: ["Government jobs", "Mock test system", "Interview prep"],
    href: "/exam-coaching"
  }
];

const plans = [
  {
    name: "Prime Tier",
    highlight: false,
    ideal: "First-time franchise owners with limited space",
    modules: ["Play Home", "Preschool"],
    features: [
      "1500 sq ft space",
      "2 module launch",
      "Brand usage rights",
      "Curriculum package",
      "Teacher training",
      "Marketing support"
    ],
    students: "50–80 students",
    revenue: "₹8–12L / year"
  },
  {
    name: "Prime Plus Tier",
    highlight: true,
    label: "Most Popular",
    ideal: "Growth-focused entrepreneurs with medium space",
    modules: ["Play Home", "Preschool", "Tutorials", "Skill Academy"],
    features: [
      "2000 sq ft space",
      "4 module launch",
      "Brand usage rights",
      "Full curriculum package",
      "Staff training & support",
      "Marketing & admissions",
      "Tech & software tools",
      "Quarterly reviews"
    ],
    students: "150–250 students",
    revenue: "₹18–28L / year"
  },
  {
    name: "Platinum Tier",
    highlight: false,
    ideal: "Serious investors seeking maximum ROI",
    modules: ["All 5 Modules"],
    features: [
      "2500+ sq ft space",
      "All 5 modules",
      "Exclusive territory",
      "Full curriculum package",
      "Dedicated support manager",
      "Advanced marketing",
      "Priority placement",
      "Scalability roadmap"
    ],
    students: "300–500 students",
    revenue: "₹40–60L / year"
  }
];

const foundingPerks = [
  {
    icon: "🏆",
    title: "Preferred Location Rights",
    desc: "Founding partners get first pick of their city or district. Once your territory is locked, no other New Vedha centre opens within your zone."
  },
  {
    icon: "💰",
    title: "Founding Partner Pricing",
    desc: "Early-stage franchise fee is significantly lower than post-launch pricing. Lock in today's rate before we scale nationally."
  },
  {
    icon: "🤝",
    title: "Direct Founder Access",
    desc: "Work directly with New Vedha founders during setup and launch — not a regional manager. Decisions happen fast, support is hands-on."
  },
  {
    icon: "📣",
    title: "Co-Marketing Opportunity",
    desc: "Your centre will be featured in New Vedha's launch campaigns, press releases, and social media as a founding partner story."
  },
  {
    icon: "🔧",
    title: "Shape the Playbook",
    desc: "Your feedback directly influences curriculum, pricing, and ops processes. Founding partners help build the systems the whole network will use."
  },
  {
    icon: "📈",
    title: "First-Mover Advantage",
    desc: "Be the first education brand in your locality with a proven 5-module system. Build brand equity before any competition arrives."
  }
];

const milestones = [
  { year: "2018", label: "Started", desc: "Started UPSC Online Coaching in (Kottigepalya) Bangalore. with 15 students in 1st batch" },
  { year: "2019", label: "Founded", desc: "Started tutorials for navodaya, SSLC, PUC students in Kadabgere(Bangalore) with 50 students in 1st batch" },
  { year: "2022", label: "Expanded", desc: "Started our Play Home journey in Mandya." },
  { year: "2024", label: "New Vedha Pre school", desc: "Launch of New Vedha Pre school brand" },
  { year: "2025", label: "Franchise Launch", desc: "Registered as a franchisee of New Vedha and started our first centre in Mandya." },
  { year: "2026", label: "Registed as New Vedha Pre School Pvt Ltd", desc: "Now We are a registered private limited company and serve the Nationwide" },
];

const faqs = [
  {
    q: "How much investment is required to start a New Vedha franchise?",
    a: "Investment varies by plan and location. We share commercial details during the consultation call after reviewing your space and city requirements. This ensures the numbers are realistic for your specific situation."
  },
  {
    q: "What space is required to open a centre?",
    a: "A minimum of 1500 sq ft in a child-safe, accessible location is ideal for the Prime Tier. Prime Plus and Platinum Tier plans typically require 2000–2500+ sq ft. We help you evaluate your space before you commit."
  },
  {
    q: "Do I need a background in education?",
    a: "No. Our franchise system is designed for entrepreneurs from any field. We provide complete curriculum, trained staff playbooks, and ongoing operational support. Many of our most successful partners come from business, IT, or manufacturing backgrounds."
  },
  {
    q: "How long until I break even?",
    a: "Most franchise partners break even within 3–4 months of launch, depending on their module mix and admissions pace. Our admissions support team works actively during this period."
  },
  {
    q: "Can I start with one module and expand later?",
    a: "Yes. Many partners start with Preschool or Exam Coaching and add modules as their centre grows. Our infrastructure is designed for modular expansion."
  },
  {
    q: "What ongoing support do I receive?",
    a: "You receive brand support, curriculum updates, teacher training, marketing assets, technology tools, and access to central operations team for escalations. Quarterly business reviews are included in Standard and Premium plans."
  }
];

const exams = {
  karnataka: [
    { name: "KAS (Karnataka Administrative Service)", vacancies: "150+", fee: "₹40K" },
    { name: "PSI / ASI (Police Sub-Inspector)", vacancies: "1,200+", fee: "₹25K" },
    { name: "PC / Constable Recruitment", vacancies: "5,000+", fee: "₹15K" },
    { name: "FDA / SDA (First & Second Division Assistant)", vacancies: "2,000+", fee: "₹20K" },
    { name: "Group C & D (Various Departments)", vacancies: "3,000+", fee: "₹12K" },
    { name: "KPSC (Karnataka Public Service Commission)", vacancies: "800+", fee: "₹35K" }
  ],
  national: [
    { name: "SSC CGL / CHSL", vacancies: "10,000+", fee: "₹30K" },
    { name: "IBPS PO / Clerk (Banking)", vacancies: "8,000+", fee: "₹28K" },
    { name: "Railway Group C & D (RRB)", vacancies: "15,000+", fee: "₹20K" },
    { name: "NDA / CDS (Defence)", vacancies: "600+", fee: "₹45K" },
    { name: "UPSC Civil Services", vacancies: "1,000+", fee: "₹60K" },
    { name: "CRPF / CISF / BSF Constable", vacancies: "12,000+", fee: "₹18K" }
  ],
  education: [
    { name: "TET (Teacher Eligibility Test)", vacancies: "5,000+", fee: "₹22K" },
    { name: "CTET (Central TET)", vacancies: "3,000+", fee: "₹25K" },
    { name: "KTET / D.Ed Exams", vacancies: "2,500+", fee: "₹20K" },
    { name: "B.Ed Entrance Examinations", vacancies: "4,000+", fee: "₹18K" },
    { name: "DSERT / DIET Recruitment", vacancies: "800+", fee: "₹28K" },
    { name: "NVS / KVS Teacher Recruitment", vacancies: "2,000+", fee: "₹30K" }
  ]
};

/* ─────────────────────────── COMPONENT ─────────────────────────── */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealDiv({ children, className = "", delay = 0, dir = "up" }: { children: React.ReactNode; className?: string; delay?: number; dir?: "up" | "left" | "right" | "scale" }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const dirClass = dir === "left" ? "reveal-left" : dir === "right" ? "reveal-right" : dir === "scale" ? "reveal-scale" : "reveal";
  const delayClass = delay === 1 ? "stagger-2" : delay === 2 ? "stagger-4" : delay === 3 ? "stagger-6" : "";
  return (
    <div ref={ref} className={`${dirClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

/* 3-D tilt card wrapper */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.025)`;
    el.style.transition = "transform 0.1s ease";
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
    el.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)";
  };
  return (
    <div ref={ref} className={`tilt-card ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

/* Animated counter (numeric part only) */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      obs.disconnect();
      const t0 = performance.now();
      const dur = 1400;
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(ease * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Home() {
  const [scrollPct, setScrollPct] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [activeExamTab, setActiveExamTab] = useState<"karnataka" | "national" | "education">("karnataka");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", city: "", plan: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(height > 0 ? (top / height) * 100 : 0);
      setScrolled(top > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) e.name = "Please enter your full name";
    if (!/^\d{10}$/.test(formData.phone.trim())) e.phone = "Enter a valid 10-digit phone number";
    if (!formData.city.trim()) e.city = "Please enter your city";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "c4631085-442d-4ba6-89fe-e09b7e860602",
        subject: "New Franchise Enquiry – New Vedha",
        from_name: "New Vedha Website",
        ...formData,
      }),
    });
    setFormState("success");
  };

  const mod = modules[activeModule];

  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#1a1a2e]">
      {/* scroll progress */}
      <div className="scroll-bar" style={{ width: `${scrollPct}%` }} role="progressbar" aria-valuenow={Math.round(scrollPct)} aria-valuemin={0} aria-valuemax={100} />

      {/* ── HEADER ── */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#1F4E78]/95 shadow-[0_8px_32px_rgba(31,78,120,0.28)] backdrop-blur-xl" : "bg-[#1F4E78]/80 backdrop-blur-md"} border-b border-white/10`}>
        <div className="shell flex h-18 items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/new-vedha-logo.png" alt="New Vedha" width={48} height={48}
              className="rounded-full bg-white p-1 ring-2 ring-white/20 transition group-hover:ring-[#F39C12]/60" priority />
            <div>
              <p className="text-base font-black tracking-wide text-white">NEW VEDHA</p>
              <p className="text-[10px] font-bold tracking-[0.12em] text-[#2ECC71]">Education Franchise</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="nav-link text-sm font-bold text-white/80">{item.label}</a>
            ))}
          </nav>

          <a href="#contact" className="hidden items-center gap-2 rounded-full bg-[#F39C12] px-5 py-2.5 text-sm font-black text-white shadow-[0_8px_24px_rgba(243,156,18,0.4)] transition hover:-translate-y-0.5 hover:bg-[#D68910] md:flex">
            Book Consultation <ArrowRight size={15} />
          </a>
          <a href="tel:+918310325960" className="grid size-10 place-items-center rounded-full bg-white/10 text-white md:hidden" aria-label="Call us">
            <Phone size={18} />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-[96vh] overflow-hidden bg-[#0f2744] text-white">
        {/* background image */}
        <Image src="/images/classroom-learning.jpg" alt="Education centre" fill sizes="100vw"
          className="object-cover opacity-20" priority />
        {/* blobs */}
        <div className="blob absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-[#1F4E78]/50 blur-[120px]" aria-hidden />
        <div className="blob blob-2 absolute -right-20 top-40 h-[400px] w-[400px] rounded-full bg-[#2ECC71]/20 blur-[100px]" aria-hidden />
        {/* floating particles */}
        {[
          { w: 6, h: 6, left: "15%", top: "20%", dur: "6s", delay: "0s" },
          { w: 10, h: 10, left: "75%", top: "30%", dur: "8s", delay: "-3s" },
          { w: 4, h: 4, left: "40%", top: "70%", dur: "5s", delay: "-1s" },
          { w: 8, h: 8, left: "60%", top: "15%", dur: "7s", delay: "-4s" },
          { w: 5, h: 5, left: "85%", top: "65%", dur: "9s", delay: "-2s" },
          { w: 7, h: 7, left: "25%", top: "50%", dur: "6.5s", delay: "-5s" },
        ].map((p, i) => (
          <div key={i} aria-hidden className="particle"
            style={{ width: p.w, height: p.h, left: p.left, top: p.top, animationDuration: p.dur, animationDelay: p.delay }} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2744] via-[#1F4E78]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fafaf8] to-transparent" />

        <div className="shell relative z-10 grid min-h-[96vh] items-center gap-12 pb-20 pt-28 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-[#F39C12] backdrop-blur-sm">
              <Star size={14} fill="currentColor" /> Franchise Opportunity · Karnataka & Beyond
            </div>
            <h1 className="text-balance font-black leading-[1.0]">
              <span className="block text-5xl sm:text-6xl lg:text-[5.5rem]">Build a</span>
              <span className="block text-5xl text-[#F39C12] sm:text-6xl lg:text-[5.5rem]">₹2Cr+</span>
              <span className="block text-5xl sm:text-6xl lg:text-[5.5rem]">Education Business</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white/85">
              Join 500+ education entrepreneurs. 5 revenue streams. 55-60% profit margins. Break-even in 3-4 months. Complete support system.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="glow-pulse relative inline-flex items-center gap-3 rounded-full bg-[#F39C12] px-7 py-4 text-base font-black text-white shadow-[0_14px_40px_rgba(243,156,18,0.45)] transition hover:-translate-y-1 hover:bg-[#D68910]">
                Schedule Free Consultation <ArrowRight size={18} />
              </a>
              <a href="#plans" className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-black text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/20">
                View Franchise Plans
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.label} className={`reveal rounded-2xl border border-white/15 bg-white/10 p-3 text-center backdrop-blur-sm transition-all hover:-translate-y-1 stagger-${i + 1 as 1|2|3|4}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}>
                  <p className="number-pop text-2xl font-black text-[#F39C12]">{s.num}</p>
                  <p className="mt-0.5 text-xs font-semibold text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* right card */}
          <div className="hidden lg:block">
            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-8 backdrop-blur-xl shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2ECC71]">The 5-Module Ecosystem</p>
              <h2 className="mt-3 text-2xl font-black">One centre. Five income streams.</h2>
              <div className="mt-6 grid gap-2.5">
                {modules.map((m, mi) => (
                  <div key={m.id} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/20">
                    <span className={`text-xl float float-delay-${(mi % 3 + 1) as 1|2|3}`}>{m.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-black">{m.name}</p>
                      <p className="text-xs text-white/60">{m.age} · {m.fee}</p>
                    </div>
                    <ChevronRight size={16} className="text-white/40" />
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F39C12] py-3 font-black text-white transition hover:bg-[#D68910]">
                Get Full Details <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="absolute bottom-12 left-0 right-0 hidden overflow-hidden md:block">
          <div className="marquee-inner text-xs font-black uppercase tracking-[0.3em] text-white/40">
            {["5 Revenue Streams", "55-60% Profit Margins", "3-4 Month Break-Even", "Complete Support", "500+ Entrepreneurs", "Proven Systems", "Government Exam Coaching", "84 Skill Courses"].concat(["5 Revenue Streams", "55-60% Profit Margins", "3-4 Month Break-Even", "Complete Support", "500+ Entrepreneurs", "Proven Systems", "Government Exam Coaching", "84 Skill Courses"]).map((item, i) => (
              <span key={i} className="px-8">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NEW VEDHA ── */}
      <section id="why" className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(31,78,120,0.05)_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden />
        <div className="shell relative">
          <RevealDiv className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Why New Vedha?</p>
            <h2 className="text-4xl font-black leading-[1.08] md:text-5xl lg:text-[3.5rem]">
              <span className="shimmer-text">Built for profit.</span>{" "}
              <span className="text-[#1F4E78]">Backed by purpose.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-gray-500">
              Six reasons why New Vedha is India&apos;s smartest education franchise opportunity.
            </p>
          </RevealDiv>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card, i) => (
              <RevealDiv key={card.title} delay={i % 3 as 0 | 1 | 2} className="card-hover group rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_12px_36px_rgba(31,78,120,0.07)] hover:border-[#1F4E78]/20">
                <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-[#1F4E78] text-white shadow-[0_10px_28px_rgba(31,78,120,0.3)] transition group-hover:scale-110 group-hover:rotate-3">
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-black text-[#1F4E78]">{card.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-gray-500">{card.desc}</p>
                <ul className="mt-5 space-y-2">
                  {card.bullets.map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <span className="grid size-5 place-items-center rounded-full bg-[#2ECC71]/15 text-[#27AE60]">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKET OPPORTUNITY ── */}
      <section className="relative overflow-hidden bg-[#1F4E78] py-24 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" aria-hidden />
        <div className="blob absolute -left-40 -top-20 h-[400px] w-[400px] rounded-full bg-[#2ECC71]/20 blur-[120px]" aria-hidden />
        <div className="blob blob-2 absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#F39C12]/15 blur-[100px]" aria-hidden />
        <div className="shell relative">
          <RevealDiv className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Market Opportunity</p>
            <h2 className="text-4xl font-black md:text-5xl lg:text-[3.5rem]">Why now? The numbers don&apos;t lie.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-white/70">
              Karnataka&apos;s education demand is exploding. Every number below is a potential student walking through your door.
            </p>
          </RevealDiv>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {marketStats.map((s, i) => (
              <RevealDiv key={s.label} delay={i as 0 | 1 | 2} className="card-hover rounded-3xl border border-white/15 bg-white/10 p-7 text-center backdrop-blur-sm hover:bg-white/15">
                <p className="text-5xl font-black text-[#F39C12]">{s.num}</p>
                <p className="mt-3 text-sm font-bold text-white/70">{s.label}</p>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv delay={1} className="mt-10 rounded-3xl border border-white/15 bg-white/8 p-8 backdrop-blur-sm md:p-10">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: "Expected annual revenue / centre", value: "₹15–20L" },
                { label: "Profit margin", value: "55–60%" },
                { label: "Full ROI timeline", value: "12 months" }
              ].map(item => (
                <div key={item.label} className="text-center">
                  <p className="text-4xl font-black text-[#2ECC71]">{item.value}</p>
                  <p className="mt-2 text-sm font-bold text-white/65">{item.label}</p>
                </div>
              ))}
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ── 5 MODULES ── */}
      <section id="modules" className="relative overflow-hidden py-24 md:py-32">
        <div className="shell">
          <RevealDiv className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">The 5-Module Ecosystem</p>
            <h2 className="text-4xl font-black leading-[1.08] text-[#1F4E78] md:text-5xl lg:text-[3.5rem]">Five ways students enrich your centre.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-gray-500">Each module runs independently. Together, they multiply your revenue and create lifelong student journeys.</p>
          </RevealDiv>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            {/* module tabs */}
            <div className="grid gap-3 lg:self-start lg:sticky lg:top-24">
              {modules.map((m, i) => (
                <button key={m.id} type="button" onClick={() => setActiveModule(i)}
                  className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-250 ${activeModule === i ? "tab-active border-transparent" : "border-gray-200 bg-white text-gray-800 shadow-sm hover:border-[#1F4E78]/30 hover:shadow-md"}`}>
                  <span className="text-2xl">{m.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-black">{m.name}</p>
                    <p className={`text-xs font-semibold ${activeModule === i ? "text-white/70" : "text-gray-400"}`}>{m.age}</p>
                  </div>
                  <ChevronRight size={16} className={activeModule === i ? "text-[#F39C12]" : "text-gray-300"} />
                </button>
              ))}
            </div>

            {/* module detail */}
            <div key={mod.id} className="tab-content overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_32px_80px_rgba(31,78,120,0.1)]">
              <div className={`bg-gradient-to-br ${mod.color} p-10 text-white`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-white/70">{mod.age}</p>
                    <h3 className="mt-2 text-4xl font-black">{mod.name}</h3>
                    <p className="mt-1 text-lg font-bold text-white/85">{mod.fee}</p>
                  </div>
                  <span className="text-5xl">{mod.icon}</span>
                </div>
                <p className="mt-6 text-lg font-semibold leading-8 text-white/90">{mod.desc}</p>
              </div>
              <div className="p-8 md:p-10">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-gray-400">Student Outcomes</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {mod.outcomes.map(o => (
                    <div key={o} className="flex items-center gap-2.5 rounded-xl bg-gray-50 p-4">
                      <Check size={16} strokeWidth={3} className="shrink-0 text-[#27AE60]" />
                      <span className="text-sm font-bold text-gray-700">{o}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href={mod.href} className="inline-flex items-center gap-2 rounded-xl bg-[#1F4E78] px-6 py-3 font-black text-white transition hover:bg-[#163959]">
                    Full Module Details <ArrowRight size={16} />
                  </Link>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-[#1F4E78]/20 px-6 py-3 font-black text-[#1F4E78] transition hover:bg-[#1F4E78]/5">
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 26 EXAMS ── */}
      <section className="relative overflow-hidden bg-[#f5f8ff] py-24 md:py-28">
        <div className="shell">
          <RevealDiv className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Competitive Exam Coaching</p>
            <h2 className="text-4xl font-black leading-[1.08] text-[#1F4E78] md:text-5xl">Your guaranteed demand engine.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-gray-500">26 exam tracks across Karnataka and National categories. Students fill seats year-round.</p>
          </RevealDiv>

          <div className="mb-6 flex flex-wrap gap-2">
            {(["karnataka", "national", "education"] as const).map(tab => (
              <button key={tab} onClick={() => setActiveExamTab(tab)} type="button"
                className={`rounded-full px-5 py-2 text-sm font-black transition ${activeExamTab === tab ? "bg-[#1F4E78] text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-[#1F4E78]/30"}`}>
                {tab === "karnataka" ? "Karnataka Exams" : tab === "national" ? "National Exams" : "Education Exams"}
              </button>
            ))}
          </div>

          <div key={activeExamTab} className="tab-content grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {exams[activeExamTab].map(exam => (
              <div key={exam.name} className="card-hover rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:border-[#1F4E78]/20 hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-black text-gray-800">{exam.name}</p>
                    <p className="mt-1 text-xs font-bold text-gray-400">{exam.vacancies} vacancies / year</p>
                  </div>
                  <span className="shrink-0 rounded-lg bg-[#1F4E78]/10 px-2.5 py-1 text-xs font-black text-[#1F4E78]">{exam.fee}</span>
                </div>
              </div>
            ))}
          </div>
          <RevealDiv delay={1} className="mt-8 flex justify-center">
            <Link href="/exam-coaching" className="inline-flex items-center gap-2 rounded-full border-2 border-[#1F4E78] px-7 py-3.5 font-black text-[#1F4E78] transition hover:bg-[#1F4E78] hover:text-white">
              See All 26 Exams <ArrowRight size={16} />
            </Link>
          </RevealDiv>
        </div>
      </section>

      {/* ── FRANCHISE PLANS ── */}
      <section id="plans" className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(31,78,120,0.04)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden />
        <div className="shell relative">
          <RevealDiv className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Franchise Plans</p>
            <h2 className="text-4xl font-black leading-[1.08] text-[#1F4E78] md:text-5xl lg:text-[3.5rem]">Choose your level of ambition.</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg font-semibold text-gray-500">Three franchise models designed for different goals and investment levels.</p>
          </RevealDiv>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <RevealDiv key={plan.name} delay={i as 0 | 1 | 2}>
              <TiltCard
                className={`relative overflow-hidden rounded-3xl border h-full ${plan.highlight ? "border-[#1F4E78] shadow-[0_28px_70px_rgba(31,78,120,0.2)]" : "border-gray-200 bg-white shadow-[0_12px_36px_rgba(31,78,120,0.06)]"}`}>
                {plan.highlight && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F4E78] to-[#163959]" />
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px]" />
                  </>
                )}
                <div className={`relative p-7 ${plan.highlight ? "text-white" : "text-gray-800"}`}>
                  {plan.label && (
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#F39C12] px-3 py-1 text-xs font-black text-white">
                      <Star size={11} fill="currentColor" /> {plan.label}
                    </div>
                  )}
                  <h3 className="text-2xl font-black">{plan.name}</h3>
                  <p className={`mt-2 text-sm font-semibold ${plan.highlight ? "text-white/70" : "text-gray-500"}`}>{plan.ideal}</p>

                  <div className={`my-6 rounded-2xl p-4 ${plan.highlight ? "bg-white/10" : "bg-[#f5f8ff]"}`}>
                    <p className={`text-xs font-black uppercase tracking-[0.2em] ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>Projected Revenue</p>
                    <p className={`mt-2 text-2xl font-black ${plan.highlight ? "text-[#F39C12]" : "text-[#1F4E78]"}`}>{plan.revenue}</p>
                    <p className={`mt-0.5 text-sm font-bold ${plan.highlight ? "text-white/70" : "text-gray-500"}`}>{plan.students}</p>
                  </div>

                  <ul className="space-y-2.5">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-sm font-semibold">
                        <span className={`grid size-5 shrink-0 place-items-center rounded-full ${plan.highlight ? "bg-[#F39C12] text-white" : "bg-[#2ECC71]/20 text-[#27AE60]"}`}>
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact"
                    className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-black transition ${plan.highlight ? "glow-pulse bg-[#F39C12] text-white hover:bg-[#D68910]" : "border border-[#1F4E78]/20 text-[#1F4E78] hover:bg-[#1F4E78] hover:text-white"}`}>
                    Get Details <ArrowRight size={16} />
                  </a>
                </div>
              </TiltCard>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDING PARTNER ── */}
      <section id="stories" className="relative overflow-hidden bg-[#f5f8ff] py-24 md:py-28">
        <div className="blob absolute -right-32 top-10 h-[400px] w-[400px] rounded-full bg-[#2ECC71]/10 blur-[120px]" aria-hidden />
        <div className="shell relative">
          <RevealDiv className="mb-4 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F39C12]/30 bg-[#F39C12]/10 px-4 py-2 text-sm font-black text-[#F39C12]">
              🚀 Limited Founding Partner Slots — Karnataka
            </div>
            <h2 className="text-4xl font-black leading-[1.08] text-[#1F4E78] md:text-5xl lg:text-[3.5rem]">
              Be among the first.<br />Own the advantage.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-gray-500">
              We are in active expansion across Karnataka. Early partners get benefits that won&apos;t be available once we scale. Here&apos;s what founding partners receive that later franchisees won&apos;t.
            </p>
          </RevealDiv>

          {/* perks grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {foundingPerks.map((perk, i) => (
              <RevealDiv key={perk.title} delay={i % 3 as 0 | 1 | 2}
                className="card-hover group rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_12px_36px_rgba(31,78,120,0.07)] hover:border-[#1F4E78]/20">
                <div className="mb-4 text-3xl float float-delay-1">{perk.icon}</div>
                <h3 className="text-lg font-black text-[#1F4E78]">{perk.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-gray-500">{perk.desc}</p>
              </RevealDiv>
            ))}
          </div>

          {/* journey timeline */}
          <RevealDiv className="mt-16">
            <p className="mb-8 text-center text-xs font-black uppercase tracking-[0.28em] text-gray-400">Our Journey</p>
            <div className="relative">
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#1F4E78]/20 via-[#2ECC71]/40 to-transparent md:block" aria-hidden />
              <div className="grid gap-6 md:gap-0">
                {milestones.map((m, i) => (
                  <div key={m.year} className={`relative flex items-start gap-6 md:items-center ${i % 2 === 0 ? "md:flex-row md:pr-[52%]" : "md:flex-row-reverse md:pl-[52%]"}`}>
                    <div className={`hidden md:flex shrink-0 absolute left-1/2 -translate-x-1/2 size-10 items-center justify-center rounded-full border-4 border-white bg-[#1F4E78] text-xs font-black text-white shadow-[0_8px_24px_rgba(31,78,120,0.3)]`}>
                      {m.year.slice(2)}
                    </div>
                    <div className={`w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="flex items-center gap-2 md:hidden">
                        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#1F4E78] text-xs font-black text-white">{m.year.slice(2)}</span>
                        <p className="text-xs font-black text-gray-400">{m.year}</p>
                      </div>
                      <p className="hidden text-xs font-black text-gray-400 md:block">{m.year}</p>
                      <p className="mt-1 text-base font-black text-[#1F4E78]">{m.label}</p>
                      <p className="mt-1 text-sm font-semibold text-gray-500">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealDiv>

          {/* CTA strip */}
          <RevealDiv delay={1} className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1F4E78] to-[#163959] p-8 text-white md:p-10">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2ECC71]">Founding Partner Slots</p>
                <h3 className="mt-2 text-2xl font-black md:text-3xl">Slots are filling fast. Secure your area now.</h3>
                <p className="mt-3 text-base font-semibold text-white/70">Once a area is taken, it&apos;s closed. Schedule a call to check availability in your area.</p>
              </div>
              <a href="#contact" className="glow-pulse inline-flex shrink-0 items-center gap-2 rounded-2xl bg-[#F39C12] px-7 py-4 font-black text-white transition hover:bg-[#D68910]">
                Check My City <ArrowRight size={18} />
              </a>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ── FRANCHISE BENEFITS ── */}
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="shell">
          <RevealDiv className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Franchise Support</p>
            <h2 className="text-4xl font-black leading-[1.08] text-[#1F4E78] md:text-5xl">We&apos;re with you every step.</h2>
          </RevealDiv>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BookOpen, title: "Complete Curriculum", desc: "Age-appropriate, CBSE-aligned curriculum for all levels. Updated regularly by our academic team." },
              { icon: LayoutGrid, title: "Technology & Systems", desc: "Centre management software, parent app, attendance tracking, and fee collection tools." },
              { icon: Users, title: "Training & Support", desc: "Staff onboarding, teacher training, operational SOPs, and escalation support from day one." },
              { icon: Zap, title: "Marketing & Brand", desc: "Brand assets, local campaign playbooks, social media templates, and admissions scripting." },
              { icon: GraduationCap, title: "Placement Support", desc: "Skill Academy and Exam Coaching students get job application and interview preparation support." },
              { icon: TrendingUp, title: "Scalability Roadmap", desc: "Quarterly reviews, growth planning, and a clear path to add modules and open new centres." }
            ].map((b, i) => (
              <RevealDiv key={b.title} delay={i % 3 as 0 | 1 | 2} className="card-hover rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-[#1F4E78] to-[#2ECC71] text-white">
                  <b.icon size={22} />
                </div>
                <h3 className="text-lg font-black text-gray-800">{b.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-gray-500">{b.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="relative overflow-hidden bg-[#f5f8ff] py-24 md:py-28">
        <div className="shell">
          <RevealDiv className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">FAQ</p>
            <h2 className="text-4xl font-black leading-[1.08] text-[#1F4E78] md:text-5xl">Questions answered.</h2>
          </RevealDiv>
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <RevealDiv key={faq.q}>
                <div className={`overflow-hidden rounded-2xl border bg-white transition-all ${openFaq === i ? "border-[#1F4E78]/30 shadow-[0_16px_48px_rgba(31,78,120,0.1)]" : "border-gray-100 shadow-sm"}`}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left">
                    <span className="text-base font-black text-gray-800">{faq.q}</span>
                    <ChevronDown size={20} className={`shrink-0 text-[#1F4E78] transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <p className="tab-content border-t border-gray-100 px-6 pb-6 pt-4 text-sm font-semibold leading-7 text-gray-500">{faq.a}</p>
                  )}
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(31,78,120,0.05)_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden />
        <div className="shell relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <RevealDiv dir="left">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Contact</p>
              <h2 className="text-4xl font-black leading-[1.08] text-[#1F4E78] md:text-5xl lg:text-[3.2rem]">
                Ready to build your education business?
              </h2>
              <p className="mt-5 text-lg font-semibold leading-8 text-gray-500">
                Schedule a free 30-minute consultation with New Vedha leadership. We&apos;ll walk you through the opportunity, answer your questions, and help you decide if it&apos;s the right fit.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { icon: Phone, label: "Nagabushan N (CEO)", val: "+91 8310325960", href: "tel:+918310325960" },
                  { icon: Phone, label: "Narasimha Murthy (CMO)", val: "+91 9743595827", href: "tel:+919743595827" },
                  { icon: Mail, label: "Email", val: "sandesh@newvedha.com", href: "mailto:sandesh@newvedha.com" },
                  { icon: MapPin, label: "Head Office", val: "No 176, 9th Cross, Annapurneshwari Nagar, near Nagarbhavi BDA Complex, Bangalore 79", href: undefined }
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#1F4E78] text-white">
                      <item.icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-gray-400">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-0.5 block text-base font-bold text-gray-700 hover:text-[#1F4E78]">{item.val}</a>
                      ) : (
                        <p className="mt-0.5 text-base font-bold text-gray-700">{item.val}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* modules at a glance */}
              <div className="mt-10 rounded-3xl border border-[#1F4E78]/15 bg-[#f5f8ff] p-6">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-gray-400">Available Modules</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {modules.map(m => (
                    <div key={m.id} className="flex items-center gap-2.5 rounded-xl bg-white p-3 shadow-sm">
                      <span className="text-lg">{m.icon}</span>
                      <div>
                        <p className="text-sm font-black text-gray-700">{m.name}</p>
                        <p className="text-xs font-semibold text-gray-400">{m.fee}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealDiv>

            {/* lead form */}
            <RevealDiv delay={1} dir="right">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_24px_70px_rgba(31,78,120,0.1)] md:p-10">
                {formState === "success" ? (
                  <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                    <div className="mb-6 grid size-20 place-items-center rounded-full bg-[#2ECC71]/15 text-[#27AE60]">
                      <Check size={36} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-800">Thank you, {formData.name}!</h3>
                    <p className="mt-4 text-base font-semibold leading-7 text-gray-500">
                      We&apos;ve received your enquiry. A member of the New Vedha team will contact you within 24 hours to schedule your consultation.
                    </p>
                    <button onClick={() => setFormState("idle")} className="mt-8 rounded-xl border border-gray-200 px-6 py-3 font-black text-gray-600 hover:bg-gray-50">
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-black text-gray-800">Schedule Free Consultation</h3>
                    <p className="mt-2 text-sm font-semibold text-gray-400">30-minute call · No obligation · Limited slots</p>
                    <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
                      <div>
                        <label className="label" htmlFor="name">Full Name *</label>
                        <input id="name" className={`field ${errors.name ? "field-error" : ""}`} placeholder="Your full name"
                          value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                        {errors.name && <p className="error-msg">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="label" htmlFor="phone">Phone Number *</label>
                        <input id="phone" type="tel" className={`field ${errors.phone ? "field-error" : ""}`} placeholder="10-digit mobile number"
                          value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
                        {errors.phone && <p className="error-msg">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="label" htmlFor="city">City *</label>
                        <input id="city" className={`field ${errors.city ? "field-error" : ""}`} placeholder="Your city"
                          value={formData.city} onChange={e => setFormData(p => ({ ...p, city: e.target.value }))} />
                        {errors.city && <p className="error-msg">{errors.city}</p>}
                      </div>
                      <div>
                        <label className="label" htmlFor="plan">Interested Franchise Plan</label>
                        <select id="plan" className="field" value={formData.plan} onChange={e => setFormData(p => ({ ...p, plan: e.target.value }))}>
                          <option value="">Select a plan</option>
                          <option>Basic</option>
                          <option>Standard</option>
                          <option>Premium</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label className="label" htmlFor="message">Message (optional)</label>
                        <textarea id="message" className="field min-h-[90px] resize-y" placeholder="Any specific questions or requirements?"
                          value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
                      </div>
                      <button type="submit" className="w-full rounded-xl bg-[#1F4E78] py-4 font-black text-white shadow-[0_14px_40px_rgba(31,78,120,0.3)] transition hover:-translate-y-0.5 hover:bg-[#163959]">
                        Schedule My Consultation →
                      </button>
                      <p className="text-center text-xs font-semibold text-gray-400">
                        By submitting, you agree to be contacted by New Vedha.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-200 bg-[#0f2744] py-12 text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F39C12]/50 to-transparent" />
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-[1fr_auto_auto_auto]">
            <div>
              <div className="flex items-center gap-3">
                <Image src="/new-vedha-logo.png" alt="New Vedha" width={44} height={44} className="rounded-full bg-white p-1" />
                <div>
                  <p className="font-black">New Vedha</p>
                  <p className="text-xs font-bold text-white/50">Education Franchise</p>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-sm font-semibold leading-7 text-white/55">
                Building ₹2Cr+ education businesses through a proven 5-module franchise system.
              </p>
              <div className="mt-5 flex gap-3">
                <a href="tel:+918310325960" className="grid size-10 place-items-center rounded-xl bg-white/10 text-white/70 hover:bg-[#F39C12] hover:text-white transition"><Phone size={16} /></a>
                <a href="mailto:sandesh@newvedha.com" className="grid size-10 place-items-center rounded-xl bg-white/10 text-white/70 hover:bg-[#F39C12] hover:text-white transition"><Mail size={16} /></a>
                <a href="#contact" className="grid size-10 place-items-center rounded-xl bg-white/10 text-white/70 hover:bg-[#F39C12] hover:text-white transition"><Briefcase size={16} /></a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-white/40">Modules</p>
              <ul className="space-y-2.5">
                {modules.map(m => (
                  <li key={m.id}><Link href={m.href} className="text-sm font-semibold text-white/60 hover:text-white transition">{m.name}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-white/40">Franchise</p>
              <ul className="space-y-2.5">
                {[["#why", "Why New Vedha"], ["#plans", "Franchise Plans"], ["#stories", "Success Stories"], ["#faq", "FAQ"], ["#contact", "Contact"]].map(([href, label]) => (
                  <li key={href}><a href={href} className="text-sm font-semibold text-white/60 hover:text-white transition">{label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-white/40">Location</p>
              <div className="flex items-start gap-2.5 text-sm font-semibold text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#F39C12]" />
                <span>No 176, 9th Cross, Annapurneshwari Nagar, Bangalore 79</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white/60">
                <Building2 size={16} className="shrink-0 text-[#F39C12]" />
                <span>Franchise across Karnataka</span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-semibold text-white/40">© 2026 New Vedha. All rights reserved.</p>
            <p className="text-sm font-semibold text-white/30">
              Website by{" "}
              <a href="https://medhalabs.in/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white underline underline-offset-4">Medhālabs</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
