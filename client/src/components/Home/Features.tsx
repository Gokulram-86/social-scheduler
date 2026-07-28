import { CalendarDaysIcon, Wand2Icon, Share2Icon, ZapIcon, BarChart3Icon, HashIcon } from "lucide-react";

const features = [
    {
        icon: CalendarDaysIcon,
        title: "Smart Scheduling",
        description: "Queue posts across all platforms with a single click. Set it once and let us handle the rest.",
        color: "bg-red-50 text-red-500",
    },
    {
        icon: Wand2Icon,
        title: "AI Content Generator",
        description: "Generate on-brand captions and stunning images with our built-in AI. Never stare at a blank page again.",
        color: "bg-red-50 text-red-500",
    },

    {
        icon: BarChart3Icon,
        title: "Activity Dashboard",
        description: "Get a bird's eye view of all published posts, scheduled content, and engagement activity in one place.",
        color: "bg-red-50 text-red-500",
    },
    {
        icon: Share2Icon,
        title: "Multi-Platform",
        description: "Connect Twitter, LinkedIn, Facebook, and Instagram. Post everywhere from one unified workspace.",
        color: "bg-red-50 text-red-500",
    },
    {
        icon: ZapIcon,
        title: "Instant Publishing",
        description: "Need to go live now? Publish immediately or schedule for peak engagement times with full timezone support.",
        color: "bg-red-50 text-red-500",
    },
    {
        icon: HashIcon,
        title: "Hashtag Suggestions",
        description: "Get AI-powered hashtag suggestions to reach a wider audience.",
        color: "bg-red-50 text-red-500",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-primary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-16">
                <div className="mb-6 inline-flex items-center gap-1.5 bg-[#15170C] border border-lime-800 text-[#CAF02D] text-[11px] font-medium tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full">
                  <ZapIcon className="size-3" />
                  Everything you need
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl font-medium leading-tight text-white">
                  Automate your entire
                  <br />
                  <span className="text-lime-accent italic">social media workflow</span>
                </h2>
                <p className="mt-5 font-inter text-gray-400 max-w-xl mx-auto leading-relaxed">From content creation to scheduling — Postify handles it all so you can focus on what matters most.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((f) => (
                  <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-accent/60 hover:bg-zinc-900 hover:shadow-[0_0_30px_rgba(132,204,22,0.12)]" >
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className={`relative z-10 mb-5 flex size-12 items-center justify-center rounded-xl ${f.color} transition-transform duration-300 group-hover:scale-110`} >
                      <f.icon className="size-6" />
                    </div>
                    <h3 className="relative z-10 mb-2 text-xl font-semibold font-inter text-white">
                      {f.title}
                    </h3>

                    <p className="relative z-10 text-sm leading-7 font-inter text-zinc-400">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
        </section>
    );
}