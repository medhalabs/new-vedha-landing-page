"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, ChevronRight, Shield, Target, TrendingUp } from "lucide-react";

const examData = {
  karnataka: [
    { name: "KAS (Karnataka Administrative Service)", vacancies: "150+", feeRange: "₹40,000", duration: "12 months", batch: "Jan, Jul" },
    { name: "PSI / ASI (Police Sub-Inspector)", vacancies: "1,200+", feeRange: "₹25,000", duration: "6 months", batch: "Ongoing" },
    { name: "PC / Constable Recruitment", vacancies: "5,000+", feeRange: "₹15,000", duration: "4 months", batch: "Ongoing" },
    { name: "FDA / SDA (First & Second Division Assistant)", vacancies: "2,000+", feeRange: "₹20,000", duration: "6 months", batch: "Quarterly" },
    { name: "Group C & D (Various Departments)", vacancies: "3,000+", feeRange: "₹12,000", duration: "3 months", batch: "Monthly" },
    { name: "KPSC (Karnataka Public Service Commission)", vacancies: "800+", feeRange: "₹35,000", duration: "10 months", batch: "Feb, Aug" },
    { name: "KTET (Karnataka Teacher Eligibility Test)", vacancies: "2,500+", feeRange: "₹22,000", duration: "5 months", batch: "Ongoing" },
    { name: "Tahsildar / Sheristadar Exam", vacancies: "400+", feeRange: "₹30,000", duration: "8 months", batch: "Jan, Jul" }
  ],
  national: [
    { name: "SSC CGL (Combined Graduate Level)", vacancies: "10,000+", feeRange: "₹30,000", duration: "8 months", batch: "Jan, Jul" },
    { name: "SSC CHSL (Combined Higher Secondary Level)", vacancies: "6,000+", feeRange: "₹25,000", duration: "6 months", batch: "Ongoing" },
    { name: "IBPS PO / Clerk (Banking)", vacancies: "8,000+", feeRange: "₹28,000", duration: "6 months", batch: "Ongoing" },
    { name: "Railway Group C & D (RRB)", vacancies: "15,000+", feeRange: "₹20,000", duration: "5 months", batch: "Monthly" },
    { name: "NDA / CDS (Defence Forces)", vacancies: "600+", feeRange: "₹45,000", duration: "12 months", batch: "Feb, Aug" },
    { name: "UPSC Civil Services (IAS / IPS / IFS)", vacancies: "1,000+", feeRange: "₹60,000", duration: "18 months", batch: "Jul" },
    { name: "CRPF / CISF / BSF Constable", vacancies: "12,000+", feeRange: "₹18,000", duration: "4 months", batch: "Ongoing" },
    { name: "SBI PO / Clerk", vacancies: "3,000+", feeRange: "₹28,000", duration: "6 months", batch: "Ongoing" }
  ],
  education: [
    { name: "TET (Teacher Eligibility Test)", vacancies: "5,000+", feeRange: "₹22,000", duration: "5 months", batch: "Ongoing" },
    { name: "CTET (Central TET)", vacancies: "3,000+", feeRange: "₹25,000", duration: "6 months", batch: "Quarterly" },
    { name: "KTET / D.Ed Exams", vacancies: "2,500+", feeRange: "₹20,000", duration: "4 months", batch: "Ongoing" },
    { name: "B.Ed Entrance Examination", vacancies: "4,000+", feeRange: "₹18,000", duration: "3 months", batch: "Monthly" },
    { name: "DSERT / DIET Recruitment", vacancies: "800+", feeRange: "₹28,000", duration: "6 months", batch: "Jan, Jul" },
    { name: "NVS / KVS Teacher Recruitment", vacancies: "2,000+", feeRange: "₹30,000", duration: "6 months", batch: "Ongoing" },
    { name: "Navodaya / Central School Teacher", vacancies: "1,500+", feeRange: "₹28,000", duration: "5 months", batch: "Quarterly" },
    { name: "University Lecturer / Professor (SET/NET)", vacancies: "2,000+", feeRange: "₹35,000", duration: "8 months", batch: "Feb, Aug" },
    { name: "College Lab Assistant Recruitment", vacancies: "600+", feeRange: "₹20,000", duration: "4 months", batch: "Ongoing" },
    { name: "Educational Inspector (BEO/DEO)", vacancies: "300+", feeRange: "₹35,000", duration: "8 months", batch: "Jan, Jul" }
  ]
};

const coachingApproach = [
  { icon: "📋", title: "Syllabus Mapping", desc: "Complete syllabus breakdown from day one. You know exactly what to study and in what order." },
  { icon: "📝", title: "Weekly Mock Tests", desc: "Pattern-based mock tests every week to build exam habit, speed, and accuracy." },
  { icon: "🎯", title: "Previous Paper Analysis", desc: "Last 10 years' papers analysed and taught — pattern recognition is half the battle." },
  { icon: "🗣️", title: "Interview Preparation", desc: "Group discussion, personality test, and panel interview prep for the final selection stage." },
  { icon: "📚", title: "Study Materials", desc: "Comprehensive notes, workbooks, and previous question paper sets — all included." },
  { icon: "🔄", title: "Revision Strategy", desc: "Structured 30-day final revision programme before each exam date." }
];

const successStories = [
  { name: "Ravi Kumar", exam: "PSI Recruitment", batch: "2024", result: "Selected", rank: "Rank 47" },
  { name: "Anitha S.", exam: "FDA Karnataka", batch: "2024", result: "Selected", rank: "Rank 112" },
  { name: "Mohammed Z.", exam: "SSC CGL", batch: "2025", result: "Selected", rank: "All India 890" },
  { name: "Deepa N.", exam: "KTET Paper 1", batch: "2024", result: "Qualified", rank: "Score: 108/150" }
];

type ExamTab = "karnataka" | "national" | "education";

export default function ExamCoachingPage() {
  const [activeTab, setActiveTab] = useState<ExamTab>("karnataka");
  const [selectedExam, setSelectedExam] = useState<string>("");
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [form, setForm] = useState({ name: "", phone: "", exam: "", city: "" });
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
        subject: "Exam Coaching Enrollment Enquiry – New Vedha",
        from_name: "New Vedha Website",
        ...form,
      }),
    });
    setFormState("success");
  };

  const exams = examData[activeTab];
  const allExams = [...examData.karnataka, ...examData.national, ...examData.education];

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
              <Link key={h} href={h} className={`rounded-full px-3 py-1.5 font-bold transition ${h === "/exam-coaching" ? "bg-[#1F4E78] text-white" : "text-gray-500 hover:text-[#1F4E78]"}`}>{l}</Link>
            ))}
          </nav>
          <Link href="/" className="text-sm font-black text-[#1F4E78] hover:underline">← Back to Home</Link>
        </div>
      </header>

      <div className="shell py-3 text-xs font-semibold text-gray-400">
        <Link href="/" className="hover:text-[#1F4E78]">Home</Link>
        <ChevronRight size={12} className="mx-1 inline" />
        <span className="text-[#1F4E78]">Exam Coaching</span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 to-pink-700 py-24 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden />
        <div className="blob absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-[80px]" aria-hidden />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-black backdrop-blur-sm">🏛️ 26 Exams · Karnataka & National</div>
            <h1 className="text-5xl font-black leading-[1.05] md:text-6xl lg:text-[4.5rem]">Government jobs. Guaranteed demand.</h1>
            <p className="mt-6 text-xl font-semibold leading-8 text-white/90">26 competitive exam tracks — from constable to IAS. Students fill batches year-round. Your guaranteed revenue engine.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#exams" className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 font-black text-rose-700 shadow-xl transition hover:-translate-y-1">Browse All Exams <ArrowRight size={17} /></a>
              <a href="#enroll" className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/15 px-7 py-4 font-black backdrop-blur-sm transition hover:bg-white/25">Enroll Now</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[{ n: "26+", l: "Exam tracks" }, { n: "5K–15K+", l: "Vacancies / exam" }, { n: "₹10K–60K", l: "Fee range" }].map(s => (
                <div key={s.l} className="rounded-2xl bg-white/20 p-4 text-center backdrop-blur-sm">
                  <p className="text-xl font-black">{s.n}</p>
                  <p className="text-xs font-bold text-white/75">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.3)]">
              <Image src="/images/classroom-learning.jpg" alt="Exam coaching" width={600} height={480} className="object-cover" />
            </div>
            <div className="absolute right-8 -bottom-4 rounded-2xl bg-[#F39C12] p-5 text-white shadow-xl">
              <p className="text-2xl font-black">Year-round</p>
              <p className="text-sm font-bold text-white/80">Demand never stops</p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-20 md:py-24">
        <div className="shell">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Why Government Exams?</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">The numbers make it obvious.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: TrendingUp, title: "Massive Demand", desc: "Lakhs of aspirants write government exams every year in Karnataka alone. The coaching market never dries up.", stat: "3L+ aspirants / year" },
              { icon: Shield, title: "Job Security", desc: "Government jobs offer unmatched security, pension, and status. Parents and students are willing to pay premium fees.", stat: "Pension + perks" },
              { icon: Target, title: "Year-Round Revenue", desc: "Multiple exam windows throughout the year mean your batches never go empty. Income is steady and predictable.", stat: "12-month income" }
            ].map(b => (
              <div key={b.title} className="card-hover rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-rose-50 text-rose-600">
                  <b.icon size={24} />
                </div>
                <h3 className="text-lg font-black text-gray-800">{b.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-gray-500">{b.desc}</p>
                <p className="mt-4 rounded-xl bg-rose-50 px-4 py-2 text-sm font-black text-rose-600">{b.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAM BROWSER */}
      <section id="exams" className="bg-[#f5f8ff] py-20 md:py-24">
        <div className="shell">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">All 26 Exams</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">Find your exam track.</h2>
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            {([["karnataka", "Karnataka Exams"], ["national", "National Exams"], ["education", "Education Exams"]] as [ExamTab, string][]).map(([tab, label]) => (
              <button key={tab} onClick={() => setActiveTab(tab)} type="button"
                className={`rounded-full px-5 py-2.5 text-sm font-black transition ${activeTab === tab ? "bg-[#1F4E78] text-white shadow-md" : "border border-gray-200 bg-white text-gray-600 hover:border-rose-300"}`}>
                {label}
              </button>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {exams.map(exam => (
              <div key={exam.name}
                onClick={() => setSelectedExam(selectedExam === exam.name ? "" : exam.name)}
                className={`cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-sm transition-all ${selectedExam === exam.name ? "border-[#1F4E78] shadow-[0_12px_36px_rgba(31,78,120,0.14)]" : "border-gray-100 hover:border-rose-200 hover:shadow-md"}`}>
                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <p className="font-black text-gray-800">{exam.name}</p>
                    <p className="mt-1 text-xs font-bold text-gray-400">{exam.vacancies} vacancies / year</p>
                  </div>
                  <span className="shrink-0 rounded-lg bg-[#1F4E78]/10 px-2.5 py-1 text-xs font-black text-[#1F4E78]">{exam.feeRange}</span>
                </div>
                {selectedExam === exam.name && (
                  <div className="border-t border-gray-100 bg-gray-50 px-5 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-[0.18em]">Duration</p>
                        <p className="mt-1 font-black text-[#1F4E78]">{exam.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-[0.18em]">Batches</p>
                        <p className="mt-1 font-black text-[#1F4E78]">{exam.batch}</p>
                      </div>
                    </div>
                    <a href="#enroll"
                      onClick={e => { e.stopPropagation(); setForm(f => ({ ...f, exam: exam.name })); }}
                      className="mt-4 flex items-center gap-2 text-sm font-black text-rose-600 hover:text-rose-700">
                      Enroll in this exam <ArrowRight size={14} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHING APPROACH */}
      <section className="py-20 md:py-24">
        <div className="shell">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Coaching Approach</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">How we prepare winners.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coachingApproach.map(a => (
              <div key={a.title} className="card-hover rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
                <span className="text-3xl">{a.icon}</span>
                <h3 className="mt-3 text-lg font-black text-gray-800">{a.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-gray-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-[#f5f8ff] py-20">
        <div className="shell">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#F39C12]">Success Stories</p>
            <h2 className="text-3xl font-black text-[#1F4E78] md:text-4xl">Our students got the job.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {successStories.map(s => (
              <div key={s.name} className="card-hover rounded-2xl border border-gray-100 bg-white p-6 shadow-sm text-center">
                <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-rose-50 text-2xl">🎉</div>
                <p className="font-black text-gray-800">{s.name}</p>
                <p className="mt-1 text-sm font-bold text-gray-400">{s.exam}</p>
                <div className="mt-4 rounded-xl bg-[#27AE60]/10 py-2">
                  <p className="text-sm font-black text-[#27AE60]">{s.result}</p>
                  <p className="text-xs font-bold text-gray-500">{s.rank}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLL */}
      <section id="enroll" className="bg-gradient-to-br from-[#1F4E78] to-[#163959] py-20 text-white">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">Your government job journey starts here.</h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-white/75">Select your exam, join the next batch, and get the systematic preparation that turns aspirants into officers.</p>
            <div className="mt-8 space-y-3">
              {["Syllabus-mapped daily classes", "Weekly pattern-based mock tests", "Previous 10 years paper analysis", "Interview & personality test prep", "Study materials included"].map(b => (
                <div key={b} className="flex items-center gap-3">
                  <Check size={16} strokeWidth={3} className="shrink-0 text-[#2ECC71]" />
                  <span className="text-base font-bold text-white/85">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 grid size-16 place-items-center rounded-full bg-[#2ECC71]/20 text-[#2ECC71]"><Check size={28} strokeWidth={2.5} /></div>
                <h3 className="text-2xl font-black">Enquiry received!</h3>
                <p className="mt-3 text-base font-semibold text-white/75">Our team will call you within 24 hours with batch schedule details.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black">Exam Enrollment Enquiry</h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                  {[
                    { id: "ec-name", label: "Full Name *", key: "name", type: "text", ph: "Your name" },
                    { id: "ec-phone", label: "Phone *", key: "phone", type: "tel", ph: "10-digit mobile" },
                    { id: "ec-city", label: "City *", key: "city", type: "text", ph: "Your city" }
                  ].map(f => (
                    <div key={f.id}>
                      <label className="mb-1.5 block text-sm font-bold text-white/70" htmlFor={f.id}>{f.label}</label>
                      <input id={f.id} type={f.type} className="w-full rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#F39C12] focus:ring-2 focus:ring-[#F39C12]/20" placeholder={f.ph}
                        value={form[f.key as keyof typeof form]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} />
                      {errors[f.key] && <p className="mt-1 text-xs text-red-300">{errors[f.key]}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-white/70" htmlFor="ec-exam">Target Exam</label>
                    <select id="ec-exam" className="w-full rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-white outline-none focus:border-[#F39C12]"
                      value={form.exam} onChange={e => setForm(p => ({ ...p, exam: e.target.value }))}>
                      <option value="" className="text-gray-800">Select your target exam</option>
                      {allExams.map(e => <option key={e.name} className="text-gray-800">{e.name}</option>)}
                      <option className="text-gray-800">Not decided yet</option>
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
            {[["🧸", "Play Home", "/play-home", "bg-emerald-50 border-emerald-200 text-emerald-700"], ["📚", "Preschool", "/preschool", "bg-blue-50 border-blue-200 text-blue-700"], ["🎯", "Tutorials", "/tutorials", "bg-violet-50 border-violet-200 text-violet-700"], ["💡", "Skill Academy", "/skill-academy", "bg-orange-50 border-orange-200 text-orange-700"]].map(([icon, name, href, cls]) => (
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
            <p className="font-black">New Vedha · Exam Coaching</p>
          </div>
          <p className="text-sm font-semibold text-white/40">© 2026 New Vedha.</p>
          <Link href="/" className="text-sm font-bold text-white/60 hover:text-white">← Back to Home</Link>
        </div>
      </footer>
    </main>
  );
}
