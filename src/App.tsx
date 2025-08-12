import React, { useState } from 'react';
import { armenianAlphabet, ArmenianLetter } from './data/armenianAlphabet';
import { learningModules, LearningModule } from './data/learningModules';
import { AlphabetGrid } from './components/AlphabetGrid';
import { LetterModal } from './components/LetterModal';
import { ModuleNavigation } from './components/ModuleNavigation';
import { ModuleContent } from './components/ModuleContent';
import { triggerConfetti } from './utils/confetti';

function App() {
  const [selectedLetter, setSelectedLetter] = useState<ArmenianLetter | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [completedLetters, setCompletedLetters] = useState<Set<string>>(new Set());
  
  // Module-related state
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null);
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  const handleLetterClick = (letter: ArmenianLetter) => {
    setSelectedLetter(letter);
    setIsModalOpen(true);
  };

  const handleLetterComplete = () => {
    if (selectedLetter) {
      setCompletedLetters(prev => new Set([...prev, selectedLetter.armenian]));
      triggerConfetti();
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedLetter(null);
  };

  // Module handlers
  const handleModuleSelect = (moduleId: string) => {
    const module = learningModules.find(m => m.id === moduleId);
    if (module) {
      setSelectedModule(module);
      setIsModuleOpen(true);
    }
  };

  const handleModuleComplete = () => {
    if (selectedModule) {
      setCompletedModules(prev => [...prev, selectedModule.id]);
      triggerConfetti();
      setIsModuleOpen(false);
      setSelectedModule(null);
    }
  };

  const handleModuleClose = () => {
    setIsModuleOpen(false);
    setSelectedModule(null);
  };

  const progressPercentage = (completedLetters.size / armenianAlphabet.length) * 100;
  const allLettersCompleted = completedLetters.size === armenianAlphabet.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Learn Armenian Alphabet
          </h1>
          <div className="bg-gray-200 rounded-full h-4 max-w-md mx-auto">
            <div 
              className="bg-green-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-center text-gray-600 mt-2">
            {completedLetters.size} / {armenianAlphabet.length} letters completed
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <AlphabetGrid
          letters={armenianAlphabet}
          completedLetters={completedLetters}
          onLetterClick={handleLetterClick}
        />

        {/* Learning Modules Section */}
        {allLettersCompleted && (
          <div className="mt-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🎉 Congratulations! 🎉
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                You've mastered the Armenian alphabet! Now continue your journey with these learning modules.
              </p>
            </div>
            <ModuleNavigation
              modules={learningModules}
              currentModule={selectedModule?.id || null}
              completedModules={completedModules}
              onModuleSelect={handleModuleSelect}
            />
          </div>
        )}

        {!allLettersCompleted && completedLetters.size > 3 && (
          <div className="mt-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Great Progress! 📚
              </h2>
              <p className="text-gray-600 mb-6">
                You're doing well! Complete the alphabet to unlock learning modules.
              </p>
            </div>
            <ModuleNavigation
              modules={learningModules}
              currentModule={selectedModule?.id || null}
              completedModules={completedModules}
              onModuleSelect={handleModuleSelect}
            />
          </div>
        )}

        {completedLetters.size <= 3 && (
          <div className="mt-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Learning Modules Preview 📚
              </h2>
              <p className="text-gray-600 mb-6">
                Complete more letters to unlock these learning modules!
              </p>
            </div>
            <ModuleNavigation
              modules={learningModules}
              currentModule={selectedModule?.id || null}
              completedModules={completedModules}
              onModuleSelect={handleModuleSelect}
            />
          </div>
        )}
      </main>

      <LetterModal
        letter={selectedLetter}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onComplete={handleLetterComplete}
      />

      {selectedModule && (
        <ModuleContent
          module={selectedModule}
          onComplete={handleModuleComplete}
          onClose={handleModuleClose}
        />
      )}
    </div>
  );
}

export default App;