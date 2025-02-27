import { ReactNode } from "react";

import { AuthGuard } from "@/components/shared/AuthGuard.tsx";

type ViewProps = {
  children: ReactNode;
  isProtected?: boolean;
};

export const View = ({ children, isProtected }: ViewProps) => {
  const viewComponent = <div className="px-4 py-2">{children}</div>;

  if (!isProtected) {
    return viewComponent;
  }

  return <AuthGuard>{viewComponent}</AuthGuard>;
};
