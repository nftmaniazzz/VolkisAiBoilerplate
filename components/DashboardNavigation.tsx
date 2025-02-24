"use client";
// DashboardNavigation Component
// Purpose: Renders a modern, clean left-hand side navigation panel with various grouped navigation buttons 
//          for an app that allows you to build custom chatbots. Includes sections for Dashboard, Data & Insights,
//          and Administration along with user sign-out functionality.
// Location: /components/DashboardNavigation.tsx

import { Button } from "./ui/button";
import { signOutAction } from "@/app/actions";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

// Updated to import additional icons for new nav buttons
import {
  Newspaper,
  Bot,
  Database,
  Clock,
  TrendingUp,
  FileText,
  Ticket,
  Plug,
  Settings,
  CreditCard
} from "lucide-react";

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
      <nav className="flex-1 space-y-6">
        {/* Dashboard Group */}
        <div>
          <h3 className="mb-2 text-xs font-medium text-[#6c757d] uppercase tracking-wider">
            Dashboard
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab("news")}
              className={`
                w-full px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all duration-200
                ${activeTab === "news"
                  ? "bg-white text-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.1)] translate-y-[-1px]"
                  : "text-[#4a5568] hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:translate-y-[-1px]"
                }
              `}
            >
              <Newspaper className="w-4 h-4" />
              News Feed
            </button>
            <button
              onClick={() => setActiveTab("chatbots")}
              className={`
                w-full px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all duration-200
                ${activeTab === "chatbots"
                  ? "bg-white text-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.1)] translate-y-[-1px]"
                  : "text-[#4a5568] hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:translate-y-[-1px]"
                }
              `}
            >
              <Bot className="w-4 h-4" />
              Chatbots
            </button>
          </div>
        </div>

        {/* Data & Insights Group */}
        <div>
          <h3 className="mb-2 text-xs font-medium text-[#6c757d] uppercase tracking-wider">
            Data & Insights
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab("data")}
              className={`
                w-full px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all duration-200
                ${activeTab === "data"
                  ? "bg-white text-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.1)] translate-y-[-1px]"
                  : "text-[#4a5568] hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:translate-y-[-1px]"
                }
              `}
            >
              <Database className="w-4 h-4" />
              Data
            </button>
            <button
              onClick={() => setActiveTab("messageHistory")}
              className={`
                w-full px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all duration-200
                ${activeTab === "messageHistory"
                  ? "bg-white text-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.1)] translate-y-[-1px]"
                  : "text-[#4a5568] hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:translate-y-[-1px]"
                }
              `}
            >
              <Clock className="w-4 h-4" />
              Message History
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`
                w-full px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all duration-200
                ${activeTab === "analytics"
                  ? "bg-white text-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.1)] translate-y-[-1px]"
                  : "text-[#4a5568] hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:translate-y-[-1px]"
                }
              `}
            >
              <TrendingUp className="w-4 h-4" />
              Analytics
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`
                w-full px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all duration-200
                ${activeTab === "reports"
                  ? "bg-white text-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.1)] translate-y-[-1px]"
                  : "text-[#4a5568] hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:translate-y-[-1px]"
                }
              `}
            >
              <FileText className="w-4 h-4" />
              Reports
            </button>
          </div>
        </div>

        {/* Administration Group */}
        <div>
          <h3 className="mb-2 text-xs font-medium text-[#6c757d] uppercase tracking-wider">
            Administration
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab("tickets")}
              className={`
                w-full px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all duration-200
                ${activeTab === "tickets"
                  ? "bg-white text-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.1)] translate-y-[-1px]"
                  : "text-[#4a5568] hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:translate-y-[-1px]"
                }
              `}
            >
              <Ticket className="w-4 h-4" />
              Tickets
            </button>
            <button
              onClick={() => setActiveTab("integrations")}
              className={`
                w-full px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all duration-200
                ${activeTab === "integrations"
                  ? "bg-white text-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.1)] translate-y-[-1px]"
                  : "text-[#4a5568] hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:translate-y-[-1px]"
                }
              `}
            >
              <Plug className="w-4 h-4" />
              Integrations
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`
                w-full px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all duration-200
                ${activeTab === "settings"
                  ? "bg-white text-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.1)] translate-y-[-1px]"
                  : "text-[#4a5568] hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:translate-y-[-1px]"
                }
              `}
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button
              onClick={() => setActiveTab("paymentPlans")}
              className={`
                w-full px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all duration-200
                ${activeTab === "paymentPlans"
                  ? "bg-white text-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.1)] translate-y-[-1px]"
                  : "text-[#4a5568] hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:translate-y-[-1px]"
                }
              `}
            >
              <CreditCard className="w-4 h-4" />
              Payment Plans
            </button>
          </div>
        </div>
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