import { sections } from '../data/questions';

export default function ProgressBar({ currentSection, answers }) {
  const totalQuestions = sections.reduce((acc, s) => acc + s.questions.length, 0);
  const answeredCount = Object.keys(answers).length;
  const progressPercent = (answeredCount / totalQuestions) * 100;

  return (
    <div className="w-full">
      {/* Thin full-width progress bar at top */}
      <div className="w-full h-1 bg-muted">
        <div
          className="h-full bg-primary rounded-r-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
