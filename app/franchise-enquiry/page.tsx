"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

type FormType = "franchise" | "student" | "info";

/* ── Franchise Form ── */
function FranchiseForm() {
  const [state, setState] = useState<"idle" | "success">("idle");
  const [data, setData] = useState({
    name: "", email: "", phone: "", city: "", occupation: "",
    experience: "", space: "", investment: "", plan: "", source: "", message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!data.name.trim() || data.name.trim().length < 2) e.name = "Enter your full name (min 2 chars)";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = "Enter a valid email address";
    if (!/^\d{10}$/.test(data.phone.trim())) e.phone = "Enter a valid 10-digit phone number";
    if (!data.city.trim()) e.city = "City is required";
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
        subject: "Franchise Enquiry – New Vedha",
        from_name: "New Vedha Website",
        ...data,
      }),
    });
    setState("success");
  };

  if (state === "success") return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 grid size-20 place-items-center rounded-full bg-[#2ECC71]/15 text-[#27AE60]">
        <Check size={36} strokeWidth={2.5} />
      </div>
      <h3 className="text-2xl font-black text-gray-800">Thank you, {data.name}!</h3>
      <p className="mx-auto mt-4 max-w-md text-base font-semibold leading-7 text-gray-500">
        Your franchise enquiry has been received. A member of the New Vedha leadership team will contact you within 24 hours to schedule your consultation call.
      </p>
      <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-5 text-left">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">What happens next</p>
        {["Consultation call with our franchise team (30 mins)", "Location and space assessment", "Customised franchise proposal", "Onboarding and launch support"].map((s, i) => (
          <div key={s} className="mt-3 flex items-center gap-3">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#1F4E78] text-xs font-black text-white">{i + 1}</span>
            <span className="text-sm font-semibold text-gray-700">{s}</span>
          </div>
        ))}
      </div>
      <button onClick={() => setState("idle")} className="mt-8 rounded-xl border border-gray-200 px-6 py-3 font-black text-gray-500 hover:bg-gray-50 transition">
        Submit another enquiry
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="fr-name">Full Name *</label>
          <input id="fr-name" className={`field ${errors.name ? "field-error" : ""}`} placeholder="Your full name"
            value={data.name} onChange={e => setData(p => ({ ...p, name: e.target.value }))} />
          {errors.name && <p className="error-msg">{errors.name}</p>}
        </div>
        <div>
          <label className="label" htmlFor="fr-email">Email *</label>
          <input id="fr-email" type="email" className={`field ${errors.email ? "field-error" : ""}`} placeholder="your@email.com"
            value={data.email} onChange={e => setData(p => ({ ...p, email: e.target.value }))} />
          {errors.email && <p className="error-msg">{errors.email}</p>}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="fr-phone">Phone Number *</label>
          <input id="fr-phone" type="tel" className={`field ${errors.phone ? "field-error" : ""}`} placeholder="10-digit mobile"
            value={data.phone} onChange={e => setData(p => ({ ...p, phone: e.target.value }))} />
          {errors.phone && <p className="error-msg">{errors.phone}</p>}
        </div>
        <div>
          <label className="label" htmlFor="fr-city">City / Location *</label>
          <input id="fr-city" className={`field ${errors.city ? "field-error" : ""}`} placeholder="Your city"
            value={data.city} onChange={e => setData(p => ({ ...p, city: e.target.value }))} />
          {errors.city && <p className="error-msg">{errors.city}</p>}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="fr-occupation">Current Occupation</label>
          <input id="fr-occupation" className="field" placeholder="e.g. Business owner, IT professional"
            value={data.occupation} onChange={e => setData(p => ({ ...p, occupation: e.target.value }))} />
        </div>
        <div>
          <label className="label" htmlFor="fr-experience">Business Experience</label>
          <select id="fr-experience" className="field" value={data.experience} onChange={e => setData(p => ({ ...p, experience: e.target.value }))}>
            <option value="">Select</option>
            <option>Yes, I run a business</option>
            <option>No, first-time entrepreneur</option>
            <option>Previously ran a business</option>
          </select>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className="label" htmlFor="fr-space">Space Available</label>
          <select id="fr-space" className="field" value={data.space} onChange={e => setData(p => ({ ...p, space: e.target.value }))}>
            <option value="">Select</option>
            <option>1500 sq ft</option>
            <option>2000 sq ft</option>
            <option>2500+ sq ft</option>
            <option>Not yet identified</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="fr-investment">Investment Capacity</label>
          <select id="fr-investment" className="field" value={data.investment} onChange={e => setData(p => ({ ...p, investment: e.target.value }))}>
            <option value="">Select</option>
            <option>Basic range</option>
            <option>Standard range</option>
            <option>Premium range</option>
            <option>To be discussed</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="fr-plan">Interested Plan</label>
          <select id="fr-plan" className="field" value={data.plan} onChange={e => setData(p => ({ ...p, plan: e.target.value }))}>
            <option value="">Select</option>
            <option>Basic</option>
            <option>Standard</option>
            <option>Premium</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>
      <div>
        <label className="label" htmlFor="fr-source">How did you hear about us?</label>
        <select id="fr-source" className="field" value={data.source} onChange={e => setData(p => ({ ...p, source: e.target.value }))}>
          <option value="">Select</option>
          <option>Google Search</option>
          <option>Social Media</option>
          <option>Friend / Referral</option>
          <option>Education event</option>
          <option>News / Article</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="label" htmlFor="fr-message">Additional Message</label>
        <textarea id="fr-message" className="field min-h-[90px] resize-y" placeholder="Any specific questions or requirements?"
          value={data.message} onChange={e => setData(p => ({ ...p, message: e.target.value }))} />
      </div>
      <button type="submit" className="w-full rounded-xl bg-[#1F4E78] py-4 font-black text-white shadow-[0_14px_40px_rgba(31,78,120,0.3)] transition hover:-translate-y-0.5 hover:bg-[#163959]">
        Submit Franchise Enquiry →
      </button>
      <p className="text-center text-xs font-semibold text-gray-400">By submitting, you agree to be contacted by the New Vedha franchise team.</p>
    </form>
  );
}

/* ── Student Enrollment Form ── */
function StudentForm() {
  const [state, setState] = useState<"idle" | "success">("idle");
  const [data, setData] = useState({
    studentName: "", parentName: "", phone: "", email: "", age: "",
    module: "", course: "", city: "", contactTime: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const moduleOptions = ["Play Home", "Preschool", "Tutorials", "Skill Academy", "Exam Coaching"];
  const courseOptions: Record<string, string[]> = {
    "Play Home": ["Play Home (Ages 2–3)", "Play Home (Ages 3–4)"],
    "Preschool": ["Nursery", "LKG", "UKG"],
    "Tutorials": ["Class 7", "Class 8", "Class 9", "Class 10", "PUC 1st Year", "PUC 2nd Year"],
    "Skill Academy": ["IT & Programming", "Robotics & Electronics", "Design & Creative", "Business & Management", "Communication", "Languages", "Self Employment", "Other"],
    "Exam Coaching": ["PSI / Constable", "FDA / SDA", "SSC CGL", "IBPS Banking", "UPSC", "TET / CTET", "KAS", "Other"]
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!data.studentName.trim()) e.studentName = "Student name is required";
    if (!/^\d{10}$/.test(data.phone.trim())) e.phone = "Enter a valid 10-digit number";
    if (!data.module) e.module = "Please select a module";
    if (!data.city.trim()) e.city = "City is required";
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
        subject: "Student Enrollment Enquiry – New Vedha",
        from_name: "New Vedha Website",
        ...data,
      }),
    });
    setState("success");
  };

  if (state === "success") return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 grid size-20 place-items-center rounded-full bg-[#2ECC71]/15 text-[#27AE60]">
        <Check size={36} strokeWidth={2.5} />
      </div>
      <h3 className="text-2xl font-black text-gray-800">Enrollment enquiry received!</h3>
      <p className="mx-auto mt-4 max-w-md text-base font-semibold leading-7 text-gray-500">
        We&apos;ll send course details and call you within 24 hours to discuss the next batch schedule.
      </p>
      <button onClick={() => setState("idle")} className="mt-8 rounded-xl border border-gray-200 px-6 py-3 font-black text-gray-500 hover:bg-gray-50 transition">Submit another</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="st-name">Student Name *</label>
          <input id="st-name" className={`field ${errors.studentName ? "field-error" : ""}`} placeholder="Student&apos;s full name"
            value={data.studentName} onChange={e => setData(p => ({ ...p, studentName: e.target.value }))} />
          {errors.studentName && <p className="error-msg">{errors.studentName}</p>}
        </div>
        <div>
          <label className="label" htmlFor="st-parent">Parent / Guardian Name</label>
          <input id="st-parent" className="field" placeholder="Parent&apos;s name"
            value={data.parentName} onChange={e => setData(p => ({ ...p, parentName: e.target.value }))} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="st-phone">Phone Number *</label>
          <input id="st-phone" type="tel" className={`field ${errors.phone ? "field-error" : ""}`} placeholder="10-digit mobile"
            value={data.phone} onChange={e => setData(p => ({ ...p, phone: e.target.value }))} />
          {errors.phone && <p className="error-msg">{errors.phone}</p>}
        </div>
        <div>
          <label className="label" htmlFor="st-email">Email (optional)</label>
          <input id="st-email" type="email" className="field" placeholder="your@email.com"
            value={data.email} onChange={e => setData(p => ({ ...p, email: e.target.value }))} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="st-module">Module *</label>
          <select id="st-module" className={`field ${errors.module ? "field-error" : ""}`} value={data.module}
            onChange={e => setData(p => ({ ...p, module: e.target.value, course: "" }))}>
            <option value="">Select module</option>
            {moduleOptions.map(m => <option key={m}>{m}</option>)}
          </select>
          {errors.module && <p className="error-msg">{errors.module}</p>}
        </div>
        {data.module && courseOptions[data.module] && (
          <div>
            <label className="label" htmlFor="st-course">Specific Course / Level</label>
            <select id="st-course" className="field" value={data.course} onChange={e => setData(p => ({ ...p, course: e.target.value }))}>
              <option value="">Select</option>
              {courseOptions[data.module].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        )}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="st-city">City *</label>
          <input id="st-city" className={`field ${errors.city ? "field-error" : ""}`} placeholder="Your city"
            value={data.city} onChange={e => setData(p => ({ ...p, city: e.target.value }))} />
          {errors.city && <p className="error-msg">{errors.city}</p>}
        </div>
        <div>
          <label className="label" htmlFor="st-time">Best Time to Contact</label>
          <select id="st-time" className="field" value={data.contactTime} onChange={e => setData(p => ({ ...p, contactTime: e.target.value }))}>
            <option value="">Any time</option>
            <option>Morning (9AM–12PM)</option>
            <option>Afternoon (12PM–4PM)</option>
            <option>Evening (4PM–8PM)</option>
          </select>
        </div>
      </div>
      <button type="submit" className="w-full rounded-xl bg-[#1F4E78] py-4 font-black text-white shadow-[0_14px_40px_rgba(31,78,120,0.3)] transition hover:-translate-y-0.5 hover:bg-[#163959]">
        Submit Enrollment Enquiry →
      </button>
    </form>
  );
}

/* ── Information Request Form ── */
function InfoForm() {
  const [state, setState] = useState<"idle" | "success">("idle");
  const [data, setData] = useState({ name: "", email: "", phone: "", infoNeeded: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = "Enter a valid email";
    if (!/^\d{10}$/.test(data.phone.trim())) e.phone = "Enter a valid 10-digit number";
    if (!data.infoNeeded) e.infoNeeded = "Please select what you need";
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
        subject: "Information Request – New Vedha",
        from_name: "New Vedha Website",
        ...data,
      }),
    });
    setState("success");
  };

  if (state === "success") return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 grid size-20 place-items-center rounded-full bg-[#2ECC71]/15 text-[#27AE60]"><Check size={36} strokeWidth={2.5} /></div>
      <h3 className="text-2xl font-black text-gray-800">Information request received!</h3>
      <p className="mx-auto mt-4 max-w-md text-base font-semibold leading-7 text-gray-500">
        We&apos;ll send the requested information to {data.email} within a few hours.
      </p>
      <button onClick={() => setState("idle")} className="mt-8 rounded-xl border border-gray-200 px-6 py-3 font-black text-gray-500 hover:bg-gray-50 transition">Request more info</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label className="label" htmlFor="if-name">Full Name *</label>
        <input id="if-name" className={`field ${errors.name ? "field-error" : ""}`} placeholder="Your name"
          value={data.name} onChange={e => setData(p => ({ ...p, name: e.target.value }))} />
        {errors.name && <p className="error-msg">{errors.name}</p>}
      </div>
      <div>
        <label className="label" htmlFor="if-email">Email Address *</label>
        <input id="if-email" type="email" className={`field ${errors.email ? "field-error" : ""}`} placeholder="your@email.com"
          value={data.email} onChange={e => setData(p => ({ ...p, email: e.target.value }))} />
        {errors.email && <p className="error-msg">{errors.email}</p>}
      </div>
      <div>
        <label className="label" htmlFor="if-phone">Phone Number *</label>
        <input id="if-phone" type="tel" className={`field ${errors.phone ? "field-error" : ""}`} placeholder="10-digit mobile"
          value={data.phone} onChange={e => setData(p => ({ ...p, phone: e.target.value }))} />
        {errors.phone && <p className="error-msg">{errors.phone}</p>}
      </div>
      <div>
        <label className="label" htmlFor="if-info">What information do you need? *</label>
        <select id="if-info" className={`field ${errors.infoNeeded ? "field-error" : ""}`} value={data.infoNeeded}
          onChange={e => setData(p => ({ ...p, infoNeeded: e.target.value }))}>
          <option value="">Select</option>
          <option>Franchise Information Packet</option>
          <option>Full Course Catalog</option>
          <option>Exam Coaching Details</option>
          <option>Pricing Information</option>
          <option>All of the above</option>
        </select>
        {errors.infoNeeded && <p className="error-msg">{errors.infoNeeded}</p>}
      </div>
      <button type="submit" className="w-full rounded-xl bg-[#1F4E78] py-4 font-black text-white shadow-[0_14px_40px_rgba(31,78,120,0.3)] transition hover:-translate-y-0.5 hover:bg-[#163959]">
        Send Information Request →
      </button>
      <p className="text-center text-xs font-semibold text-gray-400">Information will be sent to your email address within a few hours.</p>
    </form>
  );
}

/* ── Page ── */
export default function FranchiseEnquiryPage() {
  const [activeForm, setActiveForm] = useState<FormType>("franchise");

  const tabs: { id: FormType; label: string; desc: string; icon: string }[] = [
    { id: "franchise", label: "Franchise Enquiry", desc: "Start your education business", icon: "🏢" },
    { id: "student", label: "Student Enrollment", desc: "Enroll in any module", icon: "🎓" },
    { id: "info", label: "Request Information", desc: "Download course / franchise details", icon: "📄" }
  ];

  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#1a1a2e]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#1F4E78]/10 bg-white/95 backdrop-blur-xl">
        <div className="shell flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/new-vedha-logo.png" alt="New Vedha" width={40} height={40} className="rounded-full bg-white p-0.5 ring-2 ring-[#1F4E78]/20" />
            <span className="font-black text-[#1F4E78]">NEW VEDHA</span>
          </Link>
          <Link href="/" className="hidden text-sm font-bold text-gray-500 hover:text-[#1F4E78] md:block">← Back to Home</Link>
          <a href="tel:+918310325960" className="flex items-center gap-2 rounded-full bg-[#1F4E78] px-4 py-2 text-sm font-black text-white transition hover:bg-[#163959]">
            <span>Call Us</span>
          </a>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="shell py-3 text-xs font-semibold text-gray-400">
        <Link href="/" className="hover:text-[#1F4E78]">Home</Link>
        <ChevronRight size={12} className="mx-1 inline" />
        <span className="text-[#1F4E78]">Enquiry</span>
      </div>

      {/* HERO BANNER */}
      <section className="bg-gradient-to-br from-[#1F4E78] to-[#163959] py-16 text-white">
        <div className="shell text-center">
          <h1 className="text-4xl font-black md:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg font-semibold text-white/75">
            Franchise enquiry, student enrollment, or just need information — we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* FORM SWITCHER */}
      <section className="py-16 md:py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              {/* Tab switcher */}
              <div className="mb-8 grid gap-3 sm:grid-cols-3">
                {tabs.map(tab => (
                  <button key={tab.id} type="button" onClick={() => setActiveForm(tab.id)}
                    className={`flex flex-col gap-1 rounded-2xl border p-4 text-left transition-all ${activeForm === tab.id ? "border-[#1F4E78] bg-[#1F4E78] text-white shadow-[0_14px_40px_rgba(31,78,120,0.2)]" : "border-gray-200 bg-white shadow-sm hover:border-[#1F4E78]/30"}`}>
                    <span className="text-xl">{tab.icon}</span>
                    <span className="mt-1 text-sm font-black">{tab.label}</span>
                    <span className={`text-xs font-semibold ${activeForm === tab.id ? "text-white/65" : "text-gray-400"}`}>{tab.desc}</span>
                  </button>
                ))}
              </div>

              {/* Form card */}
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_20px_60px_rgba(31,78,120,0.08)] md:p-10">
                <div className="mb-7">
                  <h2 className="text-2xl font-black text-gray-800">
                    {activeForm === "franchise" ? "Franchise Enquiry" : activeForm === "student" ? "Student Enrollment" : "Request Information"}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-gray-400">
                    {activeForm === "franchise" ? "Schedule a free 30-minute consultation with our franchise team." : activeForm === "student" ? "Enroll in any New Vedha module. We&apos;ll call you with batch details." : "Get our franchise or course information sent to your email."}
                  </p>
                </div>
                {activeForm === "franchise" && <FranchiseForm />}
                {activeForm === "student" && <StudentForm />}
                {activeForm === "info" && <InfoForm />}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-gray-400">Quick Contact</p>
                <div className="mt-5 space-y-4">
                  {[
                    { label: "CEO — Nagabushan N", val: "+91 8310325960", href: "tel:+918310325960" },
                    { label: "CMO — Narasimha Murthy", val: "+91 9743595827", href: "tel:+919743595827" },
                    { label: "Email", val: "sandesh@newvedha.com", href: "mailto:sandesh@newvedha.com" }
                  ].map(c => (
                    <div key={c.label}>
                      <p className="text-xs font-bold text-gray-400">{c.label}</p>
                      <a href={c.href} className="mt-0.5 block text-sm font-black text-[#1F4E78] hover:underline">{c.val}</a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-gray-400">Available Modules</p>
                <div className="mt-4 space-y-2">
                  {[["🧸", "Play Home", "/play-home"], ["📚", "Preschool", "/preschool"], ["🎯", "Tutorials", "/tutorials"], ["💡", "Skill Academy", "/skill-academy"], ["🏛️", "Exam Coaching", "/exam-coaching"]].map(([icon, name, href]) => (
                    <Link key={href} href={href} className="flex items-center gap-2.5 rounded-xl border border-gray-100 p-2.5 text-sm font-bold text-gray-700 hover:border-[#1F4E78]/20 hover:bg-[#f5f8ff] transition">
                      <span className="text-lg">{icon}</span>
                      <span>{name}</span>
                      <ArrowRight size={13} className="ml-auto text-gray-300" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#1F4E78]/15 bg-gradient-to-br from-[#1F4E78] to-[#163959] p-6 text-white">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/60">Franchise Plans</p>
                <p className="mt-3 text-xl font-black">Prime · Prime Plus · Platinum</p>
                <p className="mt-2 text-sm font-semibold text-white/70">Revenue from ₹8L to ₹60L per year. Break-even in 3-4 months.</p>
                <Link href="/#plans" className="mt-5 flex items-center gap-2 text-sm font-black text-[#F39C12] hover:underline">
                  View Franchise Plans <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-[#0f2744] py-8 text-white">
        <div className="shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/new-vedha-logo.png" alt="New Vedha" width={36} height={36} className="rounded-full bg-white p-0.5" />
            <p className="font-black">New Vedha Education Franchise</p>
          </div>
          <p className="text-sm font-semibold text-white/40">© 2026 New Vedha.</p>
          <Link href="/" className="text-sm font-bold text-white/60 hover:text-white">← Back to Home</Link>
        </div>
      </footer>
    </main>
  );
}
