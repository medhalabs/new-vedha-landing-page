"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, ChevronRight, TrendingUp } from "lucide-react";

const classTabs = [
  {
    label: "Class 7 & 8",
    subjects: ["Mathematics", "Science", "Social Studies", "English", "Kannada"],
    focus: "Building foundations and eliminating knowledge gaps before the crucial Classes 9 and 10.",
    batchSize: "12–16 students",
    fees: "₹1,500 – ₹2,500 / month"
  },
  {
    label: "Class 9 & 10",
    subjects: ["Mathematics", "Science (Physics, Chemistry, Biology)", "Social Science", "English", "Kannada", "Optional subjects"],
    focus: "Board exam preparation with chapter-wise tests, doubt-clearing, and revision strategy.",
    batchSize: "10–14 students",
    fees: "₹2,500 – ₹4,000 / month"
  },
  {
    label: "PUC (11 & 12)",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology", "Commerce stream", "Arts stream"],
    focus: "CET / NEET / JEE foundation alongside board exam preparation.",
    batchSize: "8–12 students",
    fees: "₹3,500 – ₹5,000 / month"
  }
];

const approach = [
  { icon: "📋", title: "Diagnostic Assessment", desc: "Every student begins with a diagnostic test to identify gaps. Teaching starts from where the student actually is, not where they should be." },
  { icon: "👥", title: "Small Batch Sizes", desc: "Maximum 16 students per batch ensures every child gets personal attention and doubt resolution, not just lectures." },
  { icon: "📅", title: "Weekly Tests", desc: "Chapter-wise tests every week build exam habit, track retention, and motivate consistent effort." },
  { icon: "📊", title: "Progress Reports", desc: "Monthly parent meetings with detailed subject-wise performance data. Parents always know where their child stands." },
  { icon: "📚", title: "Study Materials", desc: "Curated workbooks, past question papers, and revision notes — all included in the fee." },
  { icon: "🎯", title: "Board-Focused Revision", desc: "A structured 60-day board exam revision programme covering syllabus completion, mock tests, and answering techniques." }
];

const results = [
  { student: "Akash M.", class: "Class 10, SSLC 2025", score: "94.5%", improvement: "+18% vs midterms" },
  { student: "Kavya R.", class: "PUC Science 2025", score: "573/600", improvement: "CET Rank: 2,840" },
  { student: "Suresh B.", class: "Class 10, SSLC 2025", score: "89.2%", improvement: "Failed midterms → Distinction" },
  { student: "Pooja N.", class: "PUC Commerce 2025", score: "91.8%", improvement: "Admitted to top commerce college" }
];

const pricing = [
  { tier: "Tier 1", label: "Bangalore, Mysore", fee7: "₹2,000 – ₹2,500", fee10: "₹3,000 – ₹4,000", feePUC: "₹4,000 – ₹5,000" },
  { tier: "Tier 2", label: "Hubli, Mangalore", fee7: "₹1,700 – ₹2,200", fee10: "₹2,500 – ₹3,500", feePUC: "₹3,500 – ₹4,500" },
  { tier: "Tier 3", label: "District towns", fee7: "₹1,500 – ₹2,000", fee10: "₹2,200 – ₹3,200", feePUC: "₹3,000 – ₹4,000" }
];

export default function TutorialsPage() {
  const [activeClass, setActiveClass] = useState(0);
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [form, setForm] = useState({ name: "", phone: "", studentClass: "", subjects: "", city: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

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
        subject: "Tutorials Enrollment Enquiry – New Vedha",
        from_name: "New Vedha Website",
        ...form,
      }),
    });
    setFormState("success");
  };

  const cls = classTabs[activeClass];

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
              <Link key={h} href={h} className={`rounded-full px-3 py-1.5 font-bold transition ${h === "/tutorials" ? "bg-[#1F4E78] text-white" : "text-gray-500 hover:text-[#1F4E78]"}`}>{l}</Link>
            ))}
          </nav>
          <Link href="/" className="text-sm font-black text-[#1F4E78] hover:underline">← Back to Home</Link>
        </div>
      </header>

      <div className="shell py-3 text-xs font-semibold text-gray-400">
        <Link href="/" className="hover:text-[#1F4E78]">Home</Link>
        <ChevronRight size={12} className="mx-1 inline" />
        <span className="text-[#1F4E78]">Tutorials</span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 to-purple-800 py-24 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-black backdrop-blur-sm">🎯 Classes 7 – PUC</div>
            <h1 className="text-5xl font-black leading-[1.05] md:text-6xl lg:text-[4.5rem]">Academic excellence through personalised support.</h1>
            <p className="mt-6 text-xl font-semibold leading-8 text-white/85">Small batches, diagnostic-first teaching, weekly tests, and board-focused revision. We close the gap between school marks and actual potential.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#enroll" className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 font-black text-violet-700 shadow-xl transition hover:-translate-y-1">Enroll Now <ArrowRight size={17} /></a>
              <a href="#approach" className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/15 px-7 py-4 font-black backdrop-blur-sm transition hover:bg-white/25">Our Approach</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Max 16 students / batch", "Weekly chapter tests", "Monthly parent reports", "Board revision programme"].map(b => (
                <div key={b} className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-bold backdrop-blur-sm">
                  <Check size={13} strokeWidth={3} /> {b}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.3)]">
              <Image src="/images/classroom-learning.jpg" alt="Students in tutorials" width={600} height={480} className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CLASS EXPLORER */}
      <section className="py-20 md:py-24">
        <div className="shell">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Classes</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">Tailored to every stage.</h2>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {classTabs.map((t, i) => (
              <button key={t.label} onClick={() => setActiveClass(i)} type="button"
                className={`rounded-full px-5 py-2.5 text-sm font-black transition ${activeClass === i ? "bg-[#1F4E78] text-white shadow-md" : "border border-gray-200 bg-white text-gray-600 hover:border-violet-300"}`}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-purple-50 p-8">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-violet-500">Subjects Covered</p>
            <div className="flex flex-wrap gap-2">
              {cls.subjects.map(s => (
                <span key={s} className="rounded-full bg-white px-4 py-2 text-sm font-black text-violet-700 shadow-sm">{s}</span>
              ))}
            </div>
            <p className="mt-6 font-semibold text-gray-600">{cls.focus}</p>
            <div className="mt-6 flex flex-wrap gap-8">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Batch Size</p>
                <p className="mt-1 text-lg font-black text-[#1F4E78]">{cls.batchSize}</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Monthly Fees</p>
                <p className="mt-1 text-lg font-black text-[#1F4E78]">{cls.fees}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="bg-[#f5f8ff] py-20 md:py-24">
        <div className="shell">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Our Approach</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">Why students improve at New Vedha.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map(a => (
              <div key={a.title} className="card-hover rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
                <span className="text-3xl">{a.icon}</span>
                <h3 className="mt-3 text-lg font-black text-gray-800">{a.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-gray-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 md:py-24">
        <div className="shell">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Student Results</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">The scores speak.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {results.map(r => (
              <div key={r.student} className="card-hover rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-violet-50 text-violet-600"><TrendingUp size={22} /></div>
                <p className="text-2xl font-black text-[#1F4E78]">{r.score}</p>
                <p className="mt-1 text-sm font-black text-[#27AE60]">{r.improvement}</p>
                <p className="mt-4 font-bold text-gray-700">{r.student}</p>
                <p className="text-xs font-semibold text-gray-400">{r.class}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="bg-[#f5f8ff] py-20">
        <div className="shell">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Monthly Fees</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">By class and location.</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1F4E78] text-white text-sm font-black">
                  <th className="p-4 text-left">Location Tier</th>
                  <th className="p-4 text-center">Classes 7–8</th>
                  <th className="p-4 text-center">Classes 9–10</th>
                  <th className="p-4 text-center">PUC</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((p, i) => (
                  <tr key={p.tier} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4">
                      <p className="font-black text-gray-700">{p.tier}</p>
                      <p className="text-xs font-semibold text-gray-400">{p.label}</p>
                    </td>
                    <td className="p-4 text-center text-sm font-bold text-gray-700">{p.fee7}</td>
                    <td className="p-4 text-center text-sm font-bold text-gray-700">{p.fee10}</td>
                    <td className="p-4 text-center text-sm font-bold text-gray-700">{p.feePUC}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm font-semibold text-gray-400">All fees include study materials, workbooks, and test papers.</p>
        </div>
      </section>

      {/* ENROLL */}
      <section id="enroll" className="bg-gradient-to-br from-[#1F4E78] to-[#163959] py-20 text-white">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">Stop guessing. Start improving.</h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-white/75">Enroll your child in a diagnostic-first tutorial programme that actually moves the needle.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 grid size-16 place-items-center rounded-full bg-[#2ECC71]/20 text-[#2ECC71]"><Check size={28} strokeWidth={2.5} /></div>
                <h3 className="text-2xl font-black">Enquiry received!</h3>
                <p className="mt-3 text-base font-semibold text-white/75">We&apos;ll call you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black">Student Enrollment Enquiry</h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                  {[
                    { id: "tu-name", label: "Parent / Guardian Name *", key: "name", type: "text", ph: "Full name" },
                    { id: "tu-phone", label: "Phone *", key: "phone", type: "tel", ph: "10-digit mobile" },
                    { id: "tu-city", label: "City *", key: "city", type: "text", ph: "Your city" }
                  ].map(f => (
                    <div key={f.id}>
                      <label className="mb-1.5 block text-sm font-bold text-white/70" htmlFor={f.id}>{f.label}</label>
                      <input id={f.id} type={f.type} className="w-full rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#F39C12] focus:ring-2 focus:ring-[#F39C12]/20" placeholder={f.ph}
                        value={form[f.key as keyof typeof form]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} />
                      {errors[f.key] && <p className="mt-1 text-xs text-red-300">{errors[f.key]}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-white/70" htmlFor="tu-class">Student&apos;s Class</label>
                    <select id="tu-class" className="w-full rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-white outline-none focus:border-[#F39C12]"
                      value={form.studentClass} onChange={e => setForm(p => ({ ...p, studentClass: e.target.value }))}>
                      <option value="" className="text-gray-800">Select class</option>
                      {["Class 7", "Class 8", "Class 9", "Class 10", "PUC 1st Year", "PUC 2nd Year"].map(c => <option key={c} className="text-gray-800">{c}</option>)}
                    </select>
                  </div>
                  <button type="submit" className="w-full rounded-xl bg-[#F39C12] py-4 font-black text-white transition hover:bg-[#D68910]">Send Enquiry →</button>
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
            {[["🧸", "Play Home", "/play-home", "bg-emerald-50 border-emerald-200 text-emerald-700"], ["📚", "Preschool", "/preschool", "bg-blue-50 border-blue-200 text-blue-700"], ["💡", "Skill Academy", "/skill-academy", "bg-orange-50 border-orange-200 text-orange-700"], ["🏛️", "Exam Coaching", "/exam-coaching", "bg-rose-50 border-rose-200 text-rose-700"]].map(([icon, name, href, cls]) => (
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
            <p className="font-black">New Vedha · Tutorials</p>
          </div>
          <p className="text-sm font-semibold text-white/40">© 2026 New Vedha.</p>
          <Link href="/" className="text-sm font-bold text-white/60 hover:text-white">← Back to Home</Link>
        </div>
      </footer>
    </main>
  );
}
