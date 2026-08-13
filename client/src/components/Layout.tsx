import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { MenuIcon } from "lucide-react";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/accounts": "Social Accounts",
  "/schedule": "Post Scheduler",
  "/ai-composer": "AI Composer",
};

const Layout = () => {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "SocialAI";

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-zinc-950 font-inter">

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        isOpen={isMobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Top Bar */}
        <header className="flex h-16 shrink-0 items-center gap-4 border-b border-zinc-800 bg-zinc-950 px-4 md:px-8">

          {/* Mobile Menu */}
          <button
            className="-ml-2 rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon size={24} />
          </button>

          {/* Page Title */}
          <div>
            <h1 className="text-base font-semibold text-white">
              {title}
            </h1>

            <p className="hidden text-sm text-zinc-600 sm:block">
              Manage and automate your social presence
            </p>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-0 flex-1 overflow-y-auto bg-zinc-950 p-4 sm:p-6 md:p-8 xl:p-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;