import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import DashboardMain from "@/components/DashboardMain";

// DashboardPage is a protected page.
// It fetches the user on the server, and passes the user data to a client component
// that renders a modern, interactive, left-hand side navigation panel.
export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Pass only serializable user data to the client component.
  // Note: We ensure user.email is a string since TypeScript warns it could be null
  return <DashboardMain user={{ email: user.email ?? '' }} />;
}
