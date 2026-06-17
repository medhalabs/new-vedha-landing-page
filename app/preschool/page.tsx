"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

const curriculum = [
  { icon: "🔤", title: "Phonics & Pre-Reading", desc: "Letter sounds, blends, and early reading readiness through systematic phonics.", outcomes: ["Letter recognition", "Sound blending", "Word building"] },
  { icon: "🔢", title: "Number Sense", desc: "Counting, patterns, shapes, and early addition/subtraction through manipulatives.", outcomes: ["1–100 counting", "Basic operations", "Shape & pattern"] },
  { icon: "🗣️", title: "Communication", desc: "Speaking, listening, and expressing ideas with growing confidence.", outcomes: ["Sentence building", "Class presentations", "Active listening"] },
  { icon: "🎨", title: "Creative Arts", desc: "Drawing, painting, collage, and craft that build fine motor skills and self-expression.", outcomes: ["Fine motor skills", "Creativity", "Self-expression"] },
  { icon: "🌍", title: "Environmental Awareness", desc: "Plants, animals, seasons, and community — connecting learning to the real world.", outcomes: ["Nature awareness", "Community roles", "Seasons & weather"] },
  { icon: "🏅", title: "Character Development", desc: "Values, responsibility, kindness, and cooperation woven into daily classroom life.", outcomes: ["Responsibility", "Empathy", "Teamwork"] }
];

const classes = ["Play Home → Nursery", "Nursery", "LKG", "UKG → School"];

const pricing = [
  { tier: "Tier 1", label: "Bangalore, Mysore", fee: "₹40,000 – ₹50,000" },
  { tier: "Tier 2", label: "Hubli, Mangalore, Belgaum", fee: "₹30,000 – ₹38,000" },
  { tier: "Tier 3", label: "District towns", fee: "₹20,000 – ₹28,000" }
];

const faqs = [
  { q: "What curriculum does New Vedha Preschool follow?", a: "Our curriculum is activity-based and aligned with NCERT early childhood education guidelines. It covers language, maths, science awareness, arts, and values." },
  { q: "What are the school hours?", a: "Typically 8:30 AM – 12:30 PM, giving children a balanced 4-hour structured day." },
  { q: "How do teachers communicate with parents?", a: "Daily updates via our parent communication app, monthly progress reports, and quarterly parent-teacher meetings." },
  { q: "Is there a school readiness assessment?", a: "Yes. At the end of UKG, we conduct a structured school readiness evaluation to prepare children for Class 1." }
];

export default function PreschoolPage() {
  const [activeClass, setActiveClass] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [form, setForm] = useState({ name: "", phone: "", level: "", city: "" });
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
        subject: "Preschool Enrollment Enquiry – New Vedha",
        from_name: "New Vedha Website",
        ...form,
      }),
    });
    setFormState("success");
  };

  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#1a1a2e]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#1F4E78]/10 bg-white/95 backdrop-blur-xl">
        <div className="shell flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/new-vedha-logo.png" alt="New Vedha" width={40} height={40} className="rounded-full bg-white p-0.5 ring-2 ring-[#1F4E78]/20" />
            <span className="font-black text-[#1F4E78]">NEW VEDHA</span><span className="text-[10px] font-bold tracking-[0.12em] text-[#2ECC71]">Pre School | Skill Academy</span>
          </Link>
          <nav className="hidden items-center gap-2 text-sm md:flex">
            {[["Play Home", "/play-home"], ["Preschool", "/preschool"], ["Tutorials", "/tutorials"], ["Skill Academy", "/skill-academy"], ["Exam Coaching", "/exam-coaching"]].map(([l, h]) => (
              <Link key={h} href={h} className={`rounded-full px-3 py-1.5 font-bold transition ${h === "/preschool" ? "bg-[#1F4E78] text-white" : "text-gray-500 hover:text-[#1F4E78]"}`}>{l}</Link>
            ))}
          </nav>
          <Link href="/" className="text-sm font-black text-[#1F4E78] hover:underline flex items-center gap-1">← Back to Home</Link>
        </div>
      </header>

      <div className="shell py-3 text-xs font-semibold text-gray-400">
        <Link href="/" className="hover:text-[#1F4E78]">Home</Link>
        <ChevronRight size={12} className="mx-1 inline" />
        <span className="text-[#1F4E78]">Preschool</span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-24 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-black backdrop-blur-sm">📚 Ages 4–6 Years</div>
            <h1 className="text-5xl font-black leading-[1.05] md:text-6xl lg:text-[4.5rem]">Foundation for lifelong learning.</h1>
            <p className="mt-6 text-xl font-semibold leading-8 text-white/85">Phonics, early maths, communication, and school readiness. Built on joyful, activity-based learning that prepares children for Class 1 and beyond.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#enroll" className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 font-black text-blue-700 shadow-[0_14px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-1">Enquire for Admission <ArrowRight size={17} /></a>
              <a href="#curriculum" className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/15 px-7 py-4 font-black backdrop-blur-sm transition hover:bg-white/25">View Curriculum</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[{ n: "Nursery → UKG", l: "4 levels" }, { n: "4 hours", l: "school day" }, { n: "1:10", l: "teacher ratio" }].map(s => (
                <div key={s.l} className="rounded-2xl bg-white/15 p-4 text-center backdrop-blur-sm">
                  <p className="text-lg font-black">{s.n}</p>
                  <p className="text-xs font-bold text-white/65">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
              <Image src="/images/children-activity.jpg" alt="Preschool children" width={600} height={480} className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#F39C12] p-5 text-white shadow-xl">
              <p className="text-2xl font-black">₹20K–50K</p>
              <p className="text-sm font-bold text-white/80">Annual fee range</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLASS EXPLORER */}
      <section className="py-20 md:py-24">
        <div className="shell">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Learning Levels</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">Four stages. One journey.</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            <div className="grid gap-2">
              {[
                { name: "Nursery", age: "3–4 years", desc: "Language, creativity, social foundations" },
                { name: "LKG", age: "4–5 years", desc: "Phonics, numbers, thinking skills" },
                { name: "UKG", age: "5–6 years", desc: "School readiness & independence" },
                { name: "Progression", age: "Into Class 1", desc: "Zero-friction school transition" }
              ].map((c, i) => (
                <button key={c.name} onClick={() => setActiveClass(i)} type="button"
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all ${activeClass === i ? "tab-active border-transparent" : "border-gray-200 bg-white shadow-sm hover:border-blue-300"}`}>
                  <div className={`grid size-10 shrink-0 place-items-center rounded-xl text-sm font-black ${activeClass === i ? "bg-[#F39C12] text-white" : "bg-blue-50 text-blue-700"}`}>{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <p className="font-black">{c.name}</p>
                    <p className={`text-xs font-semibold ${activeClass === i ? "text-white/65" : "text-gray-400"}`}>{c.age}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
              {[
                { name: "Nursery", focus: "Language, rhythm, play, and social foundations.", skills: ["English & Kannada vocabulary", "Circle time & group games", "Pattern recognition", "Creative art expression", "Emotional comfort routines"] },
                { name: "LKG", focus: "Curiosity-led foundations for reading and numbers.", skills: ["Phonics A–Z", "Numbers 1–50", "Pre-writing strokes", "Story comprehension", "Problem-solving activities"] },
                { name: "UKG", focus: "School readiness with confidence and character.", skills: ["Phonics: blends & digraphs", "Numbers 1–100", "Basic addition & subtraction", "Independent reading attempts", "Class 1 readiness assessment"] },
                { name: "Progression", focus: "A structured transition programme to Class 1.", skills: ["School readiness evaluation", "Parent orientation", "Curriculum alignment report", "Recommended schools", "Mentoring for first year"] }
              ][activeClass] && (() => {
                const c = [
                  { name: "Nursery", focus: "Language, rhythm, play, and social foundations.", skills: ["English & Kannada vocabulary", "Circle time & group games", "Pattern recognition", "Creative art expression", "Emotional comfort routines"] },
                  { name: "LKG", focus: "Curiosity-led foundations for reading and numbers.", skills: ["Phonics A–Z", "Numbers 1–50", "Pre-writing strokes", "Story comprehension", "Problem-solving activities"] },
                  { name: "UKG", focus: "School readiness with confidence and character.", skills: ["Phonics: blends & digraphs", "Numbers 1–100", "Basic addition & subtraction", "Independent reading attempts", "Class 1 readiness assessment"] },
                  { name: "Progression", focus: "A structured transition programme to Class 1.", skills: ["School readiness evaluation", "Parent orientation", "Curriculum alignment report", "Recommended schools", "Mentoring for first year"] }
                ][activeClass];
                return (
                  <>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-500">{classes[activeClass]}</p>
                    <h3 className="mt-2 text-2xl font-black text-[#1F4E78]">{c.name}</h3>
                    <p className="mt-3 font-semibold text-gray-600">{c.focus}</p>
                    <ul className="mt-6 space-y-2.5">
                      {c.skills.map(s => (
                        <li key={s} className="flex items-center gap-2.5">
                          <Check size={15} strokeWidth={3} className="shrink-0 text-[#27AE60]" />
                          <span className="text-sm font-bold text-gray-700">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="bg-[#f5f8ff] py-20 md:py-24">
        <div className="shell">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Curriculum</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">Six learning domains.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {curriculum.map(c => (
              <div key={c.title} className="card-hover rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="mt-3 text-lg font-black text-gray-800">{c.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-gray-500">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.outcomes.map(o => (
                    <span key={o} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-600">{o}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 md:py-24">
        <div className="shell">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Fees</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">Clear pricing. No surprises.</h2>
          </div>
          <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-3">
            {pricing.map((p, i) => (
              <div key={p.tier} className={`card-hover rounded-2xl border p-6 text-center ${i === 0 ? "border-[#1F4E78] bg-[#1F4E78] text-white shadow-[0_20px_50px_rgba(31,78,120,0.25)]" : "border-gray-100 bg-white"}`}>
                <p className={`text-xs font-black uppercase tracking-[0.2em] ${i === 0 ? "text-white/60" : "text-gray-400"}`}>{p.tier}</p>
                <p className={`mt-1 text-xs font-semibold ${i === 0 ? "text-white/70" : "text-gray-500"}`}>{p.label}</p>
                <p className={`mt-5 text-xl font-black ${i === 0 ? "text-[#F39C12]" : "text-[#1F4E78]"}`}>{p.fee}</p>
                <p className={`mt-1 text-xs font-bold ${i === 0 ? "text-white/60" : "text-gray-400"}`}>per year</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f8ff] py-20">
        <div className="shell">
          <div className="mb-10 text-center"><h2 className="text-3xl font-black text-[#1F4E78]">Parent questions.</h2></div>
          <div className="mx-auto max-w-2xl space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className={`overflow-hidden rounded-2xl border bg-white transition-all ${openFaq === i ? "border-blue-200 shadow-md" : "border-gray-100 shadow-sm"}`}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left">
                  <span className="font-black text-gray-800">{f.q}</span>
                  <ChevronRight size={18} className={`shrink-0 text-[#1F4E78] transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                </button>
                {openFaq === i && <p className="border-t border-gray-100 px-6 pb-5 pt-4 text-sm font-semibold leading-7 text-gray-500">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLL */}
      <section id="enroll" className="bg-gradient-to-br from-[#1F4E78] to-[#163959] py-20 text-white">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">Set the foundation. Shape the future.</h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-white/75">Limited seats per batch. Enquire now to check availability near you.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 grid size-16 place-items-center rounded-full bg-[#2ECC71]/20 text-[#2ECC71]"><Check size={28} strokeWidth={2.5} /></div>
                <h3 className="text-2xl font-black">Enquiry received!</h3>
                <p className="mt-3 text-base font-semibold text-white/75">Our team will reach out within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black">Admission Enquiry</h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                  {[
                    { id: "ps-name", label: "Parent Name *", key: "name", type: "text", ph: "Your name" },
                    { id: "ps-phone", label: "Phone *", key: "phone", type: "tel", ph: "10-digit mobile" },
                    { id: "ps-city", label: "City *", key: "city", type: "text", ph: "Your city" }
                  ].map(f => (
                    <div key={f.id}>
                      <label className="mb-1.5 block text-sm font-bold text-white/70" htmlFor={f.id}>{f.label}</label>
                      <input id={f.id} type={f.type} className="w-full rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#F39C12] focus:ring-2 focus:ring-[#F39C12]/20" placeholder={f.ph}
                        value={form[f.key as keyof typeof form]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} />
                      {errors[f.key] && <p className="mt-1 text-xs text-red-300">{errors[f.key]}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-white/70" htmlFor="ps-level">Preferred Level</label>
                    <select id="ps-level" className="w-full rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-white outline-none focus:border-[#F39C12]"
                      value={form.level} onChange={e => setForm(p => ({ ...p, level: e.target.value }))}>
                      <option value="" className="text-gray-800">Select level</option>
                      {["Nursery", "LKG", "UKG"].map(l => <option key={l} className="text-gray-800">{l}</option>)}
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
          <h3 className="mb-6 text-xl font-black text-[#1F4E78]">Continue the learning journey</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["🧸", "Play Home", "/play-home", "bg-emerald-50 border-emerald-200 text-emerald-700"], ["🎯", "Tutorials", "/tutorials", "bg-violet-50 border-violet-200 text-violet-700"], ["💡", "Skill Academy", "/skill-academy", "bg-orange-50 border-orange-200 text-orange-700"], ["🏛️", "Exam Coaching", "/exam-coaching", "bg-rose-50 border-rose-200 text-rose-700"]].map(([icon, name, href, cls]) => (
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
            <p className="font-black">New Vedha · Preschool</p>
          </div>
          <p className="text-sm font-semibold text-white/40">© 2026 New Vedha.</p>
          <Link href="/" className="text-sm font-bold text-white/60 hover:text-white">← Back to Home</Link>
        </div>
      </footer>
    </main>
  );
}
