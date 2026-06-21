import type { ReactNode } from "react";
import { Footer } from "@/components/shared/footer";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
