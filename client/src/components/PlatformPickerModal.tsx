import { CheckCircleIcon, ExternalLinkIcon, XIcon } from "lucide-react";
import { PLATFORMS } from "../assets/assets";

interface PlatformPickerModalProps {
  connectedIds: string[];
  connecting: string | null;
  onClose: () => void;
  onConnect: (platformId: string) => void;
}

const PlatformPickerModal = ({
  connectedIds,
  connecting,
  onClose,
  onConnect,
}: PlatformPickerModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-[0_0_60px_rgba(0,0,0,0.6)]">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/70 px-6 py-4">
          <h3 className="font-medium text-white">
            Choose a Platform
          </h3>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-white"
          >
            <XIcon className="size-4" />
          </button>
        </div>

        {/* Platform List */}
        <div className="flex flex-col gap-2 p-6">
          {PLATFORMS.map((p) => {
            const isConnected = connectedIds.includes(p.id);
            const isConnecting = connecting === p.id;

            return (
              <button
                key={p.id}
                disabled={isConnected || isConnecting}
                onClick={() => onConnect(p.id)}
                className={`group flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-200 ${
                  isConnected
                    ? "cursor-default border-lime-accent/20 bg-lime-accent/5"
                    : "cursor-pointer border-zinc-800 bg-zinc-900 hover:border-lime-accent/40 hover:bg-zinc-800"
                } ${
                  isConnecting
                    ? "opacity-60"
                    : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex size-10 items-center justify-center rounded-xl ${
                    isConnected
                      ? "bg-lime-accent/10"
                      : "bg-zinc-950"
                  }`}
                >
                  <p.icon
                    className={`size-5 transition-colors ${
                      isConnected
                        ? "text-lime-accent"
                        : "text-zinc-400 group-hover:text-lime-accent"
                    }`}
                  />
                </div>

                {/* Label */}
                <div className="min-w-0 flex-1">
                  <div
                    className={`text-sm font-medium ${
                      isConnected
                        ? "text-lime-accent"
                        : "text-white"
                    }`}
                  >
                    {p.name}
                  </div>

                  <div className="truncate text-xs text-zinc-500">
                    {isConnected
                      ? "Already connected"
                      : p.description}
                  </div>
                </div>

                {/* Status */}
                {isConnected && (
                  <CheckCircleIcon className="size-4 shrink-0 text-lime-accent" />
                )}

                {isConnecting && (
                  <div className="size-4 shrink-0 animate-spin rounded-full border-2 border-lime-accent border-t-transparent" />
                )}

                {!isConnected && !isConnecting && (
                  <ExternalLinkIcon className="size-3.5 shrink-0 text-zinc-600 transition-colors group-hover:text-lime-accent" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformPickerModal;