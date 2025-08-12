import React from 'react';
import { ArmenianLetter } from '../data/armenianAlphabet';

interface LetterCardProps {
  letter: ArmenianLetter;
  isCompleted: boolean;
  onClick: () => void;
}

export const LetterCard: React.FC<LetterCardProps> = ({ letter, isCompleted, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative p-6 rounded-lg border-2 transition-all duration-200 
        hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400
        ${isCompleted 
          ? 'bg-green-100 border-green-400 text-green-800' 
          : 'bg-white border-gray-300 text-gray-800 hover:border-blue-400'
        }
      `}
    >
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">{letter.armenian}</div>
        <div className="text-lg font-medium">{letter.english}</div>
        <div className="text-sm text-gray-600">{letter.phonetic}</div>
      </div>
      {isCompleted && (
        <div className="absolute top-2 right-2 text-green-500">
          ✓
        </div>
      )}
    </button>
  );
};