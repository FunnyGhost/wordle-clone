import React from 'react';

function GuessResults({ guessResults }) {
  const resultElements = guessResults.map((result, i) => (
    <p className='guess' key={i}>
      {result}
    </p>
  ));

  return <div className='guess-results'>{resultElements}</div>;
}

export default GuessResults;
