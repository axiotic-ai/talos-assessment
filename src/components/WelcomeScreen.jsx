import { sections } from '../data/questions';

export default function WelcomeScreen({ onStart }) {
  const totalQuestions = sections.reduce((acc, s) => acc + s.questions.length, 0);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center animate-fadeIn">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          <span className="text-teal text-sm font-medium">Powered by Talos</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          AI Readiness
          <br />
          <span className="text-teal">Assessment</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">
          Evaluate your organisation&apos;s preparedness for AI adoption across four critical dimensions.
        </p>

        {/* Section preview cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 hover:border-teal/30 transition-colors"
            >
              <div className="text-2xl mb-2">{section.emoji}</div>
              <div className="text-xs text-white/60 font-medium">{section.title}</div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 mb-10 text-white/40 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>{totalQuestions} questions</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>~5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Free assessment</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-teal text-navy font-semibold text-lg rounded-xl hover:bg-teal-light transition-all duration-300 hover:shadow-lg hover:shadow-teal/25 hover:scale-[1.02] active:scale-[0.98]"
        >
          Start Assessment
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
