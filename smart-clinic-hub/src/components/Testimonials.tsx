const testimonials = [
  {
    name: "Dr. Amina Hassan",
    role: "Medical Director",
    clinic: "Sunrise Family Clinic",
    avatar: "AH",
    rating: 5,
    text: "Smart Clinic Hub completely transformed how we run our practice. Appointment no-shows dropped by 72% in the first month, and our billing cycle time was cut in half. I can't imagine going back.",
    color: "sky",
  },
  {
    name: "Dr. James Okonkwo",
    role: "General Practitioner",
    clinic: "CityMed Health Center",
    avatar: "JO",
    rating: 5,
    text: "The EHR system is incredibly intuitive. My staff was fully trained within a day, and patient data migration was handled completely by the Smart Clinic Hub team. Outstanding service.",
    color: "emerald",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Clinic Owner",
    clinic: "Wellness Plus Clinic",
    avatar: "PS",
    rating: 5,
    text: "Managing 3 clinic branches used to be a nightmare. Now I get a bird's-eye view of all locations from one dashboard. Revenue is up 35% since switching to Smart Clinic Hub.",
    color: "violet",
  },
  {
    name: "Nurse Sarah Lim",
    role: "Head of Operations",
    clinic: "PrimeCare Diagnostic Center",
    avatar: "SL",
    rating: 5,
    text: "The patient communication tools are a game-changer. Automated reminders, follow-ups, and secure messaging — all from one inbox. Our patient satisfaction scores went through the roof.",
    color: "amber",
  },
  {
    name: "Dr. Carlos Mendez",
    role: "Specialist Physician",
    clinic: "Advanced Medical Associates",
    avatar: "CM",
    rating: 5,
    text: "Insurance billing used to consume 3-4 hours of admin work daily. Smart Clinic Hub automated the entire workflow. Claims get submitted in seconds, not hours. The ROI was immediate.",
    color: "rose",
  },
  {
    name: "Dr. Fatima Al-Rashid",
    role: "Pediatric Clinic Director",
    clinic: "KidsFirst Health Clinic",
    avatar: "FA",
    rating: 5,
    text: "The analytics dashboard gives us insights we never had before. We can see peak appointment times, revenue breakdowns, and staff performance all in real-time. Highly recommend.",
    color: "indigo",
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  sky: { bg: "bg-sky-500", text: "text-sky-600" },
  emerald: { bg: "bg-emerald-500", text: "text-emerald-600" },
  violet: { bg: "bg-violet-500", text: "text-violet-600" },
  amber: { bg: "bg-amber-500", text: "text-amber-600" },
  rose: { bg: "bg-rose-500", text: "text-rose-600" },
  indigo: { bg: "bg-indigo-500", text: "text-indigo-600" },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "#f59e0b" : "none"}
          stroke={i < rating ? "#f59e0b" : "#d1d5db"}
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 text-sm font-semibold rounded-full border border-amber-200 mb-4">
            Customer Stories
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight"
          >
            Loved by Clinics{" "}
            <span className="gradient-text">Around the World</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Hear from healthcare providers who transformed their practice with
            Smart Clinic Hub.
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 bg-amber-50 px-5 py-3 rounded-2xl border border-amber-200">
            <StarRating rating={5} />
            <span className="text-slate-700 font-semibold">4.9/5</span>
            <span className="text-slate-500 text-sm">from 312 reviews</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => {
            const colors = colorMap[t.color];
            return (
              <article
                key={t.name}
                className="card-hover bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col"
              >
                {/* Quote icon */}
                <div className="text-sky-200 mb-4" aria-hidden="true">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stars */}
                <StarRating rating={t.rating} />

                {/* Text */}
                <blockquote className="mt-4 flex-1">
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                  <div
                    className={`w-11 h-11 rounded-full ${colors.bg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.role} · {t.clinic}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Brand logos strip */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-8">
            Trusted by clinics at
          </p>
          <div
            className="flex flex-wrap justify-center items-center gap-8 opacity-40"
            aria-label="Partner organizations"
          >
            {[
              "HealthFirst Group",
              "MedNetwork",
              "CareUnited",
              "PrimeClinics",
              "MedBridge",
            ].map((brand) => (
              <span
                key={brand}
                className="text-slate-700 font-bold text-lg tracking-tight"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
