import React, { useEffect, useState } from "react";
import { dummyPostsData, PLATFORMS } from "../assets/assets";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  SendIcon,
  XIcon,
} from "lucide-react";

const Scheduler = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [content, setContent] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setPosts(dummyPostsData);
  };

  useEffect(() => {
    (async () => await fetchPosts())();

    const interval = setInterval(async () => await fetchPosts(), 1000);

    return () => clearInterval(interval);
  }, []);

  const scheduled = posts.filter((p) => p.status === "scheduled");
  const published = posts.filter((p) => p.status === "published");

  const togglePlatforms = (id: string) =>
    setSelectedPlatforms((prev) =>
      prev.includes(id)
        ? prev.filter((p) => p !== id)
        : [...prev, id]
    );

  const handleSchedule = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setPosts((prev) => [...prev, dummyPostsData[0]]);
    }, 1000);
  };

  return (
    <div className="flex h-full flex-col gap-6 font-inter lg:flex-row">

      {/* Compose Panel */}
      <div className="w-full shrink-0 lg:w-[460px]">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

          <div className="mb-6 flex items-center gap-2">
            <h2 className="text-lg font-medium text-white">
              Compose Post
            </h2>
          </div>

          <form className="space-y-5" onSubmit={handleSchedule}>

            {/* Platforms */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-zinc-500">
                Platforms
              </label>

              <div className="flex flex-wrap gap-3">
                {PLATFORMS.map((p) => {
                  const active = selectedPlatforms.includes(p.id);

                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => togglePlatforms(p.id)}
                      className={`flex items-center gap-1.5 rounded-md border p-2.5 transition-all duration-150 ${
                        active
                          ? "scale-103 border-lime-accent bg-lime-accent/10 text-lime-accent"
                          : "border-zinc-800 bg-zinc-900 text-zinc-500 hover:border-lime-accent/40 hover:text-zinc-300"
                      }`}
                    >
                      <p.icon className="size-4.5" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-zinc-500">
                Content
              </label>

              <textarea
                required
                rows={5}
                placeholder="What do you want to share today?"
                className="w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-lime-accent focus:ring-2 focus:ring-lime-accent/10"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <div
                className={`mt-1 text-right text-xs font-medium ${
                  content.length > 270
                    ? "text-red-400"
                    : "text-zinc-600"
                }`}
              >
                {content.length}/280
              </div>
            </div>

            {/* Media Upload */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-zinc-500">
                Media (optional)
              </label>

              {mediaFile ? (
                <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                  {mediaFile.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(mediaFile)}
                      alt="preview"
                      className="h-40 w-full object-cover"
                    />
                  ) : (
                    <video
                      src={URL.createObjectURL(mediaFile)}
                      className="h-40 w-full object-cover"
                      controls
                    />
                  )}

                  <button
                    type="button"
                    onClick={() => setMediaFile(null)}
                    className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-lime-accent hover:text-black"
                  >
                    <XIcon className="size-3.5" />
                  </button>
                </div>
              ) : (
                <label className="group flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-zinc-800 bg-zinc-900/50 px-5 py-10 transition-all hover:border-lime-accent/50 hover:bg-lime-accent/5">
                  <span className="text-sm text-zinc-500 transition-colors group-hover:text-lime-accent">
                    Click to upload image or video
                  </span>

                  <input
                    type="file"
                    accept="image/*,video/*"
                    className="hidden"
                    onChange={(e) =>
                      e.target.files?.[0] &&
                      setMediaFile(e.target.files[0])
                    }
                  />
                </label>
              )}
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              {/* Date */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-zinc-500">
                  Date
                </label>

                <div className="relative">
                  <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />

                  <input
                    type="date"
                    required
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition-all focus:border-lime-accent focus:ring-2 focus:ring-lime-accent/10"
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-zinc-500">
                  Time
                </label>

                <div className="relative">
                  <ClockIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />

                  <input
                    type="time"
                    required
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition-all focus:border-lime-accent focus:ring-2 focus:ring-lime-accent/10"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-lime-accent py-3.5 font-semibold text-black transition-all hover:shadow-[0_0_25px_rgba(132,204,22,0.25)] disabled:opacity-60"
            >
              {loading ? (
                <>
                  <div className="size-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                  Scheduling...
                </>
              ) : (
                <>
                  Schedule Post
                  <ArrowRightIcon className="size-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Queue Panel */}
      <div className="flex min-w-0 flex-1 flex-col gap-6">

        {/* Upcoming */}
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">

          <div className="flex items-center gap-2.5 border-b border-zinc-800 bg-zinc-900/50 px-5 py-4">
            <CalendarIcon className="size-4 text-lime-accent" />

            <h3 className="text-sm font-medium text-white">
              Upcoming
            </h3>

            <span className="ml-auto rounded-full border border-zinc-700 bg-zinc-800 px-2 py-0.5 text-xs font-bold text-zinc-300">
              {scheduled.length}
            </span>
          </div>

          <div className="max-h-72 divide-y divide-zinc-800 overflow-y-auto">
            {scheduled.length === 0 ? (
              <div className="py-10 text-center text-sm text-zinc-600">
                No posts scheduled yet
              </div>
            ) : (
              scheduled.map((post) => (
                <div
                  key={post._id}
                  className="px-5 py-4 transition-colors hover:bg-zinc-900"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {post.platforms.map((pl: string) => {
                        const meta = PLATFORMS.find((p) => p.id === pl);

                        return meta ? (
                          <meta.icon
                            key={pl}
                            className="size-3.5 text-zinc-500"
                          />
                        ) : null;
                      })}
                    </div>

                    <div className="flex items-center gap-2">
                      {post.mediaType && (
                        <span className="rounded-md border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 text-xs font-semibold capitalize text-zinc-400">
                          {post.mediaType}
                        </span>
                      )}

                      <span className="text-xs text-zinc-600">
                        {new Date(post.scheduledFor).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <p className="max-w-md line-clamp-2 text-sm text-zinc-400">
                    {post.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Published */}
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">

          <div className="flex items-center gap-2.5 border-b border-zinc-800 bg-zinc-900/50 px-5 py-4">
            <SendIcon className="size-4 text-lime-accent" />

            <h3 className="text-sm font-medium text-white">
              Published
            </h3>

            <span className="ml-auto rounded-full border border-zinc-700 bg-zinc-800 px-2 py-0.5 text-xs font-bold text-zinc-300">
              {published.length}
            </span>
          </div>

          <div className="max-h-72 divide-y divide-zinc-800 overflow-y-auto">
            {published.length === 0 ? (
              <div className="py-10 text-center text-sm text-zinc-600">
                No published posts yet
              </div>
            ) : (
              published.map((post) => (
                <div
                  key={post._id}
                  className="px-5 py-4 transition-colors hover:bg-zinc-900"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {post.platforms.map((pl: string) => {
                        const meta = PLATFORMS.find((p) => p.id === pl);

                        return meta ? (
                          <meta.icon
                            key={pl}
                            className="size-3.5 text-zinc-500"
                          />
                        ) : null;
                      })}
                    </div>

                    <div className="flex items-center gap-2">
                      {post.mediaType && (
                        <span className="rounded-md border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 text-xs font-semibold capitalize text-zinc-400">
                          {post.mediaType}
                        </span>
                      )}

                      <span className="text-xs text-zinc-600">
                        {new Date(post.updatedAt).toLocaleString()}
                      </span>

                      <span className="rounded-full border border-lime-accent/20 bg-lime-accent/10 px-2 py-0.5 text-xs text-lime-accent">
                        Published
                      </span>
                    </div>
                  </div>

                  <p className="max-w-4/5 line-clamp-2 text-sm text-zinc-400">
                    {post.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;