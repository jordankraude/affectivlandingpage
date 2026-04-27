"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import affectivLogo from "@/public/affectiv-logo-light.png";

import loginPhoto1 from "@/public/login/login-photo-1.jpg";
import loginPhoto2 from "@/public/login/login-photo-2.jpg";
import loginPhoto3 from "@/public/login/login-photo-3.jpg";
import loginPhoto4 from "@/public/login/login-photo-4.jpg";
import loginPhoto5 from "@/public/login/login-photo-5.jpg";

const PHRASES = [
  "Lead with dignity.",
  "Assume competence.",
  "Progress counts—especially the small wins.",
  "Listen first. Support second.",
  "Choice is care.",
  "Patience is a skill—and you're building it.",
  "Celebrate autonomy.",
  "Consistency is compassion.",
  "Be curious, not certain.",
  "Care is a team sport.",
  "Safety, respect, empowerment.",
  "Today: one meaningful moment at a time.",
];

const PHOTOS = [loginPhoto1, loginPhoto2, loginPhoto3, loginPhoto4, loginPhoto5];

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdIVx7O0MFIj600VSdxCzIlH-62GeKc-2M-krO55nt7z7YyMA/formResponse";

export default function AffectivLandingPage() {
  const [phraseIndex, setPhraseIndex] = useState<number | null>(null);
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setPhraseIndex(Math.floor(Math.random() * PHRASES.length));
    setPhotoIndex(Math.floor(Math.random() * PHOTOS.length));
  }, []);

  if (phraseIndex === null || photoIndex === null) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    setSubmitted(true);
  };

  const resetToHome = () => {
    setSubmitted(false);
    setShowForm(false);
  };

  return (
  <div className="relative min-h-screen w-screen flex flex-col justify-center overflow-x-hidden font-sans">

    {/* Background photo */}
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={PHOTOS[photoIndex]}
        alt=""
        fill
        priority
        className="object-cover w-full h-full max-w-none"
      />
    </div>


    {/* Gradient overlay */}
    <div
      className="absolute inset-0 z-10 bg-linear-to-br
      from-[hsl(var(--primary))]/70
      via-[hsl(var(--destructive))]/60
      to-[hsl(var(--warning))]/50"
    />

    {/* Dark scrim */}
    <div className="absolute inset-0 z-20 bg-black/20" />

    {/* Content */}
    <div className="
      relative z-30 flex flex-col 
      w-full max-w-5xl mx-auto 
      px-6 sm:px-8 lg:px-4 
      py-12 sm:py-16 
      gap-10 sm:gap-14 lg:gap-16
      overflow-x-hidden
    ">

      {/* Rotating phrase */}
      <p className="text-white/80 text-sm md:text-base font-light tracking-[0.2em] uppercase text-center whitespace-nowrap">
        {PHRASES[phraseIndex]}
      </p>

      {/* HERO / INFO SECTION */}
      {!showForm && !submitted && (
        <div className="flex flex-col items-center text-center w-full gap-10 sm:gap-14">

          <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
            Affectiv — Built for Idaho’s Human Service Providers
          </h1>

          {/* Responsive 2-column layout */}
          <div className="flex flex-col md:flex-row gap-10 w-full">

            {/* LEFT COLUMN — Story */}
            <div className="md:basis-1/2 min-w-0 text-left space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
                Affectiv is the all‑in‑one tool for Human Service Providers in Idaho that you
                don’t have to keep waiting for. Designed by direct support professionals who
                built their future in developmental and intellectual disability services,
                Affectiv was born from lived experience.
              </p>

              <p className="text-white/80 text-lg leading-relaxed">
                We’ve struggled with confusing platforms, multiple apps, and lost data in the
                chaos. We made the decision: Idaho providers deserve a platform built for our
                needs — not a generic system we’re forced to adapt to.
              </p>

              <p className="text-white/80 text-lg leading-relaxed">
                Affectiv removes the stress from frontline workers collecting vital day‑to‑day
                information and stops management teams from pulling out their hair cross‑checking
                data or tracking new hires. Let Affectiv do it for you.
              </p>
            </div>

            {/* RIGHT COLUMN — Feature List */}
            <div className="
              md:basis-1/2 min-w-0 
              bg-white/10 backdrop-blur-xl 
              p-6 sm:p-8 
              rounded-2xl border border-white/20 shadow-xl 
              text-left
            ">
              <h2 className="text-white text-2xl font-semibold mb-4">Affectiv offers:</h2>

              <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                <li>• Customizable Onboarding</li>
                <li>• Employee Compliance Tracking</li>
                <li>• Scheduling</li>
                <li>• Employee Timecard Keeping</li>
                <li>• Client Onboarding</li>
                <li>• Client Data Tracking</li>
                <li>• Client Schedule Management</li>
                <li>• MAR Tracking & Management</li>
                <li>• Survey Readiness</li>
              </ul>
            </div>
          </div>

          <p className="text-white/70 text-sm tracking-wide uppercase">
            Where People Matter and Data Works
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 w-full max-w-md">
            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-white text-gray-900 font-semibold rounded-full py-3 hover:bg-white/90 transition"
            >
              Stay In Touch
            </button>
          </div>
        </div>
      )}

      {/* THANK YOU SCREEN */}
      {submitted && (
        <div className="flex flex-col items-center text-center gap-6 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 max-w-md mx-auto">
          <h2 className="text-white text-3xl font-semibold">Thank you!</h2>
          <p className="text-white/80 text-lg">
            We appreciate you reaching out. We’ll be in touch soon.
          </p>

          <button
            onClick={resetToHome}
            className="mt-4 w-full bg-white text-gray-900 font-semibold rounded-full py-3 hover:bg-white/90 transition"
          >
            Back to Home
          </button>
        </div>
      )}

      {/* FORM */}
      {showForm && !submitted && (
        <div className="relative w-full max-w-md mx-auto">

          {/* Close Button */}
          <button
            onClick={() => setShowForm(false)}
            className="absolute -top-3 -right-3 z-50 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-md border border-white/30 transition"
          >
            ✕
          </button>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-6 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20"
          >
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-white/80 text-sm">Name</label>
              <input
                name="entry.643918794"
                type="text"
                required
                placeholder="Your name"
                className="bg-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-white/80 text-sm">Email</label>
              <input
                name="entry.2039054732"
                type="email"
                required
                placeholder="you@example.com"
                className="bg-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-white/80 text-sm">Phone Number</label>
              <input
                name="entry.516721462"
                type="tel"
                placeholder="(555) 555‑5555"
                className="bg-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
              />
            </div>

            {/* Tell us about you */}
            <div className="flex flex-col gap-1">
              <label className="text-white/80 text-sm">Tell us about you</label>
              <textarea
                name="entry.1309787134"
                placeholder="Share anything you'd like..."
                className="bg-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
              />
            </div>

            {/* What you hope Affectiv can do */}
            <div className="flex flex-col gap-1">
              <label className="text-white/80 text-sm">
                What you hope Affectiv can do
              </label>
              <textarea
                name="entry.880653525"
                placeholder="Your hopes, goals, or needs..."
                className="bg-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-gray-900 font-semibold rounded-full py-3 hover:bg-white/90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Logo + tagline */}
      <div className="flex flex-col items-center mt-auto gap-3">
        <Image src={affectivLogo} alt="Affectiv" className="h-16 w-auto opacity-90" />
        <p className="text-white/60 text-xs tracking-[0.15em]">
          Where People Matter & Data Works
        </p>
      </div>
    </div>
  </div>
);

}
