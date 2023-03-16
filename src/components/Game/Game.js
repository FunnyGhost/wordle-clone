import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { WORDS } from '../../data';
import { sample } from '../../utils';
import Banner from '../Banner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every page load.
const answer = sample(WORDS);

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  const addGuess = (guess) => {
    setGuessResults((guessResults) => [...guessResults, guess]);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={guessResults.length === NUM_OF_GUESSES_ALLOWED} />

      <Banner noOfGuesses={guessResults.length} answer={answer} lastGuess={guessResults.at(-1)} />
    </>
  );
}

export default Game;
