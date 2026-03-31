const features = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="14" x2="8" y2="14" />
        <line x1="12" y1="14" x2="12" y2="14" />
        <line x1="16" y1="14" x2="16" y2="14" />
      </svg>
    ),
    title: "Smart Appointment Scheduling",
    description:
      "AI-powered scheduling that eliminates double-bookings, reduces no-shows by 68%, and sends automated reminders via SMS and email.",
    color: "sky",
    highlights: ["AI scheduling engine", "Automated reminders", "Online booking"],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Electronic Health Records (EHR)",
    description:
      "Secure, fast access to complete patient histories, lab results, prescriptions, and clinical notes — all in one centralized place.",
    color: "emerald",
    highlights: ["HIPAA compliant", "Cloud-based storage", "Quick search"],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Integrated Billing & Insurance",
    description:
      "Automated billing with one-click insurance claim submission, real-time eligibility checks, and complete payment tracking.",
    color: "violet",
    highlights: ["Auto claim submission", "Eligibility verification", "Revenue tracking"],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Patient Communication Hub",
    description:
      "Automated appointment reminders, post-visit follow-ups, and secure patient messaging — all from one unified inbox.",
    color: "amber",
    highlights: ["SMS & email alerts", "Secure messaging", "Follow-up automation"],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Analytics & Reporting",
    description:
      "Real-time dashboards and detailed reports on clinic performance, revenue trends, patient flow, and staff productivity.",
    color: "rose",
    highlights: ["Real-time dashboards", "Custom reports", "Revenue analytics"],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Multi-Location Management",
    description:
      "Manage multiple clinic branches, staff schedules, and inventories from one unified dashboard — with role-based access.",
    color: "indigo",
    highlights: ["Unified dashboard", "Role-based access", "Branch analytics"],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  sky: {
    bg: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-100",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-100",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-100",
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-50 text-sky-600 text-sm font-semibold rounded-full border border-sky-200 mb-4">
            Platform Features
          </span>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight"
          >
            Everything Your Clinic Needs,{" "}
            <span className="gradient-text">In One Platform</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From the moment a patient books an appointment to the time their
            claim is settled — Smart Clinic Hub handles it all seamlessly.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const colors = colorMap[feature.color];
            return (
              <article
                key={feature.title}
                className="card-hover bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-5 border ${colors.border}`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-wrap gap-2" aria-label="Key capabilities">
                  {feature.highlights.map((h) => (
                    <li
                      key={h}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg ${colors.bg} ${colors.text}`}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-600 mb-4">
            And much more — inventory management, telemedicine, staff scheduling...
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors"
            aria-label="Explore all features of Smart Clinic Hub"
          >
            Explore all features
            <svg
              width="18"
              height="18"
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
    </section>
  );
}
