"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Award, Check, ChevronRight, Briefcase, TrendingUp } from "lucide-react";

const categories = [
  {
    name: "IT & Programming",
    icon: "💻",
    courses: ["Python Programming", "Java Development", "React & Frontend", "SQL & Database", "AI & Machine Learning", "Web Development"],
    demand: 5,
    fee: "₹45,000 – ₹70,000"
  },
  {
    name: "Robotics & Electronics",
    icon: "🤖",
    courses: ["Arduino Programming", "Raspberry Pi", "Embedded Systems", "PCB Design", "IoT Projects", "Drone Technology"],
    demand: 4,
    fee: "₹50,000 – ₹75,000"
  },
  {
    name: "Design & Creative",
    icon: "🎨",
    courses: ["AutoCAD / CAD Design", "Graphic Design", "UI/UX Design", "Video Editing", "Photography", "3D Modelling"],
    demand: 4,
    fee: "₹40,000 – ₹65,000"
  },
  {
    name: "Business & Management",
    icon: "📊",
    courses: ["MS Excel Advanced", "Tally ERP", "Business Analytics", "Digital Marketing", "HR Management", "Accounting"],
    demand: 5,
    fee: "₹38,000 – ₹60,000"
  },
  {
    name: "Communication",
    icon: "🗣️",
    courses: ["Advanced English", "Public Speaking", "Personality Development", "Business Communication", "Debate & Presentation", "Leadership"],
    demand: 4,
    fee: "₹35,000 – ₹55,000"
  },
  {
    name: "Languages",
    icon: "🌍",
    courses: ["German Language", "French Language", "Spoken Hindi", "Japanese Basics", "IELTS Preparation", "English Grammar"],
    demand: 3,
    fee: "₹38,000 – ₹65,000"
  },
  {
    name: "Self Employment",
    icon: "🚀",
    courses: ["Entrepreneurship Skills", "Small Business Setup", "E-Commerce Business", "Freelancing Skills", "Franchise Management", "Startup Fundamentals"],
    demand: 4,
    fee: "₹40,000 – ₹60,000"
  },
  {
    name: "Healthcare & Wellness",
    icon: "🏥",
    courses: ["Yoga Instructor", "Nutrition Basics", "First Aid & CPR", "Medical Transcription", "Hospital Management", "Fitness Training"],
    demand: 3,
    fee: "₹40,000 – ₹68,000"
  },
  {
    name: "Education & Teaching",
    icon: "📖",
    courses: ["Early Childhood Education", "Special Needs Education", "Online Teaching Skills", "Montessori Methods", "Curriculum Design", "Classroom Management"],
    demand: 4,
    fee: "₹42,000 – ₹65,000"
  },
  {
    name: "Construction & Engineering",
    icon: "🏗️",
    courses: ["Civil Site Supervision", "AutoCAD Civil", "Quantity Surveying", "Interior Design Basics", "Safety Management", "Project Planning"],
    demand: 3,
    fee: "₹45,000 – ₹70,000"
  },
  {
    name: "Agriculture & Rural",
    icon: "🌾",
    courses: ["Organic Farming", "Agri-Business", "Poultry & Livestock", "Food Processing", "Rural Entrepreneurship", "Soil & Water Management"],
    demand: 3,
    fee: "₹38,000 – ₹58,000"
  },
  {
    name: "Media & Content",
    icon: "🎬",
    courses: ["Content Writing", "Social Media Marketing", "Blogging & Vlogging", "News Anchoring", "Script Writing", "Podcast Production"],
    demand: 4,
    fee: "₹38,000 – ₹60,000"
  }
];

const careerSteps = [
  { icon: "📋", title: "Job Application Support", desc: "We help you craft your resume and apply to the right opportunities from our employer network." },
  { icon: "💬", title: "Interview Preparation", desc: "Mock interviews, feedback, and personal coaching so you walk in ready and confident." },
  { icon: "🤝", title: "Consultancy Referrals", desc: "We connect and recommend you through our trusted placement consultancy partners." },
  { icon: "🎯", title: "Career Guidance", desc: "One-to-one sessions to map your skills to the right career path and company type." }
];

const approach = [
  { icon: "🛠️", title: "Project-Based Learning", desc: "Every course ends with a real-world project you can add to your portfolio." },
  { icon: "📜", title: "Exam-Based Certification", desc: "Certificates awarded based on structured assessments, not just attendance." },
  { icon: "🏭", title: "Industry-Aligned Curriculum", desc: "Updated every quarter to match what employers actually look for right now." }
];

export default function SkillAcademyPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [form, setForm] = useState({ name: "", phone: "", course: "", city: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const filteredCategories = categories.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.courses.some(co => co.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\d{10}$/.test(form.phone.trim())) e.phone = "Enter valid 10-digit number";
    if (!form.city.trim()) e.city = "City is required";
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
        subject: "Skill Academy Enrollment Enquiry – New Vedha",
        from_name: "New Vedha Website",
        ...form,
      }),
    });
    setFormState("success");
  };

  const cat = categories[activeCategory];

  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#1a1a2e]">
      <header className="sticky top-0 z-50 border-b border-[#1F4E78]/10 bg-white/95 backdrop-blur-xl">
        <div className="shell flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/new-vedha-logo.png" alt="New Vedha" width={40} height={40} className="rounded-full bg-white p-0.5 ring-2 ring-[#1F4E78]/20" />
            <span className="font-black text-[#1F4E78]">NEW VEDHA</span><span className="text-[10px] font-bold tracking-[0.12em] text-[#2ECC71]">Pre School | Skill Academy</span>
          </Link>
          <nav className="hidden items-center gap-2 text-sm md:flex">
            {[["Play Home", "/play-home"], ["Preschool", "/preschool"], ["Tutorials", "/tutorials"], ["Skill Academy", "/skill-academy"], ["Exam Coaching", "/exam-coaching"]].map(([l, h]) => (
              <Link key={h} href={h} className={`rounded-full px-3 py-1.5 font-bold transition ${h === "/skill-academy" ? "bg-[#1F4E78] text-white" : "text-gray-500 hover:text-[#1F4E78]"}`}>{l}</Link>
            ))}
          </nav>
          <Link href="/" className="text-sm font-black text-[#1F4E78] hover:underline">← Back to Home</Link>
        </div>
      </header>

      <div className="shell py-3 text-xs font-semibold text-gray-400">
        <Link href="/" className="hover:text-[#1F4E78]">Home</Link>
        <ChevronRight size={12} className="mx-1 inline" />
        <span className="text-[#1F4E78]">Skill Academy</span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 py-24 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-black backdrop-blur-sm">💡 84 Courses · 12 Categories</div>
            <h1 className="text-5xl font-black leading-[1.05] md:text-6xl lg:text-[4.5rem]">Learn industry skills. Launch your career.</h1>
            <p className="mt-6 text-xl font-semibold leading-8 text-white/90">Project-based learning, exam-backed certification, and job placement support. We teach what you need. We help you get hired.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#courses" className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 font-black text-orange-600 shadow-xl transition hover:-translate-y-1">Browse Courses <ArrowRight size={17} /></a>
              <a href="#enroll" className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/20 px-7 py-4 font-black backdrop-blur-sm transition hover:bg-white/30">Enroll Now</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[{ n: "84+", l: "Courses" }, { n: "12", l: "Categories" }, { n: "₹38K–80K", l: "Fee range" }].map(s => (
                <div key={s.l} className="rounded-2xl bg-white/20 p-4 text-center backdrop-blur-sm">
                  <p className="text-xl font-black">{s.n}</p>
                  <p className="text-xs font-bold text-white/75">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.25)]">
              <Image src="/images/classroom-learning.jpg" alt="Skill Academy" width={600} height={480} className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-20 md:py-24">
        <div className="shell">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Learning Approach</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">How we make skills stick.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {approach.map(a => (
              <div key={a.title} className="card-hover rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-7 text-center shadow-sm">
                <span className="text-4xl">{a.icon}</span>
                <h3 className="mt-4 text-lg font-black text-gray-800">{a.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-gray-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE BROWSER */}
      <section id="courses" className="bg-[#f5f8ff] py-20 md:py-24">
        <div className="shell">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">84 Courses</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">Find your skill.</h2>
            <div className="mx-auto mt-6 max-w-md">
              <input type="text" placeholder="Search courses or categories..."
                className="field shadow-sm" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <div className="grid gap-2 lg:self-start lg:sticky lg:top-24">
              {(searchQuery ? filteredCategories : categories).slice(0, 12).map((c, i) => {
                const realIndex = categories.findIndex(x => x.name === c.name);
                return (
                  <button key={c.name} onClick={() => { setActiveCategory(realIndex); setSearchQuery(""); }} type="button"
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${activeCategory === realIndex && !searchQuery ? "tab-active border-transparent" : "border-gray-200 bg-white shadow-sm hover:border-orange-300"}`}>
                    <span className="text-lg">{c.icon}</span>
                    <span className="flex-1 font-bold">{c.name}</span>
                    <span className={`text-xs font-black ${activeCategory === realIndex && !searchQuery ? "text-[#F39C12]" : "text-gray-400"}`}>{c.courses.length}</span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-500">{cat.courses.length} Courses</p>
                  <h3 className="mt-1 text-2xl font-black text-gray-800">{cat.icon} {cat.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Fee range</p>
                  <p className="text-lg font-black text-[#1F4E78]">{cat.fee}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1.5">
                <span className="text-xs font-black text-gray-400">Demand:</span>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className={`h-2 w-6 rounded-full ${i < cat.demand ? "bg-[#27AE60]" : "bg-gray-100"}`} />
                ))}
              </div>

              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {cat.courses.map(course => (
                  <div key={course} className="flex items-center gap-2.5 rounded-xl bg-gray-50 p-3">
                    <Award size={14} className="shrink-0 text-orange-400" />
                    <span className="text-sm font-bold text-gray-700">{course}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#enroll" className="inline-flex items-center gap-2 rounded-xl bg-[#1F4E78] px-6 py-3 font-black text-white transition hover:bg-[#163959]">
                  Enroll in {cat.name} <ArrowRight size={16} />
                </a>
                <a href="#enroll" className="inline-flex items-center gap-2 rounded-xl border border-[#1F4E78]/20 px-6 py-3 font-black text-[#1F4E78] transition hover:bg-[#1F4E78]/5">
                  Get Course Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER SUPPORT */}
      <section className="py-20 md:py-24">
        <div className="shell">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Career Support</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">From classroom to career.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-semibold text-gray-500">We don&apos;t stop at certification. We stay with you until you&apos;re placed.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {careerSteps.map((s, i) => (
              <div key={s.title} className="card-hover rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-orange-50 text-xl font-black text-orange-600">{i + 1}</span>
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <h3 className="font-black text-gray-800">{s.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#1F4E78] to-[#163959] p-8 text-center text-white md:p-10">
            <Briefcase size={40} className="mx-auto text-[#F39C12]" />
            <p className="mt-5 text-2xl font-black md:text-3xl">Learn · Build · Get Certified · Get Hired</p>
            <p className="mx-auto mt-4 max-w-lg text-base font-semibold text-white/75">Ask us about any skill you want to learn. Our faculty covers far more than what&apos;s listed — we match you with the right mentor.</p>
          </div>
        </div>
      </section>

      {/* ENROLL */}
      <section id="enroll" className="bg-gradient-to-br from-orange-500 to-amber-500 py-20 text-white">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">Skills today. Success tomorrow.</h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-white/85">Tell us what you want to learn. We&apos;ll match you to the right course, batch, and mentor.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Project-Based", "Exam-Certified", "Job Placement", "Flexible Batches"].map(b => (
                <span key={b} className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur-sm">
                  <Check size={13} strokeWidth={3} /> {b}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/15 p-8 backdrop-blur-xl">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 grid size-16 place-items-center rounded-full bg-white/20 text-white"><Check size={28} strokeWidth={2.5} /></div>
                <h3 className="text-2xl font-black">Enquiry received!</h3>
                <p className="mt-3 text-base font-semibold text-white/80">We&apos;ll call you within 24 hours with course details.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black">Course Enrollment Enquiry</h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                  {[
                    { id: "sa-name", label: "Full Name *", key: "name", type: "text", ph: "Your name" },
                    { id: "sa-phone", label: "Phone *", key: "phone", type: "tel", ph: "10-digit mobile" },
                    { id: "sa-city", label: "City *", key: "city", type: "text", ph: "Your city" }
                  ].map(f => (
                    <div key={f.id}>
                      <label className="mb-1.5 block text-sm font-bold text-white/80" htmlFor={f.id}>{f.label}</label>
                      <input id={f.id} type={f.type} className="w-full rounded-xl border border-white/25 bg-white/20 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white focus:ring-2 focus:ring-white/20" placeholder={f.ph}
                        value={form[f.key as keyof typeof form]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} />
                      {errors[f.key] && <p className="mt-1 text-xs text-red-200">{errors[f.key]}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-white/80" htmlFor="sa-course">Course / Category Interested</label>
                    <select id="sa-course" className="w-full rounded-xl border border-white/25 bg-white/20 px-4 py-3 text-white outline-none focus:border-white"
                      value={form.course} onChange={e => setForm(p => ({ ...p, course: e.target.value }))}>
                      <option value="" className="text-gray-800">Select category</option>
                      {categories.map(c => <option key={c.name} className="text-gray-800">{c.name}</option>)}
                      <option className="text-gray-800">Other (I&apos;ll describe)</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full rounded-xl bg-white py-4 font-black text-orange-600 transition hover:bg-orange-50">Send Enquiry →</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="shell">
          <h3 className="mb-6 text-xl font-black text-[#1F4E78]">Explore other modules</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["🧸", "Play Home", "/play-home", "bg-emerald-50 border-emerald-200 text-emerald-700"], ["📚", "Preschool", "/preschool", "bg-blue-50 border-blue-200 text-blue-700"], ["🎯", "Tutorials", "/tutorials", "bg-violet-50 border-violet-200 text-violet-700"], ["🏛️", "Exam Coaching", "/exam-coaching", "bg-rose-50 border-rose-200 text-rose-700"]].map(([icon, name, href, cls]) => (
              <Link key={href} href={href} className={`card-hover flex items-center gap-3 rounded-2xl border p-4 font-bold ${cls}`}>
                <span className="text-2xl">{icon}</span><span>{name}</span><ArrowRight size={15} className="ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-[#0f2744] py-8 text-white">
        <div className="shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/new-vedha-logo.png" alt="New Vedha" width={36} height={36} className="rounded-full bg-white p-0.5" />
            <p className="font-black">New Vedha · Skill Academy</p>
          </div>
          <p className="text-sm font-semibold text-white/40">© 2026 New Vedha.</p>
          <Link href="/" className="text-sm font-bold text-white/60 hover:text-white">← Back to Home</Link>
        </div>
      </footer>
    </main>
  );
}
