"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Heart,
  Music,
  Shield,
  Smile,
  Star,
  Users
} from "lucide-react";

const curriculum = [
  {
    title: "Sensory Play",
    icon: "🎨",
    desc: "Touch, smell, sight, and sound explorations build neural pathways and curiosity.",
    activities: ["Sand and water play", "Texture boards", "Sensory bins", "Colour mixing"]
  },
  {
    title: "Motor Development",
    icon: "🏃",
    desc: "Gross and fine motor skill activities prepare children for writing and sports.",
    activities: ["Balancing games", "Beading & threading", "Crawling tunnels", "Ball play"]
  },
  {
    title: "Music & Rhythm",
    icon: "🎵",
    desc: "Songs, rhymes, and instruments build language and memory from the start.",
    activities: ["Action songs", "Percussion instruments", "Story rhymes", "Dance & movement"]
  },
  {
    title: "Storytelling",
    icon: "📖",
    desc: "Picture books and interactive stories ignite imagination and language.",
    activities: ["Big book reading", "Puppet shows", "Story sequencing", "Picture narration"]
  },
  {
    title: "Social Comfort",
    icon: "🤝",
    desc: "Structured play teaches sharing, turn-taking, and comfortable peer interaction.",
    activities: ["Circle time", "Group games", "Sharing activities", "Partner tasks"]
  },
  {
    title: "Emotional Safety",
    icon: "💛",
    desc: "Routines, warm caregiving, and comfort objects help children settle with confidence.",
    activities: ["Morning routine", "Comfort corners", "Feelings charts", "Parent updates"]
  }
];

const schedule = [
  { time: "8:30 AM", activity: "Arrival & Morning Circle", icon: "☀️" },
  { time: "9:00 AM", activity: "Sensory Play & Free Exploration", icon: "🎨" },
  { time: "9:30 AM", activity: "Story Time & Music", icon: "📚" },
  { time: "10:00 AM", activity: "Snack & Social Time", icon: "🍎" },
  { time: "10:30 AM", activity: "Motor Play (Indoor / Outdoor)", icon: "🏃" },
  { time: "11:00 AM", activity: "Creative Activity", icon: "✏️" },
  { time: "11:30 AM", activity: "Settling Song & Goodbye Circle", icon: "🌙" }
];

const outcomes = [
  { icon: Smile, title: "Settling Confidence", desc: "Children separate from parents comfortably within the first few weeks." },
  { icon: Users, title: "Social Comfort", desc: "Playing alongside peers, sharing, and taking turns with ease." },
  { icon: Heart, title: "Emotional Regulation", desc: "Recognising feelings and expressing them in age-appropriate ways." },
  { icon: Music, title: "Language Growth", desc: "Vocabulary, songs, and first storytelling attempts blossom rapidly." },
  { icon: Shield, title: "Physical Safety", desc: "CCTV, trained staff ratios, and child-safe furniture in every room." },
  { icon: Star, title: "School Readiness", desc: "Seamless transition into Nursery / LKG when the time comes." }
];

const pricing = [
  { tier: "Tier 1 Cities", label: "Bangalore, Mysore", fee: "₹30,000 – ₹35,000", period: "per year" },
  { tier: "Tier 2 Cities", label: "Hubli, Mangalore, Belgaum", fee: "₹22,000 – ₹28,000", period: "per year" },
  { tier: "Tier 3 Towns", label: "Smaller towns & district HQs", fee: "₹15,000 – ₹20,000", period: "per year" }
];

const faqs = [
  { q: "What is the right age for Play Home?", a: "Play Home is designed for children aged 2–4 years. It's their very first step into a structured learning environment." },
  { q: "How long is the school day?", a: "Typically 3 hours, from 8:30 AM to 11:30 AM. This is ideal for young children's energy levels and settling routines." },
  { q: "What is the teacher-to-student ratio?", a: "We maintain a 1:8 ratio to ensure every child receives individual attention and care." },
  { q: "Is the centre safe?", a: "Yes. CCTV monitoring, trained staff, child-safe furniture, and daily parent update protocols are standard at all New Vedha centres." }
];

export default function PlayHomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [form, setForm] = useState({ name: "", phone: "", childAge: "", city: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\d{10}$/.test(form.phone.trim())) e.phone = "Enter a valid 10-digit number";
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
        subject: "Play Home Enrollment Enquiry – New Vedha",
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
              <Link key={h} href={h} className={`rounded-full px-3 py-1.5 font-bold transition ${h === "/play-home" ? "bg-[#1F4E78] text-white" : "text-gray-500 hover:text-[#1F4E78]"}`}>{l}</Link>
            ))}
          </nav>
          <Link href="/" className="text-sm font-black text-[#1F4E78] hover:underline flex items-center gap-1">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="shell py-3 text-xs font-semibold text-gray-400">
        <Link href="/" className="hover:text-[#1F4E78]">Home</Link>
        <ChevronRight size={12} className="mx-1 inline" />
        <span className="text-[#1F4E78]">Play Home</span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden />
        <div className="blob absolute -left-24 top-10 h-80 w-80 rounded-full bg-white/10 blur-[80px]" aria-hidden />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-black backdrop-blur-sm">
              🧸 Ages 2–4 Years
            </div>
            <h1 className="text-balance text-5xl font-black leading-[1.05] md:text-6xl lg:text-[4.5rem]">
              A gentle first step into discovery.
            </h1>
            <p className="mt-6 text-xl font-semibold leading-8 text-white/85">
              Sensory play, music, movement, storytelling, and emotional comfort for tiny learners. Play Home is where school begins to feel like home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#enroll" className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 font-black text-emerald-700 shadow-[0_14px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-1">
                Enquire for Admission <ArrowRight size={17} />
              </a>
              <a href="#curriculum" className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/15 px-7 py-4 font-black backdrop-blur-sm transition hover:bg-white/25">
                View Curriculum
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              {["1:8 Teacher Ratio", "CCTV Security", "Play-Based Learning", "Daily Parent Updates"].map(b => (
                <div key={b} className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-bold backdrop-blur-sm">
                  <Check size={14} strokeWidth={3} /> {b}
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.3)]">
              <Image src="/images/play-based-learning.jpg" alt="Children in Play Home" width={600} height={480} className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-3xl font-black text-emerald-600">₹15K–35K</p>
              <p className="text-sm font-bold text-gray-500">Annual fee range</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 md:py-24">
        <div className="shell">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">What Children Gain</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">Developmental outcomes that last.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map(o => (
              <div key={o.title} className="card-hover rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <o.icon size={22} />
                </div>
                <h3 className="text-lg font-black text-gray-800">{o.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-gray-500">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="bg-[#f5fbf8] py-20 md:py-24">
        <div className="shell">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Curriculum</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">Six pillars of early learning.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-semibold text-gray-500">Every activity serves a developmental purpose — nothing is filler.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {curriculum.map(c => (
              <div key={c.title} className="card-hover rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="mt-3 text-lg font-black text-gray-800">{c.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-gray-500">{c.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {c.activities.map(a => (
                    <li key={a} className="flex items-center gap-2 text-xs font-bold text-gray-600">
                      <span className="size-1.5 rounded-full bg-emerald-400" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section className="py-20 md:py-24">
        <div className="shell">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Daily Schedule</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">A day at Play Home.</h2>
          </div>
          <div className="mx-auto max-w-2xl space-y-3">
            {schedule.map((s, i) => (
              <div key={s.time} className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-emerald-50 text-xl font-black text-emerald-700">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">{s.time}</p>
                  <p className="font-black text-gray-800">{s.icon} {s.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-[#f5f8ff] py-20 md:py-24">
        <div className="shell">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Fees</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">Transparent pricing by location.</h2>
          </div>
          <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-3">
            {pricing.map((p, i) => (
              <div key={p.tier} className={`card-hover rounded-2xl border p-6 text-center ${i === 0 ? "border-[#1F4E78] bg-[#1F4E78] text-white shadow-[0_20px_50px_rgba(31,78,120,0.25)]" : "border-gray-100 bg-white"}`}>
                <p className={`text-xs font-black uppercase tracking-[0.2em] ${i === 0 ? "text-white/60" : "text-gray-400"}`}>{p.tier}</p>
                <p className={`mt-1 text-xs font-semibold ${i === 0 ? "text-white/70" : "text-gray-500"}`}>{p.label}</p>
                <p className={`mt-5 text-2xl font-black ${i === 0 ? "text-[#F39C12]" : "text-[#1F4E78]"}`}>{p.fee}</p>
                <p className={`mt-1 text-xs font-bold ${i === 0 ? "text-white/60" : "text-gray-400"}`}>{p.period}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm font-semibold text-gray-400">Fees vary by centre. Contact your nearest New Vedha partner for exact pricing.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="shell">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-[#1F4E78]">Common questions.</h2>
          </div>
          <div className="mx-auto max-w-2xl space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className={`overflow-hidden rounded-2xl border bg-white transition-all ${openFaq === i ? "border-[#1F4E78]/30 shadow-md" : "border-gray-100 shadow-sm"}`}>
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

      {/* ENROLL CTA */}
      <section id="enroll" className="bg-gradient-to-br from-[#1F4E78] to-[#163959] py-20 text-white md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">Give your child the best possible start.</h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-white/75">Limited seats per batch. Enquire now to check availability at your nearest New Vedha Play Home.</p>
            <div className="mt-8 grid gap-4">
              {[
                { label: "Age group", val: "2–4 years" },
                { label: "School hours", val: "3 hours / day" },
                { label: "Teacher ratio", val: "1:8" },
                { label: "Annual fee", val: "₹15,000 – ₹35,000" }
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-sm font-bold text-white/60">{item.label}</span>
                  <span className="font-black text-[#F39C12]">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 grid size-16 place-items-center rounded-full bg-[#2ECC71]/20 text-[#2ECC71]">
                  <Check size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black">Enquiry received!</h3>
                <p className="mt-3 text-base font-semibold text-white/75">We&apos;ll call you within 24 hours to discuss availability.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black">Admission Enquiry</h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-white/70" htmlFor="ph-name">Parent Name *</label>
                    <input id="ph-name" className="w-full rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#F39C12] focus:ring-2 focus:ring-[#F39C12]/20" placeholder="Your name"
                      value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                    {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-white/70" htmlFor="ph-phone">Phone *</label>
                    <input id="ph-phone" type="tel" className="w-full rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#F39C12] focus:ring-2 focus:ring-[#F39C12]/20" placeholder="10-digit mobile"
                      value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                    {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-white/70" htmlFor="ph-age">Child&apos;s Age</label>
                    <select id="ph-age" className="w-full rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-white outline-none focus:border-[#F39C12]"
                      value={form.childAge} onChange={e => setForm(p => ({ ...p, childAge: e.target.value }))}>
                      <option value="" className="text-gray-800">Select age</option>
                      <option className="text-gray-800">2 years</option>
                      <option className="text-gray-800">3 years</option>
                      <option className="text-gray-800">4 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-white/70" htmlFor="ph-city">City *</label>
                    <input id="ph-city" className="w-full rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#F39C12] focus:ring-2 focus:ring-[#F39C12]/20" placeholder="Your city"
                      value={form.city} onChange={e => setForm(p => ({ ...p, city: e.target.value }))} />
                    {errors.city && <p className="mt-1 text-xs text-red-300">{errors.city}</p>}
                  </div>
                  <button type="submit" className="w-full rounded-xl bg-[#F39C12] py-4 font-black text-white transition hover:bg-[#D68910]">
                    Send Enquiry →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* RELATED MODULES */}
      <section className="py-16">
        <div className="shell">
          <h3 className="mb-6 text-xl font-black text-[#1F4E78]">Continue the learning journey</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Preschool", icon: "📚", href: "/preschool", color: "bg-blue-50 border-blue-200 text-blue-700" },
              { name: "Tutorials", icon: "🎯", href: "/tutorials", color: "bg-violet-50 border-violet-200 text-violet-700" },
              { name: "Skill Academy", icon: "💡", href: "/skill-academy", color: "bg-orange-50 border-orange-200 text-orange-700" },
              { name: "Exam Coaching", icon: "🏛️", href: "/exam-coaching", color: "bg-rose-50 border-rose-200 text-rose-700" }
            ].map(m => (
              <Link key={m.href} href={m.href} className={`card-hover flex items-center gap-3 rounded-2xl border p-4 font-bold ${m.color}`}>
                <span className="text-2xl">{m.icon}</span>
                <span>{m.name}</span>
                <ArrowRight size={15} className="ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-[#0f2744] py-8 text-white">
        <div className="shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/new-vedha-logo.png" alt="New Vedha" width={36} height={36} className="rounded-full bg-white p-0.5" />
            <p className="font-black">New Vedha · Play Home</p>
          </div>
          <p className="text-sm font-semibold text-white/40">© 2026 New Vedha. All rights reserved.</p>
          <Link href="/" className="text-sm font-bold text-white/60 hover:text-white flex items-center gap-1">← Back to Home</Link>
        </div>
      </footer>
    </main>
  );
}
