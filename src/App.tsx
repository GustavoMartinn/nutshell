import { useState } from 'react';
import type { GameState } from './types';
import { questions } from './data/questions';
import { QuestionDisplay } from './components/QuestionDisplay';
import { AnswerSection } from './components/AnswerSection';
import { GuessInput } from './components/GuessInput';
import './App.css';

function App() {
  const [gameState, setGameState] = useState<GameState>(() => {
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    return {
      currentQuestion: randomQuestion,
      revealedWords: [],
      isAnswerVisible: false,
      guessText: '',
      isGuessCorrect: null,
    };
  });

  const handleToggleWord = (index: number) => {
    setGameState((prev) => {
      const newRevealedWords = prev.revealedWords.includes(index)
        ? prev.revealedWords.filter((i) => i !== index)
        : [...prev.revealedWords, index];

      return {
        ...prev,
        revealedWords: newRevealedWords,
      };
    });
  };

  const handleToggleAnswer = () => {
    setGameState((prev) => ({
      ...prev,
      isAnswerVisible: !prev.isAnswerVisible,
    }));
  };

  const handleGuessSubmit = (guess: string, isCorrect: boolean) => {
    setGameState((prev) => ({
      ...prev,
      guessText: guess,
      isGuessCorrect: isCorrect,
    }));
  };

  const handleNewQuestion = () => {
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    setGameState({
      currentQuestion: randomQuestion,
      revealedWords: [],
      isAnswerVisible: false,
      guessText: '',
      isGuessCorrect: null,
    });
  };

  const handleRevealAll = () => {
    setGameState((prev) => ({
      ...prev,
      revealedWords: prev.currentQuestion.words.map((_, index) => index),
    }));
  };

  const handleHideAll = () => {
    setGameState((prev) => ({
      ...prev,
      revealedWords: [],
    }));
  };

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>🥜 In a Nutshell</h1>
      </header>

      <main className='game-container'>
        <div className='controls'>
          <button
            onClick={handleNewQuestion}
            className='control-btn new-question'
          >
            🔄 Nova Pergunta
          </button>
          <button onClick={handleRevealAll} className='control-btn reveal-all'>
            👁️ Revelar Tudo
          </button>
          <button onClick={handleHideAll} className='control-btn hide-all'>
            🙈 Esconder Tudo
          </button>
        </div>

        {gameState.currentQuestion.category && (
          <div className='category-badge'>
            Categoria: {gameState.currentQuestion.category}
          </div>
        )}

        <QuestionDisplay
          words={gameState.currentQuestion.words}
          revealedWords={gameState.revealedWords}
          onToggleWord={handleToggleWord}
        />

        <div className='divider' />

        <AnswerSection
          answer={gameState.currentQuestion.answer}
          isVisible={gameState.isAnswerVisible}
          onToggleVisibility={handleToggleAnswer}
        />

        <div className='divider' />

        <GuessInput
          correctAnswer={gameState.currentQuestion.answer}
          onGuessSubmit={handleGuessSubmit}
        />
      </main>
    </div>
  );
}

export default App;
