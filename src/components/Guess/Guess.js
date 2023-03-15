import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ guess, answer }) {
  const guessLetters = range(5);
  const validatedGuess = checkGuess(guess, answer);

  const cells = guessLetters.map((letterIndex) => {
    const className = `cell ${validatedGuess?.[letterIndex]?.status || ''}`;

    return (
      <span className={className} key={letterIndex}>
        {guess?.[letterIndex] || ''}
      </span>
    );
  });

  return <p className='guess'>{cells}</p>;
}

export default Guess;
