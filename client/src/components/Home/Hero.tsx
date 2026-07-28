import { Link } from "react-router-dom";
import { ArrowRightIcon, DotIcon } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-primary">
            {/* Subtle grid */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(215,255,47,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(215,255,47,0.12)_1px,transparent_1px)] bg-[size:56px_56px]" />

            {/* Red soft glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[560px] bg-[radial-gradient(ellipse_at_center,rgba(215,255,47,0.15)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-12 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#15170C] border border-lime-800 text-[#CAF02D] text-sm px-3.5 py-1.5 rounded-full mb-8">
                    <span className="size-1.5 bg-[#CAF02D] rounded-full" />
                    AI-Powered Social Media Automation
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white">
                    Schedule smarter.
                    <br />
                    <span className="text-lime-accent italic">Grow faster.</span>
                </h1>

                {/* Subheadline */}
                <p className="mt-7 text-gray-300 font-inter max-w-2xl mx-auto">Postify lets you create, schedule, and auto-engage across all your social platforms — powered by AI that writes your captions and replies for you.</p>

                {/* CTAs */}
                <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link to="/login" className="bg-lime-accent text-black font-inter font-semibold rounded-full font-medium hover:bg-lime-400 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(239,68,68,0.35)] inline-flex items-center gap-2 text-[15px] px-8 py-3.5 w-full sm:w-auto justify-center transition-all">
                        Start for free <ArrowRightIcon className="size-4" />
                    </Link>
                    <a href="#how-it-works" className="bg-transparent font-inter font-semibold text-white border-[1.5px] border-white/20 rounded-full font-medium hover:bg-black/5 hover:border-black/20 inline-flex items-center gap-2 text-[15px] px-8 py-3.5 w-full sm:w-auto backdrop-blur justify-center transition-all">
                        See how it works
                    </a>
                </div>

                <p className="mt-5 font-inter text-xs text-gray-400">No credit card required · Free forever plan available</p>
            </div>

            {/* Dashboard mockup */}
            <div className="relative max-w-5xl mx-auto px-5 sm:px-8 pb-0">
                <div className="rounded-t-2xl overflow-hidden border border-gray-500 border-b-0 bg-zinc-900 shadow-2xl">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-950">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />

                        <div className="flex-1 mx-4 h-5 max-w-xs rounded-md bg-zinc-800" />
                    </div>

                    {/* Mock content */}
                    <div className="p-6 bg-zinc-900">
                        {/* Stat row */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                            {[
                                { val: "12", label: "Scheduled" },
                                { val: "48", label: "Published" },
                                { val: "4", label: "Accounts" },
                                { val: "3", label: "AI Rules" },
                            ].map((s) => (
                                <div
                                    key={s.label}
                                    className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition-all duration-300 hover:border-lime-400/40 hover:bg-zinc-900"
                                >
                                    <div className="text-2xl font-bold text-white tabular-nums">
                                        {s.val}
                                    </div>

                                    <div className="mt-1 text-xs text-zinc-500">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Activity */}
                        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                            <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                                Recent Activity
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        text: "Post published to LinkedIn & Twitter",
                                        time: "2m ago",
                                    },
                                    {
                                        text: "AI replied to 3 comments",
                                        time: "15m ago",
                                    },
                                    {
                                        text: "New post scheduled for tomorrow 9am",
                                        time: "1h ago",
                                    },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-center gap-3">
                                        <DotIcon className="size-5 text-lime-400" />

                                        <span className="flex-1 text-sm text-zinc-300">
                                            {item.text}
                                        </span>

                                        <span className="shrink-0 text-xs text-zinc-500">
                                            {item.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}