import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessResults({ guessResults, answer }) {
  const allowedGuesses = range(NUM_OF_GUESSES_ALLOWED);

  const resultElements = allowedGuesses.map((guessIndex) => (
    <Guess key={guessIndex} guess={guessResults[guessIndex]} answer={answer} />
  ));

  return <div className='guess-results'>{resultElements}</div>;
}

export default GuessResults;
