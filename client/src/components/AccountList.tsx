import {
  AlertCircleIcon,
  CheckCircleIcon,
  PlusIcon,
  UnplugIcon,
} from "lucide-react";
import { PLATFORMS } from "../assets/assets";

interface AccountListProps {
  accounts: any[];
  onDisconnect: (accountId: string) => Promise<void>;
}

const AccountList = ({
  accounts,
  onDisconnect,
}: AccountListProps) => {
  const handleDisconnect = async (accountId: string) => {
    const confirm = window.confirm(
      "Are you sure you want to disconnect this Account?"
    );

    if (!confirm) return;

    await onDisconnect(accountId);
  };

  if (accounts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-800 bg-zinc-950 px-6 py-20">
        <div className="mb-4 flex size-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
          <PlusIcon className="size-6 text-zinc-500" />
        </div>

        <p className="text-lg font-medium text-white">
          No accounts connected
        </p>

        <p className="mt-1 max-w-xs text-center text-sm text-zinc-500">
          Connect your first social platform to start scheduling and
          automating your content.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {accounts.map((account, index) => {
        const meta = PLATFORMS.find(
          (p) => p.id === account.platform
        );

        if (!meta) return null;

        return (
          <div
            key={index}
            className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-all duration-300 hover:border-lime-accent/40 hover:bg-zinc-900"
          >
            {/* Platform Icon */}
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
              <meta.icon className="size-6 text-zinc-400 transition-colors group-hover:text-lime-accent" />
            </div>

            {/* Account Info */}
            <div className="min-w-0 flex-1">
              <div className="truncate font-medium text-white">
                {account.handle}
              </div>

              <div className="mt-0.5 text-sm text-zinc-500">
                {meta.name}
              </div>
            </div>

            {/* Status */}
            <div className="flex shrink-0 items-center gap-1.5">
              {account.status === "connected" ? (
                <>
                  <CheckCircleIcon className="size-4 text-lime-accent" />
                  <span className="text-xs text-lime-accent">
                    Connected
                  </span>
                </>
              ) : (
                <>
                  <AlertCircleIcon className="size-4 text-amber-400" />
                  <span className="text-xs text-amber-400">
                    Disconnected
                  </span>
                </>
              )}
            </div>

            {/* Disconnect */}
            <button
              onClick={() => handleDisconnect(account._id)}
              title="Disconnect account"
              className="ml-2 rounded-lg p-2 text-zinc-600 transition-all hover:bg-red-500/10 hover:text-red-400"
            >
              <UnplugIcon className="size-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AccountList;