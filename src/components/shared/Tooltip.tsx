import { ReactNode } from "react";

import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui-library/tooltip.tsx";

type TooltipProps = {
  content: string;
  children: ReactNode;
  className?: string;
};

export const Tooltip = ({ children, className, content }: TooltipProps) => {
  return (
    <TooltipProvider>
      <UITooltip>
        <TooltipTrigger className={className}>{children}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </UITooltip>
    </TooltipProvider>
  );
};
