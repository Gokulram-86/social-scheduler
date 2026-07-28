import { CheckIcon, CircleCheckBigIcon } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
    {
        name: "Starter",
        price: "Free",
        period: "",
        description: "Perfect for creators just getting started with social media automation.",
        features: ["2 social accounts", "10 scheduled posts/month", "AI content (5 credits/mo)", "Basic dashboard"],
        cta: "Get Started Free",
        highlight: false,
    },
    {
        name: "Pro",
        price: "$29",
        period: "/month",
        description: "Everything you need to grow and automate your social presence.",
        features: ["Unlimited accounts", "Unlimited scheduling", "AI content (200 credits/mo)", "Priority support"],
        cta: "Start 14-day Free Trial",
        highlight: true,
    },
    {
        name: "Agency",
        price: "$79",
        period: "/month",
        description: "For teams and agencies managing multiple brands at scale.",
        features: ["Everything in Pro", "5 team members", "Unlimited AI credits", "Custom AI personas", "Dedicated support"],
        cta: "Contact Sales",
        highlight: false,
    },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-primary">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    {/* Heading */}
    <div className="mb-16 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-accent/20 bg-lime-accent/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-lime-accent">
        <CircleCheckBigIcon className="size-3" />
        Simple Pricing
      </div>

      <h2 className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl">
        Plans for every stage
        <br />
        <span className="italic text-lime-accent">
          of growth
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-md text-zinc-400">
        Start free, upgrade when you're ready. Cancel anytime. No hidden fees.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {pricingPlans.map((plan) => (
        <div
          key={plan.name}
          className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300
          ${
            plan.highlight
              ? "border-lime-accent/50 bg-zinc-900 shadow-[0_0_40px_rgba(132,204,22,0.15)] scale-105"
              : "border-zinc-800 bg-zinc-950 hover:border-lime-accent/40 hover:bg-zinc-900"
          }`}
        >
          {plan.highlight && (
            <div className="absolute left-1/2 -top-4 -translate-x-1/2 rounded-full bg-lime-accent px-4 py-1.5 text-xs font-bold text-black">
              Most Popular
            </div>
          )}

          <div>
            <p
              className={`mb-2 text-sm font-semibold ${
                plan.highlight
                  ? "text-lime-accent"
                  : "text-zinc-400"
              }`}
            >
              {plan.name}
            </p>

            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold text-white">
                {plan.price}
              </span>

              <span className="mb-1 text-zinc-500">
                {plan.period}
              </span>
            </div>

            <p className="mt-3 text-sm leading-7 text-zinc-400">
              {plan.description}
            </p>
          </div>

          <ul className="my-8 space-y-3">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-zinc-300"
              >
                <div className="flex size-5 items-center justify-center rounded-full bg-lime-accent/10">
                  <CheckIcon className="size-3 text-lime-accent" />
                </div>

                {feature}
              </li>
            ))}
          </ul>

          <Link
            to="/#"
            className={`mt-auto rounded-full px-6 py-3 text-center font-semibold transition-all duration-300
            ${
              plan.highlight
                ? "bg-lime-accent text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(132,204,22,0.35)]"
                : "border border-zinc-700 bg-zinc-900 text-white hover:border-lime-accent hover:bg-zinc-800"
            }`}
          >
            {plan.cta}
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}