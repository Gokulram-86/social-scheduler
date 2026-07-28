import { Link } from "react-router-dom";

const footerLinks = {
    Product: ["Features", "How it works", "Pricing", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        {/* Top */}
        <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" onClick={() => scrollTo(0, 0)} className="mb-5 inline-flex items-center gap-3">
              <img src="/logo.svg" alt="logo" className="size-7 bg-lime-accent rounded p-0.5" />
              <span className="text-xl lg:text-2xl font-medium font-logo text-white">
                Postify
              </span>
            </Link>
            <p className="max-w-sm leading-7 text-zinc-400 font-inter">
              The AI-powered social media scheduler that helps creators,
              startups, and marketing teams grow consistently with less effort.
            </p>
          </div>
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-5 text-xs font-inter font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#features"
                      className="text-sm font-inter text-zinc-400 transition-colors duration-200 hover:text-lime-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-800 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Postify. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-zinc-500 transition-colors hover:text-lime-accent" >
              Privacy Policy
            </a>

            <a href="#" className="text-sm text-zinc-500 transition-colors hover:text-lime-accent" >
              Terms of Service
            </a>
            <Link to="/login" className="text-sm font-medium text-zinc-400 transition-colors hover:text-lime-accent" >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}