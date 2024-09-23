import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { loading, logout, user };
};
