import { createFileRoute, redirect } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase.ts";

export const Route = createFileRoute("/logout")({
  beforeLoad: async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
    throw redirect({ to: "/login" });
  },
  component: () => null,
});
