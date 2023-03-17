import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function HappyBanner({ noOfGuesses, restartGame }) {
  return (
    <div className='banner happy'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {noOfGuesses} guesses</strong>.
      </p>

      <button className='btn btn-restart' onClick={restartGame}>
        {' '}
        Restart
      </button>
    </div>
  );
}

function SadBanner({ answer, restartGame }) {
  return (
    <div className='banner sad'>
      <p>
        <strong>Sorry!</strong> You ran out of guesses. The correct answer was{' '}
        <strong>{answer}</strong>.
      </p>

      <button className='btn btn-restart' onClick={restartGame}>
        {' '}
        Restart
      </button>
    </div>
  );
}

function Banner({ lastGuess, answer, noOfGuesses, restartGame }) {
  const showBanner = lastGuess === answer || noOfGuesses === NUM_OF_GUESSES_ALLOWED;
  if (!showBanner) {
    return null;
  }

  const isGameWon = lastGuess === answer;
  return isGameWon === true ? (
    <HappyBanner noOfGuesses={noOfGuesses} restartGame={restartGame} />
  ) : (
    <SadBanner answer={answer} restartGame={restartGame} />
  );
}

export default Banner;
