"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Smart Clinic Hub?",
    answer:
      "Smart Clinic Hub is an all-in-one clinic management platform that automates appointment scheduling, electronic health records (EHR), billing, insurance claims, and patient communications — helping clinics operate more efficiently and focus on delivering better patient care.",
  },
  {
    question: "Is Smart Clinic Hub HIPAA compliant?",
    answer:
      "Yes, Smart Clinic Hub is fully HIPAA compliant. All patient data is encrypted at rest (AES-256) and in transit (TLS 1.3) using enterprise-grade security standards. We conduct regular security audits and penetration tests to ensure your data is always protected.",
  },
  {
    question: "Can I try Smart Clinic Hub for free?",
    answer:
      "Absolutely! We offer a 14-day free trial with full access to all features on your selected plan. No credit card is required to start. At the end of the trial, you can choose a plan or your account will simply be paused — your data is never deleted.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most clinics are fully set up and live within 1-3 business days. For Starter and Professional plans, our guided onboarding wizard takes about 30 minutes. For Enterprise clients, our dedicated team manages the entire onboarding, including data migration, custom integrations, and staff training.",
  },
  {
    question: "Does Smart Clinic Hub support multiple clinic locations?",
    answer:
      "Yes! Smart Clinic Hub's Enterprise plan supports unlimited clinic locations, allowing you to manage schedules, staff, billing, and patient records for all your branches from a single unified dashboard — with granular access controls for each location.",
  },
  {
    question: "How does Smart Clinic Hub handle billing and insurance claims?",
    answer:
      "Smart Clinic Hub includes an integrated billing module with automated insurance claim submission, real-time eligibility verification, claim status tracking, and payment reconciliation. Claims can be submitted with one click, and you receive instant notifications on approval or rejection status.",
  },
  {
    question: "Can I migrate my existing patient data?",
    answer:
      "Yes, we support data migration from most popular EHR and clinic management systems including AthenaHealth, DrChrono, Kareo, SimplePractice, and others. Our migration team handles the process at no additional cost, ensuring zero data loss.",
  },
  {
    question: "What integrations does Smart Clinic Hub support?",
    answer:
      "Smart Clinic Hub integrates with major healthcare platforms including lab systems, pharmacy networks, insurance portals, payment gateways (Stripe, Square), telehealth tools (Zoom Health, Doxy.me), and communication platforms (Twilio, SendGrid). Custom API integrations are available for Enterprise plans.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes, Smart Clinic Hub has iOS and Android apps for both clinic staff and patients. The staff app allows managing appointments, viewing patient records, and processing billing on the go. The patient app enables booking, appointment tracking, and secure messaging with their provider.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support with a response time of under 24 hours. Professional plans include priority chat and email support (under 4 hours). Enterprise plans include a dedicated account manager with 24/7 phone, chat, and email support, plus an SLA guarantee.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const id = `faq-${question.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`;

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span className="text-slate-900 font-semibold text-base leading-snug">
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? "bg-sky-500 text-white rotate-45"
              : "bg-slate-100 text-slate-600"
          }`}
          aria-hidden="true"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </button>

      <div
        id={id}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        role="region"
        aria-labelledby={`${id}-btn`}
      >
        <div className="px-6 pb-5">
          <div className="h-px bg-gray-100 mb-4" aria-hidden="true" />
          <p className="text-slate-600 text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full border border-slate-200 mb-4">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight"
          >
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-slate-600">
            Got a question that&apos;s not answered here? Contact our team at{" "}
            <a
              href="mailto:support@smartclinichub.com"
              className="text-sky-600 hover:text-sky-700 font-medium"
            >
              support@smartclinichub.com
            </a>
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
