import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MailIcon,
  LockIcon,
  ArrowRightIcon,
  User2Icon,
} from "lucide-react";

export default function Login() {
  const [loginState, setLoginState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 flex items-center justify-center px-5 py-10">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-lime-accent/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-lime-accent/5 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="hidden lg:block">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Logo"
              className="size-10 bg-lime-accent rounded drop-shadow-[0_0_12px_rgba(132,204,22,0.25)]"
            />
            <h1 className="text-3xl font-logo  text-white">
              Postify
            </h1>
          </Link>

          <h2 className="mt-10 font-inter text-5xl leading-tight font-medium text-white">
            Grow your audience
            <br />
            <span className="italic text-lime-accent">
              automatically.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400 font-inter">
            Schedule posts, automate engagement, and manage every social media
            account from one beautiful dashboard powered by AI.
          </p>

          <div className="mt-10 space-y-5">
            {[
              "Schedule content across multiple platforms",
              "AI-powered captions & comment replies",
              "Analytics that help you grow faster",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-full bg-lime-accent/10">
                  <ArrowRightIcon className="size-4 text-lime-accent" />
                </div>

                <span className="text-zinc-300 font-inter">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Login Card */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
            <div className="flex flex-col items-center mb-8">
              <Link to="/" className="flex items-center gap-2">
                <img src="/logo.svg" alt="Logo" className="size-7 bg-lime-accent rounded" />

                <h1 className="text-2xl font-logo font-semibold text-white">
                  Postify
                </h1>
              </Link>

              <p className="mt-2 text-sm text-zinc-400 font-inter">
                {loginState
                  ? "Sign in to your dashboard"
                  : "Create your free account"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!loginState && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Name
                  </label>

                  <div className="relative">
                    <User2Icon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />

                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-full border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-lime-accent focus:ring-2 focus:ring-lime-accent/20"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Email
                </label>

                <div className="relative">
                  <MailIcon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />

                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-lime-accent focus:ring-2 focus:ring-lime-accent/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Password
                </label>

                <div className="relative">
                  <LockIcon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />

                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-full border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-lime-accent focus:ring-2 focus:ring-lime-accent/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-lime-accent py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(132,204,22,0.35)] disabled:opacity-60"
              >
                {loading ? (
                  "Please wait..."
                ) : (
                  <>
                    {loginState ? "Sign In" : "Create Account"}
                    <ArrowRightIcon className="size-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-zinc-500">
              {loginState ? (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setLoginState(false)}
                    className="font-medium text-lime-accent hover:text-lime-300"
                  >
                    Create one
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setLoginState(true)}
                    className="font-medium text-lime-accent hover:text-lime-300"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}