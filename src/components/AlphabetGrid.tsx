import React from 'react';
import { ArmenianLetter } from '../data/armenianAlphabet';
import { LetterCard } from './LetterCard';

interface AlphabetGridProps {
  letters: ArmenianLetter[];
  completedLetters: Set<string>;
  onLetterClick: (letter: ArmenianLetter) => void;
}

export const AlphabetGrid: React.FC<AlphabetGridProps> = ({ 
  letters, 
  completedLetters, 
  onLetterClick 
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 p-6">
      {letters.map((letter) => (
        <LetterCard
          key={letter.armenian}
          letter={letter}
          isCompleted={completedLetters.has(letter.armenian)}
          onClick={() => onLetterClick(letter)}
        />
      ))}
    </div>
  );
};