import { PauseCircle } from "lucide-react";

export function SuspendedBanner() {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-accent px-4 py-2.5 text-center shadow-md sm:py-3">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-1">
        <PauseCircle className="h-6 w-6 text-background sm:h-5 sm:w-5" />
        <span className="text-xs font-semibold text-background sm:text-sm">
          An{"\u00FA"}ncio temporariamente suspenso
        </span>
        <span className="text-[10px] text-background/70 sm:text-xs">
          Poxa! Obrigado pelo interesse, mas devido {"\u00E0"} alta procura o an{"\u00FA"}ncio est{"\u00E1"} suspenso.
        </span>
      </div>
    </div>
  );
}
