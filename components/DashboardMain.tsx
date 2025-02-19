"use client";
// DashboardMain Component
// Purpose: Acts as the main container for the Dashboard page. It manages the active navigation state, 
//          automatically selects the News Feed on load, and conditionally renders content based on the active section.
// Location: /components/DashboardMain.tsx

import { useState } from "react";
import DashboardNavigation from "./DashboardNavigation";
import NewsFeed from "./NewsFeed"; // NewsFeed view for "news" section

type DashboardMainProps = {
  user: { email: string };
};

export default function DashboardMain({ user }: DashboardMainProps) {
  // Set the default active tab to "news" so the News Feed is selected on first load
  const [activeTab, setActiveTab] = useState("news");

  return (
    <div className="flex">
      <DashboardNavigation activeTab={activeTab} setActiveTab={setActiveTab} user={user} />
      <main className="flex-1 p-6">
        {activeTab === "news" && <NewsFeed />}
        {/* 
          You can add additional conditional rendering here.
          For example:
          {activeTab === "profile" && <ProfileView />}
        */}
      </main>
    </div>
  );
} 