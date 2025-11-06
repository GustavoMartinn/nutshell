import React from 'react';
import { WordBox } from './WordBox';

interface QuestionDisplayProps {
  words: string[];
  revealedWords: number[];
  onToggleWord: (index: number) => void;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  words,
  revealedWords,
  onToggleWord,
}) => {
  // Remove pontos de interrogação e sempre mostra 10 palavras
  const cleanWords = words.map((w) => w.replace(/\?/g, ''));
  const fixedWords = [
    ...cleanWords,
    ...Array(10 - cleanWords.length).fill(''),
  ].slice(0, 10);

  return (
    <div className='question-display'>
      <h2>Pergunta:</h2>
      <div className='words-container'>
        {fixedWords.map((word, index) => (
          <WordBox
            key={index}
            word={word}
            isRevealed={revealedWords.includes(index)}
            onToggle={() => onToggleWord(index)}
          />
        ))}
      </div>
    </div>
  );
};
