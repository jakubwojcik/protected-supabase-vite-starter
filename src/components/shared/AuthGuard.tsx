import { useNavigate } from "@tanstack/react-router";
import { ReactNode } from "react";

import { useAuth } from "@/hooks/useAuthGuard.ts";

type AuthGuardProps = {
  children: ReactNode;
};

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { loading, user } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    navigate({ to: "/login" });
  }

  return <>{children}</>;
};
