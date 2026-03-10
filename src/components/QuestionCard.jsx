import { answerOptions } from '../data/questions';

export default function QuestionCard({ question, questionIndex, sectionId, answer, onAnswer }) {
  return (
    <div className="animate-fadeIn" style={{ animationDelay: `${questionIndex * 80}ms` }}>
      <div className="bg-white/[0.03] backdrop-blur border border-white/10 rounded-2xl p-5 md:p-6 hover:border-white/15 transition-all duration-300">
        {/* Question number + text */}
        <div className="flex gap-3 mb-5">
          <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-teal/10 text-teal text-sm font-bold flex items-center justify-center">
            {questionIndex + 1}
          </span>
          <p className="text-white/90 text-base md:text-lg leading-relaxed font-medium">
            {question}
          </p>
        </div>

        {/* Answer options as pill buttons */}
        <div className="flex flex-wrap gap-3 ml-10">
          {answerOptions.map((option) => {
            const isSelected = answer === option.value;
            return (
              <button
                key={option.value}
                onClick={() => onAnswer(sectionId, questionIndex, option.value)}
                className={`
                  relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border
                  ${isSelected
                    ? option.value === 2
                      ? 'bg-teal/20 border-teal text-teal shadow-md shadow-teal/10'
                      : option.value === 1
                        ? 'bg-red-500/15 border-red-400/60 text-red-300 shadow-md shadow-red-500/10'
                        : 'bg-white/10 border-white/30 text-white shadow-md'
                    : 'bg-white/[0.03] border-white/10 text-white/50 hover:bg-white/[0.06] hover:border-white/20 hover:text-white/70'
                  }
                  active:scale-95
                `}
              >
                {isSelected && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-teal rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
