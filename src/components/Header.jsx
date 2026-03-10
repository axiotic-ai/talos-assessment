export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b border-white/10">
      <div className="flex items-center gap-3">
        <img
          src="https://axiotic.ai/images/logo-name-crop-corrected.png"
          alt="Axiotic AI"
          className="h-8 md:h-10 object-contain"
        />
      </div>
      <div className="hidden md:flex items-center gap-2 text-sm text-white/60">
        <span className="px-3 py-1 rounded-full bg-teal/10 text-teal border border-teal/20 text-xs font-medium">
          Talos — AI Governance
        </span>
      </div>
    </header>
  );
}
