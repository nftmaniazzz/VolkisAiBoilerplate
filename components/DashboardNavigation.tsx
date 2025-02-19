"use client";
// DashboardNavigation Component
// Purpose: Renders a modern, clean left-hand side navigation panel with a News Feed button
//          and user sign-out functionality. Uses 3D effects and Lucide icons for a premium feel.
// Location: /components/DashboardNavigation.tsx

import { Button } from "./ui/button";
import { signOutAction } from "@/app/actions";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Newspaper } from "lucide-react";

interface DashboardNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: {
    email: string;
  };
}

export default function DashboardNavigation({ activeTab, setActiveTab, user }: DashboardNavigationProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#f8f9fa] border-r border-[#e9ecef] p-6 flex flex-col justify-between">
      {/* Top section with logo/branding */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#212529]">Acme Co.</h2>
      </div>

      {/* Navigation section */}
      <nav className="flex-1">
        {/* Section label */}
        <div className="mb-3">
          <h3 className="text-xs font-medium text-[#6c757d] uppercase tracking-wider">Spaces</h3>
        </div>

        {/* Navigation button with 3D effect */}
        <button
          onClick={() => setActiveTab("news")}
          className={`
            w-full px-4 py-2.5 rounded-lg
            flex items-center gap-3
            text-sm font-medium
            transition-all duration-200
            ${
              activeTab === "news"
              ? "bg-white text-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.1)] translate-y-[-1px]"
              : "text-[#4a5568] hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:translate-y-[-1px]"
            }
          `}
        >
          <Newspaper className="w-4 h-4" />
          News Feed
        </button>
      </nav>

      {/* User section at bottom */}
      <div className="border-t border-[#e9ecef] pt-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-[#4a5568] rounded-lg hover:bg-white hover:shadow-sm">
              {user.email}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <form action={signOutAction}>
                <Button type="submit" variant="ghost" className="w-full text-left text-sm">
                  Sign out
                </Button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
} 