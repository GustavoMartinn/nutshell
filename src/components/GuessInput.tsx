import React, { useState } from 'react';

interface GuessInputProps {
  correctAnswer: string;
  onGuessSubmit: (guess: string, isCorrect: boolean) => void;
}

export const GuessInput: React.FC<GuessInputProps> = ({
  correctAnswer,
  onGuessSubmit,
}) => {
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!guess.trim()) return;

    const isCorrect =
      guess.trim().toLowerCase() === correctAnswer.toLowerCase();
    setResult(isCorrect ? 'correct' : 'incorrect');
    onGuessSubmit(guess, isCorrect);

    // Limpar após 2 segundos
    setTimeout(() => {
      setGuess('');
      setResult(null);
    }, 2000);
  };

  return (
    <div className='guess-section'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder='Digite sua resposta...'
          className='guess-input'
        />
        <button type='submit' className='guess-submit-btn'>
          Enviar Palpite
        </button>
      </form>
      {result && (
        <div className={`guess-result ${result}`}>
          {result === 'correct'
            ? '✅ Correto!'
            : '❌ Incorreto. Tente novamente!'}
        </div>
      )}
    </div>
  );
};
