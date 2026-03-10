import { sections } from '../data/questions';
import QuestionCard from './QuestionCard';

export default function SectionView({ currentSection, answers, onAnswer, onNext, onPrev }) {
  const section = sections[currentSection];
  const allAnswered = section.questions.every(
    (_, qIdx) => answers[`${section.id}-${qIdx}`] !== undefined
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 animate-slideIn">
      {/* Section header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{section.emoji}</span>
          <div>
            <span className="text-xs text-teal font-medium uppercase tracking-wider">
              Section {currentSection + 1} of {sections.length}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
          </div>
        </div>
        <p className="text-white/50 text-sm md:text-base ml-12">{section.description}</p>
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
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <button
          onClick={onPrev}
          disabled={currentSection === 0}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200
            ${currentSection === 0
              ? 'text-white/20 cursor-not-allowed'
              : 'text-white/60 hover:text-white hover:bg-white/5 active:scale-95'
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
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200
            ${allAnswered
              ? 'bg-teal text-navy hover:bg-teal-light hover:shadow-lg hover:shadow-teal/25 hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-white/5 text-white/30 cursor-not-allowed'
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
