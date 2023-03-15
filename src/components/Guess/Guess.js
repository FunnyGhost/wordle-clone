import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  const guessLetters = range(5);

  const cells = guessLetters.map((letterIndex) => (
    <span className='cell' key={letterIndex}>
      {guess?.[letterIndex] || ''}
    </span>
  ));
  return <p className='guess'>{cells}</p>;
}

export default Guess;
