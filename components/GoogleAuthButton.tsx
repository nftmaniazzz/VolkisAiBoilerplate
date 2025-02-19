"use client";
// Component: GoogleAuthButton
// Purpose: Renders a button which initiates Google OAuth via Supabase.
// Location: /components/GoogleAuthButton.tsx

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { GoogleIcon } from "./icons/google";

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
    <Button 
      onClick={handleGoogleSignIn} 
      variant="outline" 
      className="w-full bg-white hover:bg-gray-50 text-black font-normal border border-gray-300"
    >
      <GoogleIcon className="mr-2 h-4 w-4" />
      {text}
    </Button>
  );
} 