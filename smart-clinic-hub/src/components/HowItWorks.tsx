const steps = [
  {
    step: "01",
    title: "Set Up Your Clinic Profile",
    description:
      "Create your clinic profile in minutes. Add your team, services, working hours, and customize your booking page with your brand.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Migrate Your Patient Data",
    description:
      "Import existing patient records, appointment history, and billing data seamlessly. Our team assists with onboarding at no extra cost.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Go Live & Accept Bookings",
    description:
      "Share your booking link with patients via your website, social media, or QR code. Start accepting online appointments immediately.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Grow with Insights",
    description:
      "Monitor clinic performance with real-time analytics. Track revenue, patient flow, and staff efficiency — then optimize for growth.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-slate-50"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 text-sm font-semibold rounded-full border border-emerald-200 mb-4">
            How It Works
          </span>
          <h2
            id="how-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight"
          >
            Up and Running{" "}
            <span className="gradient-text">in 4 Simple Steps</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No technical expertise needed. Smart Clinic Hub is designed to be
            intuitive — your team will love using it from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-sky-200 via-emerald-200 to-sky-200"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <div key={step.step} className="relative text-center">
              {/* Step number circle */}
              <div className="relative mx-auto mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center text-white shadow-lg relative z-10">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center z-20">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-3xl border border-gray-200 shadow-sm px-8 py-6">
            <div className="text-left">
              <p className="text-slate-900 font-semibold text-lg">
                Ready to transform your clinic?
              </p>
              <p className="text-slate-500 text-sm">
                Join 500+ clinics already using Smart Clinic Hub
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              aria-label="Get started with Smart Clinic Hub today"
            >
              Get Started Today
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
