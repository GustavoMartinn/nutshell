export interface Question {
  id: string;
  text: string;
  words: string[];
  answer: string;
  category?: string;
}

export interface GameState {
  currentQuestion: Question;
  revealedWords: number[];
  isAnswerVisible: boolean;
  guessText: string;
  isGuessCorrect: boolean | null;
}
