import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-primary">
  <div className="max-w-6xl mx-auto px-5 sm:px-8">
    <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 px-8 py-14 sm:px-14 sm:py-20">

      {/* Glow blobs */}
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-lime-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-lime-accent/5 blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="relative text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-lime-accent/20 bg-lime-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-lime-accent">
          Ready to grow?
        </div>

        <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-white sm:text-5xl md:text-6xl">
          Automate your social
          <br />
          <span className="italic text-lime-accent">
            media today
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Join thousands of creators and businesses who schedule posts,
          automate engagement, and grow consistently without spending every day
          glued to another social media tab.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/login"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-accent px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(132,204,22,0.35)] sm:w-auto"
          >
            Get Started Free
            <ArrowRightIcon className="size-4" />
          </Link>

          <a
            href="#pricing"
            className="inline-flex w-full items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-10 py-4 font-medium text-white transition-all duration-300 hover:border-lime-accent hover:bg-zinc-800 sm:w-auto"
          >
            View Pricing
          </a>
        </div>

        <p className="mt-6 text-sm text-zinc-500">
          No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  </div>
</section>
  );
}