export default function WelcomeScreen({ onStart }) {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center animate-fadeUp">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8">
          <span className="text-base">✨</span>
          <span className="text-foreground/70 text-sm font-medium">Free organisational assessment</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
          How ready is your
          <br />
          organisation for{' '}
          <span className="text-gold-gradient">AI governance</span>?
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
          Discover where you stand on AI readiness, governance, and compliance — and what to focus on next.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onStart}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-gold-light transition-all duration-300 btn-primary-glow hover:scale-[1.02] active:scale-[0.98]"
          >
            Start the assessment
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <a
            href="https://axiotic.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium text-lg rounded-lg hover:bg-card transition-all duration-200"
          >
            Learn more
          </a>
        </div>

        {/* Footer info */}
        <p className="text-sm text-muted-foreground">
          Takes about 5 minutes · No sign-up required · Instant results
        </p>
      </div>
    </div>
  );
}
