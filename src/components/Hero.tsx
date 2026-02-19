import Link from "next/link";

const stats = [
  { value: "500+", label: "Clinics Powered" },
  { value: "50K+", label: "Patients Managed" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "40%", label: "Time Saved" },
];

const badges = [
  "HIPAA Compliant",
  "14-Day Free Trial",
  "No Credit Card Required",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden hero-gradient pt-28 pb-20 md:pt-36 md:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-32 w-[500px] h-[500px] rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-sky-100/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-200 rounded-full text-sm font-medium text-sky-700 mb-6">
              <span
                className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                aria-hidden="true"
              />
              Trusted by 500+ Healthcare Providers
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6"
            >
              The Smartest Way to{" "}
              <span className="gradient-text">Run Your Clinic</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Smart Clinic Hub automates appointments, patient records, billing,
              and communications — so you can focus on what matters most:{" "}
              <strong className="text-slate-800 font-semibold">
                patient care
              </strong>
              .
            </p>

            {/* Badge pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-slate-600 shadow-sm"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group"
                aria-label="Start your free 14-day trial — no credit card required"
              >
                Start Free Trial
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-gray-50 text-slate-800 font-semibold text-base rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
                aria-label="Watch a demo of Smart Clinic Hub"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" />
                </svg>
                Watch Demo
              </a>
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="relative lg:block">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main dashboard card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Header bar */}
                <div className="bg-gradient-to-r from-sky-500 to-emerald-500 px-6 py-4 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/40" />
                    <div className="w-3 h-3 rounded-full bg-white/40" />
                    <div className="w-3 h-3 rounded-full bg-white/40" />
                  </div>
                  <div className="flex-1 bg-white/20 rounded-lg h-6 flex items-center px-3">
                    <span className="text-white/80 text-xs">
                      app.smartclinichub.com/dashboard
                    </span>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6">
                  {/* Today overview */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Today&apos;s Overview
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {
                          label: "Appointments",
                          value: "24",
                          color: "sky",
                          icon: "📅",
                        },
                        {
                          label: "Patients",
                          value: "18",
                          color: "emerald",
                          icon: "👤",
                        },
                        {
                          label: "Revenue",
                          value: "$4.2K",
                          color: "violet",
                          icon: "💰",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="bg-slate-50 rounded-xl p-3 text-center"
                        >
                          <div className="text-xl mb-1" aria-hidden="true">
                            {item.icon}
                          </div>
                          <div className="text-lg font-bold text-slate-800">
                            {item.value}
                          </div>
                          <div className="text-xs text-slate-500">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming appointments */}
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Upcoming Appointments
                    </p>
                    <div className="space-y-2">
                      {[
                        {
                          name: "Sarah Johnson",
                          time: "9:00 AM",
                          type: "General Checkup",
                          status: "Confirmed",
                          statusColor: "emerald",
                        },
                        {
                          name: "Michael Chen",
                          time: "10:30 AM",
                          type: "Follow-up",
                          status: "Pending",
                          statusColor: "amber",
                        },
                        {
                          name: "Emily Davis",
                          time: "11:15 AM",
                          type: "Consultation",
                          status: "Confirmed",
                          statusColor: "emerald",
                        },
                      ].map((appt) => (
                        <div
                          key={appt.name}
                          className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {appt.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-800 truncate">
                              {appt.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {appt.time} · {appt.type}
                            </p>
                          </div>
                          <span
                            className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                              appt.statusColor === "emerald"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {appt.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3 max-w-48"
                aria-hidden="true"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">✅</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    Claim Submitted
                  </p>
                  <p className="text-xs text-slate-500">Insurance approved</p>
                </div>
              </div>

              {/* Floating stat card */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3"
                aria-hidden="true"
              >
                <p className="text-xs text-slate-500 mb-1">No-show Rate</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-slate-800">↓ 68%</span>
                  <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                    vs avg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white shadow-sm"
            >
              <div className="text-3xl font-extrabold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
