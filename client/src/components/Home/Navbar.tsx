import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export default function Navbar() {
    const { user } = { user: false };

    return (
        <nav className="sticky top-0 z-50 bg-primary backdrop-blur-lg border-b border--700">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <Link to="/" onClick={() => scrollTo(0, 0)} className="flex items-center gap-2 ">
                    <img src="/logo.svg" alt="logo" className="size-7 bg-lime-accent rounded p-0.5" />
                    <span className="text-xl lg:text-2xl font-medium font-logo text-white">Postify</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm text-white font-inter font-medium">
                    <a href="#features" className="hover:text-lime-accent">
                        Features
                    </a>
                    <a href="#how-it-works" className="hover:text-lime-accent">
                        How it works
                    </a>
                    <a href="#pricing" className="hover:text-lime-accent">
                        Pricing
                    </a>
                </div>

                {user ? (
                    <Link to="/dashboard" className="flex items-center gap-1.5 text-sm font-medium bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-sm hover:shadow-red-200 hover:shadow-md">
                        Go to Dashboard <ArrowRightIcon className="size-3.5" />
                    </Link>
                ) : (
                    <div className="flex items-center gap-3 font-inter font-semibold">
                        <Link to="/login" className="text-sm text-white hover:text-lime-accent hidden sm:block">
                            Sign In
                        </Link>
                        <Link to="/login" className="flex items-center gap-1.5 text-sm bg-red-500 hover:bg-red-600 hover:text-black text-white px-4 py-2 rounded-full shadow-sm ">
                            Get Started <ArrowRightIcon className="size-3.5" />
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}