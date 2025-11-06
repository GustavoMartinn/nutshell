import React from 'react';

interface WordBoxProps {
  word: string;
  isRevealed: boolean;
  onToggle: () => void;
}

export const WordBox: React.FC<WordBoxProps> = ({
  word,
  isRevealed,
  onToggle,
}) => {
  // Se a palavra está vazia, mostra como palavra escondida e permite revelar (mas continua vazio)
  if (!word) {
    return (
      <button
        onClick={onToggle}
        className={`word-box ${isRevealed ? 'revealed' : 'hidden'} empty`}
      >
        {isRevealed ? '' : '???'}
      </button>
    );
  }

  return (
    <button
      onClick={onToggle}
      className={`word-box ${isRevealed ? 'revealed' : 'hidden'}`}
    >
      {isRevealed ? word : '???'}
    </button>
  );
};
