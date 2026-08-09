import { StarIcon } from "lucide-react";

const testimonials = [
    {
        name: "Sarah K.",
        role: "Marketing Manager",
        avatar: "S",
        avatarBg: "from-red-400 to-pink-400",
        text: "Postify has saved our team 10+ hours a week. The AI composer is genuinely impressive — it writes content that sounds like us.",
    },
    {
        name: "Marcus L.",
        role: "Indie Creator",
        avatar: "M",
        avatarBg: "from-violet-400 to-purple-500",
        text: "I used to dread posting. Now I queue up a whole week of content in 20 minutes. The smart scheduling feature alone is worth it.",
    },
    {
        name: "Priya D.",
        role: "Startup Founder",
        avatar: "P",
        avatarBg: "from-sky-400 to-blue-500",
        text: "Finally a scheduler that's beautiful AND powerful. The clean dashboard makes it easy to see exactly what's going out and when.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-primary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <div className="mb-6 inline-flex items-center gap-1.5 bg-lime-accent/10 border border-lime-accent/15 text-lime-accent text-[11px] font-medium tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full">
                        <StarIcon className="size-3 " />
                        Testimonials
                    </div>
                    <h2 className="font-serif font-medium text-4xl sm:text-5xl leading-tight text-white">
                        Loved by <span className="text-lime-accent ">creators &amp; teams</span>
                    </h2>
                    <p className="mt-5 text-zinc-400 font-inter max-w-md mx-auto">Join thousands of people who automate their social media with Postify.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {testimonials.map((t, i) => (
                    <div key={i} className="group flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-accent/50 hover:bg-zinc-900 hover:shadow-[0_0_30px_rgba(132,204,22,0.10)]" >
                      {/* Quote */}
                      <p className="flex-1 text-sm leading-7 text-zinc-400">
                        "{t.text}"
                      </p>
                      {/* Author */}
                      <div className="flex items-center gap-3 border-t border-zinc-800 pt-4">
                        <div className={`size-10 rounded-full bg-linear-to-br ${t.avatarBg} flex items-center justify-center text-sm font-semibold text-white shadow-md`} >
                          {t.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            {t.name}
                          </div>
                          <div className="text-sm text-zinc-500">
                            {t.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </section>
    );
}