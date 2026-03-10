export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b border-border">
      <div className="flex items-center gap-3">
        <img
          src="https://axiotic.ai/images/logo-name-crop-corrected.png"
          alt="Axiotic AI"
          className="h-8 md:h-10 object-contain"
        />
      </div>
      <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-medium">
          Talos — AI Governance
        </span>
      </div>
    </header>
  );
}
