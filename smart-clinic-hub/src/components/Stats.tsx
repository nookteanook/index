const stats = [
  {
    value: "500+",
    label: "Active Clinics",
    description: "Healthcare providers running their practice on Smart Clinic Hub",
    icon: "🏥",
  },
  {
    value: "50,000+",
    label: "Patients Managed Monthly",
    description: "Patient records, appointments, and communications handled",
    icon: "👥",
  },
  {
    value: "68%",
    label: "Reduction in No-Shows",
    description: "Average improvement in appointment attendance with automated reminders",
    icon: "📉",
  },
  {
    value: "4.9/5",
    label: "Customer Satisfaction",
    description: "Average rating from 312+ verified clinic reviews",
    icon: "⭐",
  },
  {
    value: "40%",
    label: "Time Saved on Admin",
    description: "Average reduction in administrative workload per clinic",
    icon: "⏱️",
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
    description: "Enterprise-grade reliability with SLA-backed uptime guarantee",
    icon: "🔒",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #0ea5e9 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-sky-500/20 text-sky-400 text-sm font-semibold rounded-full border border-sky-500/30 mb-4">
            By the Numbers
          </span>
          <h2
            id="stats-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight"
          >
            Real Results for Real Clinics
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            These numbers represent actual outcomes from clinics using Smart
            Clinic Hub every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:bg-white/8 transition-colors"
            >
              <div className="text-3xl mb-3" aria-hidden="true">
                {stat.icon}
              </div>
              <div className="text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sky-400 font-semibold text-sm mb-2">
                {stat.label}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
