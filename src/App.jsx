import { useState, useCallback } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import WelcomeScreen from './components/WelcomeScreen';
import SectionView from './components/SectionView';
import ResultsView from './components/ResultsView';
import { sections } from './data/questions';

export default function App() {
  const [page, setPage] = useState('welcome'); // 'welcome' | 'assessment' | 'results'
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});

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

  const handleNext = useCallback(() => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setPage('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSection]);

  const handlePrev = useCallback(() => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSection]);

  const handleRestart = useCallback(() => {
    setAnswers({});
    setCurrentSection(0);
    setPage('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-navy-dark">
      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10">
        <Header />

        {page === 'assessment' && (
          <ProgressBar currentSection={currentSection} answers={answers} />
        )}

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
  );
}
