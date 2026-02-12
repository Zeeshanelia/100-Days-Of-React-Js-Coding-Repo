import React, { useState } from "react";
import {
  FaCheck, FaClock, FaCalendarAlt, FaCalendarDay, FaCalendarWeek, FaCalendar, FaCode, FaDesktop, FaChartLine, FaShieldAlt, FaQuestionCircle, FaHandshake, FaSyncAlt,
} from "react-icons/fa";



const engagementPlans = [
  {
    id: "hourly",
    name: "Hourly",
    price: "$50",
    period: "/Hour",
    tagline: "Perfect for quick fixes & prototypes",
    description:
      "Convert a single design (Figma, XD, PSD) into a responsive React page with Tailwind CSS.",
    bestFor: "Small tasks",
    features: [
      "1 page conversion",
      "Responsive on all devices",
      "Clean React + Tailwind code",
      "Source code ownership",
      "1 revision",
      "Delivery in 3 days",
    ],
    ctaText: "Start Project",
  },
  {
    id: "monthly",
    name: "Monthly",
    price: "$8,000",
    period: "/Month",
    isPopular: true,
    tagline: "Dedicated React developer",
    description:
      "Ongoing frontend development for startups and growing teams.",
    valueNote: "≈ 160 hrs at $50/hr",
    bestFor: "Ongoing work",
    features: [
      "Up to 3 pages",
      "Fully responsive",
      "Priority communication",
      "Content upload",
      "Clean architecture",
      "Source code ownership",
      "1 revision",
    ],
    ctaText: "Choose Monthly",
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "$25,000",
    period: "/Quarter",
    tagline: "Enterprise-grade solution",
    description:
      "Full application development with admin panel & API integration.",
    bestFor: "Full products",
    features: [
      "6+ pages",
      "Admin panel",
      "API integration",
      "Performance optimization",
      "3 revisions",
      "Ongoing support",
      "Source code ownership",
    ],
    ctaText: "Go Premium",
  },
];

const fixedPackages = [
  {
    id: "express",
    name: "Express",
    price: "$84",
    duration: "2 Days",
    bestFor: "Urgent fixes",
    features: [
      "1 responsive page",
      "Delivery in 48 hours",
      "Tailwind styling",
      "Source code included",
      "1 revision",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "$225",
    duration: "7 Days",
    isPopular: true,
    bestFor: "Quality single page",
    features: [
      "1 premium page",
      "Advanced Tailwind UI",
      "Performance optimized",
      "2 revisions",
      "SEO-ready structure",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$1,100",
    duration: "10 Days",
    bestFor: "Small websites",
    features: [
      "2–3 pages",
      "Custom Tailwind system",
      "Cross-browser support",
      "3 revisions",
      "Documentation included",
    ],
  },
];

const faqs = [
  {
    q: "Do I own the source code?",
    a: "Yes. You get 100% ownership of the source code for all plans.",
  },
  {
    q: "What counts as a revision?",
    a: "UI tweaks, spacing, colors, or minor functional changes.",
  },
  {
    q: "Do you provide design?",
    a: "I convert your designs into code. UI/UX design can be added separately.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes, you can upgrade from fixed packages to engagement plans anytime.",
  },
  {
    q: "What about post-delivery support?",
    a: "Weekly Monthly & Quarterly plans include ongoing support.",
  },
];


export const PricesPlan = () => {
  const [view, setView] = useState("engagement");
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // null = none open

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      id="pricing"
      className="
        relative py-2 overflow-hidden
        bg-gradient-to-r from-gray-50 to-blue-50
        dark:from-gray-900 dark:to-purple-900
        text-gray-900 dark:text-gray-100
        transition-colors duration-300
        px-4 sm:px-6 lg:px-8
      "
    >
      {/* Watermark */}
      <h1
        className="
          absolute top-12 md:top-20 left-1/2 -translate-x-1/2 text-[60px] md:text-[120px] lg:text-[140px] font-extrabold tracking-wider text-emerald-600/5 dark:text-emerald-400/5 select-none pointer-events-none z-0">  Pricing
      </h1>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-600 dark:text-gray-400 mb-4">
            Choose Your Perfect Plan
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Flexible
            <span className="block text-emerald-600 dark:text-emerald-400 mt-2">
              Pricing Options
            </span>
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="inline-flex bg-white/70 dark:bg-gray-800/40 rounded-2xl p-2 border border-gray-200/60 dark:border-gray-700/40 backdrop-blur-md shadow-lg">
            <div
              className={`
                absolute top-2 bottom-2 w-1/2 bg-gradient-to-r from-emerald-500 to-emerald-600
                dark:from-emerald-600 dark:to-emerald-700 rounded-xl transition-all duration-500 ease-out
                shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/30
                ${view === "packages" ? "translate-x-full" : ""}
              `}
            />

            <button
              onClick={() => setView("engagement")}
              className={`
                relative z-10 px-6 md:px-10 py-3 rounded-xl font-bold text-base md:text-lg transition-all duration-300
                ${view === "engagement" ? "text-white" : "text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-300"}
              `}
            >
              <span className="flex items-center justify-center gap-2">
                <FaCalendarAlt />
                Engagement Plans
                {view === "engagement" && (
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                )}
              </span>
            </button>

            <button
              onClick={() => setView("packages")}
              className={`
                relative z-10 px-6 md:px-10 py-3 rounded-xl font-bold text-base md:text-lg transition-all duration-300
                ${view === "packages" ? "text-white" : "text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-300"}
              `}
            >
              <span className="flex items-center justify-center gap-2">
                <FaCalendarDay />
                Fixed Packages
                {view === "packages" && (
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                )}
              </span>
            </button>
          </div>
        </div>

        {/* View Description */}
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          {view === "engagement"
            ? "Flexible, ongoing development with dedicated developer time"
            : "Fixed scope, fixed price, guaranteed delivery timeline"}
        </p>

        {/* Engagement Plans */}
        {view === "engagement" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
            {engagementPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`
                  group relative rounded-2xl p-6 md:p-8 cursor-pointer
                  transition-all duration-300 border
                  ${selectedPlan === plan.id
                    ? "border-emerald-500 dark:border-emerald-400 shadow-xl shadow-emerald-500/20 dark:shadow-emerald-500/30 scale-[1.02]"
                    : "border-gray-200/50 dark:border-gray-700/30 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-lg hover:-translate-y-1"}
                  bg-white/60 dark:bg-gray-900/30 backdrop-blur-sm
                `}
              >
                {selectedPlan === plan.id && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent dark:from-emerald-500/10" />
                )}

                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                      {plan.name}
                    </h3>
                    {plan.id === "hourly" && <FaClock className="text-emerald-600 dark:text-emerald-400 text-xl" />}
                    {plan.id === "monthly" && <FaCalendarWeek className="text-emerald-600 dark:text-emerald-400 text-xl" />}
                    {plan.id === "quarterly" && <FaCalendar className="text-emerald-600 dark:text-emerald-400 text-xl" />}
                  </div>

                  <p className="text-emerald-600 dark:text-emerald-400 mb-4 font-medium text-base md:text-lg">
                    {plan.tagline}
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6">
                    {plan.description}
                  </p>

                  <div className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-gray-100">
                    {plan.price}
                    <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400 ml-2">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex gap-3 items-start text-sm md:text-base">
                        <FaCheck className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-800 dark:text-gray-200">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="
                      w-full py-3 md:py-4 rounded-xl font-bold text-base md:text-lg
                      bg-gradient-to-r from-emerald-500 to-emerald-600
                      dark:from-emerald-600 dark:to-emerald-700
                      text-white
                      hover:from-emerald-600 hover:to-emerald-700
                      dark:hover:from-emerald-700 dark:hover:to-emerald-800
                      transition-all duration-300
                      shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/30
                      hover:shadow-xl hover:shadow-emerald-500/30 dark:hover:shadow-emerald-500/40
                      flex items-center justify-center gap-2
                    "
                  >
                    <FaHandshake />
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Fixed Packages */}
        {view === "packages" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
            {fixedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="
                  group relative rounded-2xl p-6 md:p-8
                  border border-gray-200/50 dark:border-gray-700/30
                  bg-white/60 dark:bg-gray-900/30 backdrop-blur-sm
                  hover:-translate-y-2 transition-all duration-300
                  hover:border-emerald-400 dark:hover:border-emerald-500
                "
              >
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                      {pkg.name}
                    </h3>
                    {pkg.id === "express" && <FaClock className="text-emerald-600 dark:text-emerald-400 text-xl" />}
                    {pkg.id === "standard" && <FaDesktop className="text-emerald-600 dark:text-emerald-400 text-xl" />}
                    {pkg.id === "pro" && <FaChartLine className="text-emerald-600 dark:text-emerald-400 text-xl" />}
                  </div>

                  <p className="text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2 text-base md:text-lg">
                    <FaCalendarDay />
                    {pkg.duration}
                  </p>

                  <div className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-gray-100">
                    {pkg.price}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex gap-3 items-start text-sm md:text-base">
                        <FaCheck className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-800 dark:text-gray-200">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="
                      w-full py-3 md:py-4 rounded-xl font-bold text-base md:text-lg
                      bg-emerald-50 dark:bg-emerald-950/30
                      text-emerald-700 dark:text-emerald-300
                      border border-emerald-200/50 dark:border-emerald-800/40
                      hover:bg-emerald-100 dark:hover:bg-emerald-900/40
                      transition-all duration-300
                      flex items-center justify-center gap-2
                    "
                  >
                    <FaHandshake />
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Comparison Table */}
        <div className="mb-16 md:mb-20 overflow-x-auto rounded-xl border border-gray-200/50 dark:border-gray-700/30">
          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-50/40 dark:bg-gray-800/20 backdrop-blur-sm">
              <tr>
                <th className="p-4 text-left font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                <th className="p-4 text-center">
                  <FaClock className="inline mr-2 text-emerald-600 dark:text-emerald-400" />
                  Hourly
                </th>
                <th className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-semibold">
                  <FaCalendarWeek className="inline mr-2" />
                  Monthly
                </th>
                <th className="p-4 text-center">
                  <FaCalendar className="inline mr-2 text-emerald-600 dark:text-emerald-400" />
                  Quarterly
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pages", "1", "Up to 3", "6+"],
                ["Responsive", <FaCheck className="inline text-emerald-600 dark:text-emerald-400 mx-auto block" />, <FaCheck className="inline text-emerald-600 dark:text-emerald-400 mx-auto block" />, <FaCheck className="inline text-emerald-600 dark:text-emerald-400 mx-auto block" />],
                ["Admin Panel", "—", "—", <FaDesktop className="inline text-emerald-600 dark:text-emerald-400 mx-auto block" />],
                ["API Integration", "—", "—", <FaCode className="inline text-emerald-600 dark:text-emerald-400 mx-auto block" />],
                ["Revisions", "1", "1", "3"],
                ["Support", "—", <FaShieldAlt className="inline text-emerald-600 dark:text-emerald-400 mx-auto block" />, <FaShieldAlt className="inline text-emerald-600 dark:text-emerald-400 mx-auto block" />],
              ].map(([f, h, m, q], i) => (
                <tr
                  key={i}
                  className="
                    border-t border-gray-200/30 dark:border-gray-700/20
                    text-center even:bg-gray-50/20 dark:even:bg-gray-800/10
                  "
                >
                  <td className="p-4 text-left font-medium text-gray-700 dark:text-gray-300">{f}</td>
                  <td className="p-4 text-gray-800 dark:text-gray-200">{h}</td>
                  <td className="p-4 text-emerald-600 dark:text-emerald-400 font-medium">{m}</td>
                  <td className="p-4 text-gray-800 dark:text-gray-200">{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ - Accordion (only one open at a time) */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center flex items-center justify-center gap-3 text-gray-800 dark:text-gray-100">
            <FaQuestionCircle className="text-emerald-600 dark:text-emerald-400" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`
                  bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm
                  border border-gray-200/60 dark:border-gray-700/40
                  rounded-xl overflow-hidden transition-all duration-300
                  ${openFaqIndex === index ? "shadow-xl shadow-emerald-500/20" : "hover:shadow-md"}
                `}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`
                    w-full px-6 py-5 flex items-center justify-between text-left
                    font-semibold text-lg md:text-xl text-gray-800 dark:text-gray-100
                    hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors
                  `}
                >
                  <div className="flex items-center gap-3">
                    <FaQuestionCircle className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 text-xl" />
                    {item.q}
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-emerald-500 dark:text-emerald-400">
                    {openFaqIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`
                    px-6 pb-6 pt-1 text-gray-700 dark:text-gray-300 leading-relaxed text-base
                    ${openFaqIndex === index ? "block" : "hidden"}
                  `}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-base md:text-lg">
            Still unsure which plan fits your project?
          </p>
          <button
            className="
              inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white font-semibold text-base md:text-lg rounded-full hover:from-emerald-600 hover:to-emerald-700 dark:hover:from-emerald-700 dark:hover:to-emerald-800 shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300">

            <FaHandshake className="text-xl md:text-2xl" />
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};