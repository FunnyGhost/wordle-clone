import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function HappyBanner({ noOfGuesses }) {
  return (
    <div className='banner happy'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {noOfGuesses} guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className='banner sad'>
      <p>
        <strong>Sorry!</strong> You ran out of guesses. The correct answer was{' '}
        <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Banner({ lastGuess, answer, noOfGuesses }) {
  const showBanner = lastGuess === answer || noOfGuesses === NUM_OF_GUESSES_ALLOWED;
  if (!showBanner) {
    return null;
  }

  const isGameWon = lastGuess === answer;
  return isGameWon === true ? (
    <HappyBanner noOfGuesses={noOfGuesses} />
  ) : (
    <SadBanner answer={answer} />
  );
}

export default Banner;
