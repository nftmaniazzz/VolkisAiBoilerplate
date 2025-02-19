"use client";
// Component: GoogleAuthButton
// Purpose: Renders a button which initiates Google OAuth via Supabase.
// Location: /components/GoogleAuthButton.tsx

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function GoogleAuthButton({ text = "Continue with Google" }: { text?: string }) {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const supabase = createClient();
      // Initiate OAuth sign in with Google. Supabase will redirect on success.
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          // Updated redirect URL to include the "redirect_to" query parameter.
          redirectTo: window.location.origin + "/auth/callback?redirect_to=/dashboard",
        },
      });
      if (error) {
        console.error("Google sign in error:", error.message);
      }
    } catch (error: any) {
      console.error("Unexpected error during Google sign in", error.message);
    }
  };

  return (
    <Button onClick={handleGoogleSignIn} variant="outline">
      {text}
    </Button>
  );
} 