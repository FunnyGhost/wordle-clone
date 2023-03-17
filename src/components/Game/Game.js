import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import Banner from '../Banner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Keyboard from '../Keyboard';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guessResults, setGuessResults] = React.useState([]);
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  const addGuess = (guess) => {
    const validatedGuess = checkGuess(guess, answer);
    setGuessedLetters((guessedLetters) => [...guessedLetters, ...validatedGuess]);

    setGuessResults((guessResults) => [...guessResults, guess]);
  };

  const restartGame = () => {
    setAnswer(sample(WORDS));
    setGuessResults([]);
    setGuessedLetters([]);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={guessResults.length === NUM_OF_GUESSES_ALLOWED} />
      <Keyboard guessedLetters={guessedLetters} />

      <Banner
        noOfGuesses={guessResults.length}
        answer={answer}
        lastGuess={guessResults.at(-1)}
        restartGame={restartGame}
      />
    </>
  );
}

export default Game;
