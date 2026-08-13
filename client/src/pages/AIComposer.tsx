import { useEffect, useState } from "react";
import { dummyGenerationData, PLATFORMS } from "../assets/assets";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  HistoryIcon,
  Loader2Icon,
  LoaderIcon,
  TimerIcon,
  Wand2Icon,
  XIcon,
} from "lucide-react";

const AIComposer = () => {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("Professional");
  const [generateImage, setGenerateImage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [generations, setGenerations] = useState<any[]>([]);

  // Scheduling state
  const [activeScheduler, setActiveScheduler] = useState<any>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [scheduling, setScheduling] = useState(false);

  const fetchGenerations = async () => {
    setGenerations(dummyGenerationData);
  };

  useEffect(() => {
    fetchGenerations();
  }, []);

  const handleGenerate = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSchedule = async () => {
    setScheduling(true);

    setTimeout(() => {
      setScheduling(false);
    }, 2000);
  };

  const tones = [
    "Professional",
    "Creative",
    "Funny",
    "Minimalist",
    "Excited",
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-12 pb-20 animate-in fade-in duration-700">

      {/* Input Section */}
      <div className="mt-20 space-y-6 text-center">
        <h1 className="text-3xl font-medium tracking-tight text-white">
          What should we create today?
        </h1>

        <div className="group relative mt-12">
          <textarea
            className="h-40 w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-6 text-white placeholder-zinc-500 outline-none transition-all focus:border-lime-accent focus:ring-2 focus:ring-lime-accent/10"
            placeholder="Share your idea... (eg. A post about the launch of our new eco-friendly coffee beans)"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          {/* Bottom controls */}
          <div className="absolute bottom-4 right-3 flex items-center gap-3 text-sm">

            {/* AI Image Toggle */}
            <button
              onClick={() => setGenerateImage(!generateImage)}
              className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-300 transition-colors hover:border-lime-accent/40"
            >
              <span>AI Image</span>

              <div
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ${
                  generateImage
                    ? "bg-lime-accent"
                    : "bg-zinc-700"
                }`}
              >
                <span
                  className={`pointer-events-none size-4 transform translate-y-0.5 rounded-full bg-white transition ${
                    generateImage
                      ? "translate-x-4.5"
                      : "translate-x-0.5"
                  }`}
                />
              </div>
            </button>

            {/* Generate */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="flex items-center gap-2 rounded-lg bg-lime-accent px-4 py-2 font-medium text-black transition-all hover:shadow-[0_0_20px_rgba(132,204,22,0.25)] disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2Icon className="size-4 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  Generate
                  <ArrowRightIcon className="size-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tone Selector */}
        <div className="flex flex-wrap justify-center gap-2">
          {tones.map((t) => (
            <button
              key={t}
              onClick={() => setTone(t)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                tone === t
                  ? "border-lime-accent bg-lime-accent text-black"
                  : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-lime-accent/40 hover:text-zinc-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* AI Generated Posts */}
      <div className="space-y-6 border-t border-zinc-800 pt-12">
        <div className="flex items-center justify-between text-zinc-300">
          <div className="flex items-center gap-2">
            <HistoryIcon className="size-5 text-lime-accent" />

            <h2 className="text-xl font-medium text-white">
              Recent Generations
            </h2>
          </div>

          <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-500">
            {generations.length} total
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {generations.map((gen) => (
            <div
              key={gen._id}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime-accent/40 hover:bg-zinc-900"
            >
              <div className="flex h-full flex-col space-y-4">

                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-zinc-500">
                    {new Date(gen.createdAt).toLocaleString()}
                  </span>

                  <span className="rounded-full border border-lime-accent/20 bg-lime-accent/10 px-2 py-0.5 text-xs text-lime-accent">
                    {gen.tone}
                  </span>
                </div>

                {/* Content */}
                <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {gen.content}
                </p>

                {/* Image */}
                {gen.mediaUrl && (
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                    <img
                      src={gen.mediaUrl}
                      alt="Generated content"
                      className="aspect-video w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                )}

                {/* Schedule */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => setActiveScheduler(gen)}
                    className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 py-2.5 text-xs font-medium text-zinc-300 transition-all hover:border-lime-accent hover:bg-lime-accent hover:text-black"
                  >
                    Schedule Post
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {generations.length === 0 && (
            <div className="col-span-full space-y-3 py-20 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-600">
                <Wand2Icon className="size-6" />
              </div>

              <p className="text-sm text-zinc-500">
                No content generated yet. Try generating some content using
                the AI.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Scheduler Modal */}
      {activeScheduler && (
        <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black/70 p-4 backdrop-blur-md animate-in fade-in duration-300">

          <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-[0_0_60px_rgba(0,0,0,0.6)]">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-8 py-4">
              <h3 className="font-medium text-white">
                Schedule Generation
              </h3>

              <button
                onClick={() => setActiveScheduler(null)}
                className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-white"
              >
                <XIcon className="size-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 space-y-4 overflow-y-auto p-8">

              {/* Prompt */}
              <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-300">
                  {activeScheduler.prompt}
                </p>
              </div>

              {/* Generated Content */}
              <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-300">
                  {activeScheduler.content}
                </p>

                {activeScheduler.mediaUrl && (
                  <img
                    src={activeScheduler.mediaUrl}
                    alt="preview"
                    className="aspect-video w-full rounded-xl border border-zinc-800 object-cover"
                  />
                )}
              </div>
            </div>

            {/* Scheduler Options */}
            <div className="space-y-8 border-t border-zinc-800 bg-zinc-900/70 p-8">

              {/* Platforms */}
              <div className="space-y-6">
                <div>
                  <label className="mb-4 block text-xs uppercase tracking-widest text-zinc-500">
                    Select Channels
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {PLATFORMS.map((p) => {
                      const active = selectedPlatforms.includes(p.id);

                      return (
                        <button
                          key={p.id}
                          onClick={() =>
                            setSelectedPlatforms((prev) =>
                              prev.includes(p.id)
                                ? prev.filter((x) => x !== p.id)
                                : [...prev, p.id]
                            )
                          }
                          className={`rounded-md border p-2.5 text-xs transition-all ${
                            active
                              ? "border-lime-accent bg-lime-accent text-black"
                              : "border-zinc-700 bg-zinc-950 text-zinc-500 hover:border-lime-accent/40 hover:text-zinc-300"
                          }`}
                        >
                          <p.icon className="size-4.5" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date / Time */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <div className="relative">
                    <CalendarIcon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />

                    <input
                      type="date"
                      className="w-full rounded-md border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-white outline-none transition-all focus:border-lime-accent focus:ring-2 focus:ring-lime-accent/10"
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                    />
                  </div>

                  <div className="relative">
                    <ClockIcon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />

                    <input
                      type="time"
                      className="w-full rounded-md border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-white outline-none transition-all focus:border-lime-accent focus:ring-2 focus:ring-lime-accent/10"
                      value={scheduledTime}
                      onChange={(e) => setScheduledTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Schedule Button */}
              <button
                onClick={handleSchedule}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-lime-accent py-3 font-semibold text-black transition-all hover:shadow-[0_0_25px_rgba(132,204,22,0.25)]"
              >
                {scheduling ? (
                  <LoaderIcon className="size-4 animate-spin" />
                ) : (
                  <TimerIcon className="size-4" />
                )}

                Schedule Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIComposer;