import React, { useState, useEffect } from 'react';
import { ArmenianLetter, armenianAlphabet } from '../data/armenianAlphabet';
import { improvedWordTemplates } from '../utils/exampleGenerator';

interface LetterModalProps {
  letter: ArmenianLetter | null;
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export const LetterModal: React.FC<LetterModalProps> = ({ 
  letter, 
  isOpen, 
  onClose, 
  onComplete 
}) => {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [showExamples, setShowExamples] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    if (isOpen && letter) {
      setCurrentExampleIndex(0);
      setShowExamples(false);
      setUserInput('');
      setIsCorrect(null);
    }
  }, [isOpen, letter]);

  const speakText = () => {
    if (!letter) return;
    
    // Try multiple audio file naming patterns
    const armenianFileName = letter.armenian.toLowerCase();
    const audioSources = [
      `/audio/letters/${armenianFileName}.mp3`,
      `/audio/letters/${letter.english.toLowerCase()}.mp3`,
      `/audio/letters/${letter.pronunciation}.mp3`
    ];
    
    // Try each audio source
    const tryAudioSource = (index: number) => {
      if (index >= audioSources.length) {
        // All audio sources failed, use text-to-speech
        const utterance = new SpeechSynthesisUtterance(letter.pronunciation);
        utterance.rate = 0.7;
        speechSynthesis.speak(utterance);
        return;
      }
      
      const audio = new Audio(audioSources[index]);
      audio.play().catch(error => {
        console.error(`Error playing ${audioSources[index]}:`, error);
        tryAudioSource(index + 1);
      });
    };
    
    tryAudioSource(0);
  };

  const handleNext = () => {
    if (!letter) return;
    
    if (!showExamples) {
      setShowExamples(true);
      setUserInput('');
      setIsCorrect(null);
    } else if (isCorrect && currentExampleIndex < dynamicExamples.length - 1) {
      setCurrentExampleIndex(currentExampleIndex + 1);
      setUserInput('');
      setIsCorrect(null);
    } else if (isCorrect && currentExampleIndex === dynamicExamples.length - 1) {
      onComplete();
      onClose();
    }
  };

  const checkAnswer = () => {
    if (!letter) return;
    
    const expectedAnswer = dynamicExamples[currentExampleIndex].english.toLowerCase();
    const userAnswer = userInput.trim().toLowerCase();
    
    const correct = expectedAnswer === userAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setTimeout(() => {
        if (currentExampleIndex === dynamicExamples.length - 1) {
          onComplete();
          onClose();
        } else {
          setCurrentExampleIndex(currentExampleIndex + 1);
          setUserInput('');
          setIsCorrect(null);
        }
      }, 1500);
    }
  };

  if (!isOpen || !letter) return null;

  // Use dynamic examples if available, fallback to static examples
  const dynamicExamples = letter ? improvedWordTemplates[letter.armenian] || letter.examples : [];
  const currentExample = showExamples ? dynamicExamples[currentExampleIndex] : null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="text-center">
          <div className="text-8xl font-bold mb-4">{letter.armenian}</div>
          <div className="text-2xl font-semibold mb-2">{letter.english}</div>
          <div className="text-lg text-gray-600 mb-4">{letter.phonetic}</div>
          
          <button
            onClick={speakText}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mb-6"
          >
            🔊 Pronunciation: "{letter.pronunciation}"
          </button>

          {showExamples && currentExample && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Type the English word:</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                {currentExample.armenian}
              </div>
              
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                className={`w-full p-3 border-2 rounded-lg text-center text-lg mb-4 ${
                  isCorrect === null ? 'border-gray-300' : 
                  isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                }`}
                placeholder="Type the English word..."
                disabled={isCorrect === true}
              />
              
              {isCorrect === false && (
                <p className="text-red-600 mb-2">
                  Try again! The correct answer is "{currentExample.english}"
                </p>
              )}
              
              {isCorrect === true && (
                <p className="text-green-600 mb-2">
                  Correct! ✓
                </p>
              )}
              
              <div className="text-sm text-gray-500 mb-4">
                Example {currentExampleIndex + 1} of {dynamicExamples.length}
              </div>
              
              <button
                onClick={checkAnswer}
                disabled={!userInput.trim() || isCorrect === true}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed mb-4"
              >
                Check Answer
              </button>
            </div>
          )}

          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Close
            </button>
            {!showExamples && (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Show Examples
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};