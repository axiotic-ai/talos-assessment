import { sections } from '../data/questions';

export default function ProgressBar({ currentSection, answers }) {
  const totalQuestions = sections.reduce((acc, s) => acc + s.questions.length, 0);
  const answeredCount = Object.keys(answers).length;
  const progressPercent = (answeredCount / totalQuestions) * 100;

  return (
    <div className="w-full px-6 py-4">
      {/* Section indicators */}
      <div className="flex items-center justify-between mb-3">
        {sections.map((section, idx) => {
          const sectionAnswered = section.questions.every(
            (_, qIdx) => answers[`${section.id}-${qIdx}`] !== undefined
          );
          const isCurrent = currentSection === idx;
          const isPast = currentSection > idx;

          return (
            <div key={section.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`
                    w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300
                    ${isCurrent
                      ? 'bg-teal text-navy scale-110 shadow-lg shadow-teal/30'
                      : sectionAnswered || isPast
                        ? 'bg-teal/20 text-teal border border-teal/40'
                        : 'bg-white/5 text-white/40 border border-white/10'
                    }
                  `}
                >
                  {sectionAnswered ? '✓' : idx + 1}
                </div>
                <span className={`text-xs mt-1 hidden md:block transition-colors ${isCurrent ? 'text-teal' : 'text-white/40'}`}>
                  {section.title}
                </span>
              </div>
              {idx < sections.length - 1 && (
                <div className={`h-0.5 flex-1 mx-2 transition-colors duration-300 ${isPast ? 'bg-teal/40' : 'bg-white/10'}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Overall progress bar */}
      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal to-teal-light rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-xs text-white/40">{answeredCount} of {totalQuestions} questions</span>
        <span className="text-xs text-teal font-medium">{Math.round(progressPercent)}%</span>
      </div>
    </div>
  );
}
