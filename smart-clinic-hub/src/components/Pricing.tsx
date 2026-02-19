const plans = [
  {
    name: "Starter",
    price: 49,
    period: "month",
    description:
      "Perfect for solo practitioners and small clinics just getting started.",
    features: [
      "Up to 2 doctors / staff",
      "Appointment scheduling",
      "Basic EHR records",
      "Patient communication (SMS + Email)",
      "Online booking page",
      "Basic analytics dashboard",
      "Email support",
    ],
    notIncluded: [
      "Insurance billing automation",
      "Multi-location management",
      "Custom integrations",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: false,
    color: "slate",
  },
  {
    name: "Professional",
    price: 99,
    period: "month",
    description:
      "For growing clinics that need full automation and advanced tools.",
    features: [
      "Up to 10 doctors / staff",
      "Smart appointment scheduling (AI)",
      "Full EHR with clinical notes",
      "Automated billing & insurance claims",
      "Patient communication hub",
      "Advanced analytics & reports",
      "Telemedicine integration",
      "Priority email & chat support",
      "Custom booking page branding",
    ],
    notIncluded: [
      "Multi-location management",
      "Dedicated account manager",
    ],
    cta: "Start Free Trial",
    popular: true,
    color: "sky",
  },
  {
    name: "Enterprise",
    price: null,
    period: "month",
    description:
      "For large clinics and hospital groups with multiple locations and custom needs.",
    features: [
      "Unlimited doctors / staff",
      "Multi-location management",
      "Full EHR + lab integration",
      "Advanced billing & revenue cycle",
      "Custom workflows & integrations",
      "Dedicated account manager",
      "24/7 phone, email & chat support",
      "SLA guarantee",
      "On-premise deployment option",
      "Custom onboarding & training",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
    color: "slate",
  },
];

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#10b981"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="flex-shrink-0 mt-0.5"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const XIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#d1d5db"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="flex-shrink-0 mt-0.5"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28 bg-slate-50"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-50 text-sky-600 text-sm font-semibold rounded-full border border-sky-200 mb-4">
            Transparent Pricing
          </span>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight"
          >
            Simple Plans,{" "}
            <span className="gradient-text">No Hidden Fees</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            All plans include a 14-day free trial. No credit card required.
            Cancel anytime.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl border shadow-sm overflow-hidden ${
                plan.popular
                  ? "border-sky-400 shadow-sky-100 shadow-lg ring-2 ring-sky-400/30 scale-105"
                  : "border-gray-200"
              }`}
              aria-label={`${plan.name} plan${plan.popular ? " — Most Popular" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-xs font-bold text-center py-2 tracking-wider uppercase">
                  Most Popular
                </div>
              )}

              <div className="p-7">
                {/* Plan name & description */}
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-7">
                  {plan.price !== null ? (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-extrabold text-slate-900">
                        ${plan.price}
                      </span>
                      <span className="text-slate-500 mb-1">/{plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-extrabold text-slate-900">
                      Custom
                    </div>
                  )}
                  <p className="text-xs text-slate-400 mt-1">
                    Billed monthly · Annual plans save 20%
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 mb-7 ${
                    plan.popular
                      ? "bg-sky-500 hover:bg-sky-600 text-white shadow-md hover:shadow-lg"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                  aria-label={`${plan.cta} — ${plan.name} plan`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <ul className="space-y-3" aria-label={`${plan.name} plan features`}>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <XIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <p className="text-slate-700 text-sm font-medium">
              <strong className="text-slate-900">30-day money-back guarantee.</strong>{" "}
              Not satisfied? We&apos;ll refund you in full, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
