// Types
import type { ReactNode } from "react";

// Interfaces
interface MaxWidthWrapperProps {
  children: ReactNode;
}

const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
  return <div className="mx-auto max-w-5xl">{children}</div>;
};

export default MaxWidthWrapper;
