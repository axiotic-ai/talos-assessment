export default function QuestionCard({ question, questionIndex, sectionId, answer, onAnswer }) {
  const options = [
    { value: 0, label: "0" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
  ];

  return (
    <div className="animate-fadeIn" style={{ animationDelay: `${questionIndex * 80}ms` }}>
      <div className="rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:shadow-sm">
        <div className="flex items-start justify-between gap-4">
          {/* Question text */}
          <p className="text-card-foreground text-sm md:text-base leading-relaxed flex-1">
            <span className="font-semibold text-muted-foreground mr-2">{questionIndex + 1}.</span>
            {question}
          </p>

          {/* Circular answer buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {options.map((option) => {
              const isSelected = answer === option.value;

              let buttonClass = '';
              if (isSelected) {
                if (option.value === 0) {
                  buttonClass = 'bg-muted text-muted-foreground ring-2 ring-muted-foreground/30';
                } else if (option.value === 1) {
                  buttonClass = 'bg-destructive text-destructive-foreground ring-2 ring-destructive/30';
                } else {
                  buttonClass = 'bg-primary text-primary-foreground ring-2 ring-primary/30';
                }
              } else {
                buttonClass = 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground';
              }

              return (
                <button
                  key={option.value}
                  onClick={() => onAnswer(sectionId, questionIndex, option.value)}
                  className={`
                    w-10 h-10 rounded-full text-sm font-semibold transition-all duration-200
                    flex items-center justify-center
                    active:scale-90
                    ${buttonClass}
                  `}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
