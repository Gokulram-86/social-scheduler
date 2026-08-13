import {
  CalendarDaysIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  UsersIcon,
  Wand2Icon,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) => {
  const { logout, user } = {
    logout: () => {
      window.location.href = "/";
    },
    user: {
      name: "Gokulram",
      email: "gokulramj20@gmail.com",
    },
  };

  const location = useLocation();

  const navItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboardIcon,
      path: "/dashboard",
    },
    {
      name: "Accounts",
      icon: UsersIcon,
      path: "/accounts",
    },
    {
      name: "Scheduler",
      icon: CalendarDaysIcon,
      path: "/schedule",
    },
    {
      name: "AI Composer",
      icon: Wand2Icon,
      path: "/ai-composer",
    },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 flex h-full w-64 transform flex-col border-r border-zinc-800 bg-zinc-950 font-inter transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Logo */}
      <div className="px-6 pb-4 pt-6">
        <div className="flex items-center gap-2 font-logo text-xl font-medium tracking-tight text-white lg:text-2xl">
          <img
            src="/logo.svg"
            alt="logo"
            className="size-7 rounded bg-lime-accent p-0.5"
          />

          Postify
        </div>
      </div>

      {/* Nav Section Label */}
      <div className="px-6 py-3">
        <span className="text-xs uppercase tracking-wider text-zinc-600">
          Menu
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={() => setIsOpen(false)}
              className={`group flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-all duration-150 ${
                isActive
                  ? "border-lime-accent/20 bg-lime-accent/10 text-lime-accent"
                  : "border-transparent text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200"
              }`}
            >
              <item.icon
                className={`size-4.5 shrink-0 transition-colors ${
                  isActive
                    ? "text-lime-accent"
                    : "text-zinc-600 group-hover:text-zinc-300"
                }`}
              />

              {item.name}

              {isActive && (
                <span className="ml-auto h-5 w-1 rounded-full bg-lime-accent shadow-[0_0_10px_rgba(132,204,22,0.5)]" />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Footer */}
      <div className="border-t border-zinc-800 p-4">
        <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-zinc-900">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-lime-accent text-sm font-semibold text-black">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-zinc-200">
              {user?.name}
            </div>

            <div className="truncate text-xs text-zinc-600">
              {user?.email}
            </div>
          </div>
        </div>

        {/* Sign Out */}
        <button
          className="mt-2 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-500 transition-all duration-150 hover:bg-red-500/10 hover:text-red-400"
          onClick={logout}
        >
          <LogOutIcon className="size-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;