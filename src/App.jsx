import { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import WelcomeScreen from './components/WelcomeScreen';
import SectionView from './components/SectionView';
import ResultsView from './components/ResultsView';
import { sections } from './data/questions';

export default function App() {
  const [page, setPage] = useState('welcome');
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [transitioning, setTransitioning] = useState(false);

  const handleStart = useCallback(() => {
    setPage('assessment');
    setCurrentSection(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAnswer = useCallback((sectionId, questionIndex, value) => {
    setAnswers((prev) => ({
      ...prev,
      [`${sectionId}-${questionIndex}`]: value,
    }));
  }, []);

  // Auto-advance when all 5 questions in a section are answered
  const section = sections[currentSection];
  const allCurrentAnswered = section?.questions.every(
    (_, qIdx) => answers[`${section.id}-${qIdx}`] !== undefined
  );

  useEffect(() => {
    if (page !== 'assessment' || !allCurrentAnswered || transitioning) return;
    
    const timer = setTimeout(() => {
      setTransitioning(true);
      setTimeout(() => {
        if (currentSection < sections.length - 1) {
          setCurrentSection((prev) => prev + 1);
        } else {
          setPage('results');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTransitioning(false);
      }, 300);
    }, 600);

    return () => clearTimeout(timer);
  }, [allCurrentAnswered, page, currentSection, transitioning]);

  const handleNext = useCallback(() => {
    if (currentSection < sections.length - 1) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSection((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTransitioning(false);
      }, 300);
    } else {
      setPage('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSection]);

  const handlePrev = useCallback(() => {
    if (currentSection > 0) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSection((prev) => prev - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTransitioning(false);
      }, 300);
    }
  }, [currentSection]);

  const handleRestart = useCallback(() => {
    setAnswers({});
    setCurrentSection(0);
    setPage('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Subtle background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] bg-glow" />
      </div>

      <div className="relative z-10">
        <Header />

        {page === 'assessment' && (
          <ProgressBar currentSection={currentSection} answers={answers} />
        )}

        <div className={`transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
          {page === 'welcome' && <WelcomeScreen onStart={handleStart} />}

          {page === 'assessment' && (
            <SectionView
              key={currentSection}
              currentSection={currentSection}
              answers={answers}
              onAnswer={handleAnswer}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}

          {page === 'results' && (
            <ResultsView answers={answers} onRestart={handleRestart} />
          )}
        </div>
      </div>
    </div>
  );
}
