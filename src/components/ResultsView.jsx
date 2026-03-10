import { useState } from 'react';
import { sections, readinessLevels } from '../data/questions';

function CircularProgress({ percentage, color }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="animate-progressFill"
          style={{ '--progress-offset': offset }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl md:text-5xl font-bold" style={{ color }}>{percentage}</span>
        <span className="text-white/40 text-sm">percent</span>
      </div>
    </div>
  );
}

function SectionScoreBar({ section, score, maxScore, delay }) {
  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const sectionColors = ['#3b82f6', '#8b5cf6', '#f59e0b', '#00d4aa'];

  return (
    <div className="animate-fadeIn" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{section.emoji}</span>
          <span className="text-sm font-medium text-white/80">{section.title}</span>
        </div>
        <span className="text-sm font-semibold" style={{ color: sectionColors[section.id - 1] }}>
          {score}/{maxScore}
        </span>
      </div>
      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: sectionColors[section.id - 1],
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-xs text-white/30">{percentage}%</span>
      </div>
    </div>
  );
}

export default function ResultsView({ answers, onRestart }) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  // Calculate scores
  const sectionScores = sections.map((section) => {
    let score = 0;
    section.questions.forEach((_, qIdx) => {
      const val = answers[`${section.id}-${qIdx}`];
      if (val !== undefined) score += val;
    });
    return { section, score, maxScore: section.questions.length * 2 };
  });

  const totalScore = sectionScores.reduce((acc, s) => acc + s.score, 0);
  const totalMax = sectionScores.reduce((acc, s) => acc + s.maxScore, 0);
  const percentage = Math.round((totalScore / totalMax) * 100);

  const readinessLevel = readinessLevels.find(
    (level) => percentage >= level.min && percentage <= level.max
  ) || readinessLevels[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 mb-4">
          <span className="text-teal text-sm font-medium">Assessment Complete</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Your AI Readiness Score</h2>
        <p className="text-white/50">Here&apos;s how your organisation measures up</p>
      </div>

      {/* Main score card */}
      <div className="bg-white/[0.03] backdrop-blur border border-white/10 rounded-2xl p-8 md:p-10 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <CircularProgress percentage={percentage} color={readinessLevel.color} />
          <div className="text-center md:text-left flex-1">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3"
              style={{ backgroundColor: `${readinessLevel.color}20`, color: readinessLevel.color, border: `1px solid ${readinessLevel.color}40` }}
            >
              {readinessLevel.label}
            </div>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              {readinessLevel.recommendation}
            </p>
          </div>
        </div>
      </div>

      {/* Section breakdown */}
      <div className="bg-white/[0.03] backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8 mb-6">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Section Breakdown
        </h3>
        <div className="space-y-5">
          {sectionScores.map((item, idx) => (
            <SectionScoreBar
              key={item.section.id}
              section={item.section}
              score={item.score}
              maxScore={item.maxScore}
              delay={idx * 200}
            />
          ))}
        </div>
      </div>

      {/* Email capture */}
      <div className="bg-white/[0.03] backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8 mb-6">
        {!submitted ? (
          <>
            <h3 className="text-lg font-semibold mb-2">📧 Get Your Detailed Report</h3>
            <p className="text-white/50 text-sm mb-6">
              Receive a comprehensive breakdown with tailored recommendations for your organisation.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Company name"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-teal text-navy font-semibold rounded-xl hover:bg-teal-light transition-all duration-200 hover:shadow-lg hover:shadow-teal/25 active:scale-[0.98]"
              >
                Send My Report
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4 animate-scaleIn">
            <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Thank You, {formData.name}!</h3>
            <p className="text-white/50 text-sm">
              We&apos;ll send your detailed AI readiness report to <span className="text-teal">{formData.email}</span> shortly.
            </p>
          </div>
        )}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="https://axiotic.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 w-full text-center py-4 bg-teal text-navy font-semibold rounded-xl hover:bg-teal-light transition-all duration-200 hover:shadow-lg hover:shadow-teal/25 active:scale-[0.98]"
        >
          Book a Consultation →
        </a>
        <button
          onClick={onRestart}
          className="flex-1 w-full py-4 bg-white/5 border border-white/10 text-white/60 font-medium rounded-xl hover:bg-white/10 hover:text-white transition-all duration-200 active:scale-[0.98]"
        >
          Retake Assessment
        </button>
      </div>

      {/* Footer */}
      <div className="text-center mt-10 pt-6 border-t border-white/5">
        <p className="text-white/30 text-xs">
          Powered by <span className="text-teal/60 font-medium">Talos</span> — AI Governance & Compliance by Axiotic AI
        </p>
      </div>
    </div>
  );
}
