import React from 'react';

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState('');

  const submitGuess = (event) => {
    event.preventDefault();

    addGuess(guess);
    setGuess('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={(event) => submitGuess(event)}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        minLength='5'
        maxLength='5'
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
