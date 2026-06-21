import { DocsRuntimeProvider } from "@/contexts/DocsRuntimeProvider";
import { Base } from "@/components/examples/base";

export default function HomePage() {
  return (
    <div className="bg-background flex h-dvh flex-col overflow-hidden">
      <main className="min-h-0 flex-1">
        <DocsRuntimeProvider>
          <Base />
        </DocsRuntimeProvider>
      </main>
    </div>
  );
}
