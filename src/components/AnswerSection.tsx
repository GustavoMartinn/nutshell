import React from 'react';

interface AnswerSectionProps {
  answer: string;
  isVisible: boolean;
  onToggleVisibility: () => void;
}

export const AnswerSection: React.FC<AnswerSectionProps> = ({
  answer,
  isVisible,
  onToggleVisibility,
}) => {
  return (
    <div className='answer-section'>
      <button onClick={onToggleVisibility} className='show-answer-btn'>
        {isVisible ? '🙈 Esconder Resposta' : '👁️ Mostrar Resposta'}
      </button>
      {isVisible && (
        <div className='answer-display'>
          <strong>Resposta:</strong> {answer}
        </div>
      )}
    </div>
  );
};
