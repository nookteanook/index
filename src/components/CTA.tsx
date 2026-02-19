const trustItems = [
  { icon: "🔒", label: "HIPAA Compliant" },
  { icon: "🛡️", label: "SOC 2 Certified" },
  { icon: "⚡", label: "99.9% Uptime SLA" },
  { icon: "🌍", label: "24/7 Support" },
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-sky-600 via-sky-500 to-emerald-500"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-sm">
          <span
            className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"
            aria-hidden="true"
          />
          Start your free trial today — no credit card needed
        </div>

        <h2
          id="cta-heading"
          className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight"
        >
          Ready to Transform
          <br />
          Your Clinic?
        </h2>

        <p className="text-xl text-sky-100 leading-relaxed mb-10 max-w-2xl mx-auto">
          Join over 500 healthcare providers who trust Smart Clinic Hub to run
          their practice. Set up in minutes, not months.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-600 font-bold text-base rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 group"
            aria-label="Start your free 14-day trial of Smart Clinic Hub"
          >
            Start Free 14-Day Trial
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
            href="mailto:sales@smartclinichub.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/50 hover:border-white text-white font-semibold text-base rounded-2xl hover:bg-white/10 transition-all duration-200"
            aria-label="Contact our sales team"
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
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Talk to Sales
          </a>
        </div>

        {/* Trust items */}
        <div className="flex flex-wrap justify-center gap-6">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-white/90 text-sm font-medium"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
