import React, { useState } from 'react';
import { LearningModule, Exercise } from '../data/learningModules';

interface ModuleContentProps {
  module: LearningModule;
  onComplete: () => void;
  onClose: () => void;
}

export const ModuleContent: React.FC<ModuleContentProps> = ({
  module,
  onComplete,
  onClose
}) => {
  const [currentSection, setCurrentSection] = useState<'vocabulary' | 'exercises'>('vocabulary');
  const [currentExercise, setCurrentExercise] = useState(0);
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (exerciseId: string, answer: string) => {
    setExerciseAnswers(prev => ({
      ...prev,
      [exerciseId]: answer
    }));
  };

  const checkExercise = (exercise: Exercise) => {
    const userAnswer = exerciseAnswers[exercise.id];
    return userAnswer === exercise.correct;
  };

  const getScore = () => {
    const correctCount = module.exercises.filter(ex => checkExercise(ex)).length;
    return Math.round((correctCount / module.exercises.length) * 100);
  };

  const handleFinishExercises = () => {
    setShowResults(true);
    const score = getScore();
    if (score >= 70) {
      setTimeout(() => {
        onComplete();
      }, 3000);
    }
  };

  const speakArmenian = (text: string) => {
    // Basic text-to-speech for Armenian words
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.7;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{module.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <p className="text-gray-600 mb-6">{module.description}</p>

        {/* Section Navigation */}
        <div className="flex mb-6 border-b">
          <button
            onClick={() => setCurrentSection('vocabulary')}
            className={`px-4 py-2 font-semibold border-b-2 ${
              currentSection === 'vocabulary'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500'
            }`}
          >
            Vocabulary ({module.vocabulary.length} words)
          </button>
          <button
            onClick={() => setCurrentSection('exercises')}
            className={`px-4 py-2 font-semibold border-b-2 ${
              currentSection === 'exercises'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500'
            }`}
          >
            Exercises ({module.exercises.length} questions)
          </button>
        </div>

        {/* Vocabulary Section */}
        {currentSection === 'vocabulary' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Vocabulary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {module.vocabulary.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-3xl font-bold text-blue-600">
                      {item.armenian}
                    </div>
                    <button
                      onClick={() => speakArmenian(item.pronunciation)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      🔊
                    </button>
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">
                    {item.english}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    Pronunciation: "{item.pronunciation}"
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.phonetic}
                  </div>
                  <div className="text-xs text-gray-400 mt-2 capitalize">
                    {item.type}
                  </div>
                </div>
              ))}
            </div>
            {module.grammar && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Grammar Points</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {module.grammar.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Exercises Section */}
        {currentSection === 'exercises' && !showResults && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">
              Exercise {currentExercise + 1} of {module.exercises.length}
            </h3>
            {module.exercises.map((exercise, index) => (
              <div
                key={exercise.id}
                className={`${index === currentExercise ? 'block' : 'hidden'}`}
              >
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium mb-4">{exercise.question}</h4>
                  <div className="space-y-2">
                    {exercise.options?.map((option, optIndex) => (
                      <button
                        key={optIndex}
                        onClick={() => handleAnswerSelect(exercise.id, option)}
                        className={`w-full p-3 text-left rounded border-2 transition-colors ${
                          exerciseAnswers[exercise.id] === option
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {exerciseAnswers[exercise.id] && (
                    <div className="mt-4 p-3 bg-blue-50 rounded">
                      <p className="text-sm text-blue-800">
                        {exercise.explanation}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setCurrentExercise(Math.max(0, currentExercise - 1))}
                    disabled={currentExercise === 0}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
                  >
                    Previous
                  </button>
                  {currentExercise === module.exercises.length - 1 ? (
                    <button
                      onClick={handleFinishExercises}
                      disabled={!exerciseAnswers[exercise.id]}
                      className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
                    >
                      Finish Module
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrentExercise(currentExercise + 1)}
                      disabled={!exerciseAnswers[exercise.id]}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results Section */}
        {showResults && (
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Module Complete!</h3>
            <div className="text-6xl">{getScore() >= 70 ? '🎉' : '📚'}</div>
            <p className="text-xl">
              Your Score: {getScore()}%
            </p>
            {getScore() >= 70 ? (
              <div className="space-y-2">
                <p className="text-green-600 font-semibold">
                  Excellent work! You've completed this module.
                </p>
                <p className="text-gray-600">
                  The next module will be unlocked automatically.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-orange-600 font-semibold">
                  Good effort! Review the vocabulary and try again.
                </p>
                <button
                  onClick={() => {
                    setShowResults(false);
                    setCurrentExercise(0);
                    setExerciseAnswers({});
                  }}
                  className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};