import { sections } from '../data/questions';
import QuestionCard from './QuestionCard';

export default function SectionView({ currentSection, answers, onAnswer, onNext, onPrev }) {
  const section = sections[currentSection];
  const allAnswered = section.questions.every(
    (_, qIdx) => answers[`${section.id}-${qIdx}`] !== undefined
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 animate-fadeIn">
      {/* Top navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onPrev}
          disabled={currentSection === 0}
          className={`flex items-center gap-1.5 text-sm font-medium transition-colors
            ${currentSection === 0
              ? 'text-muted-foreground/40 cursor-not-allowed'
              : 'text-muted-foreground hover:text-foreground'
            }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <span className="text-sm font-medium text-muted-foreground">
          Section {currentSection + 1} of {sections.length}
        </span>
      </div>

      {/* Scoring legend */}
      <div className="flex items-center gap-4 mb-6 text-sm">
        <div className="flex items-center gap-1.5">
          <span className="w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-semibold flex items-center justify-center">0</span>
          <span className="text-muted-foreground">Don&apos;t Know</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-6 h-6 rounded-full bg-destructive text-destructive-foreground text-xs font-semibold flex items-center justify-center">1</span>
          <span className="text-muted-foreground">No</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">2</span>
          <span className="text-muted-foreground">Yes</span>
        </div>
      </div>

      {/* Section title */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center gap-2">
          <span>{section.emoji}</span>
          {section.title}
        </h2>
      </div>

      {/* Questions */}
      <div className="space-y-4 mb-8">
        {section.questions.map((question, qIdx) => (
          <QuestionCard
            key={`${section.id}-${qIdx}`}
            question={question}
            questionIndex={qIdx}
            sectionId={section.id}
            answer={answers[`${section.id}-${qIdx}`]}
            onAnswer={onAnswer}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <button
          onClick={onPrev}
          disabled={currentSection === 0}
          className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200
            ${currentSection === 0
              ? 'text-muted-foreground/30 cursor-not-allowed'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted active:scale-95'
            }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>

        <button
          onClick={onNext}
          disabled={!allAnswered}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200
            ${allAnswered
              ? 'bg-primary text-primary-foreground hover:bg-gold-light btn-primary-glow hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-muted text-muted-foreground/40 cursor-not-allowed'
            }`}
        >
          {currentSection === sections.length - 1 ? 'View Results' : 'Next Section'}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
