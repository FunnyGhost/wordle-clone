import React from 'react';

function Key({ value, possibleGuessedKey }) {
  let keyClass = 'key';
  if (possibleGuessedKey) keyClass += ` ${possibleGuessedKey.status}`;

  return <span className={keyClass}>{value}</span>;
}

function Keyboard({ guessedLetters }) {
  const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
  ];

  const keyElements = keys.map((key) => {
    const possibleGuessedKey = guessedLetters.find((guessedLetter) => guessedLetter.letter === key);

    return <Key key={key} value={key} possibleGuessedKey={possibleGuessedKey} />;
  });

  const firstRowOfKeys = keyElements.slice(0, 10);
  const secondRowOfKeys = keyElements.slice(10, 19);
  const thirdRowOfKeys = keyElements.slice(19, 26);
  return (
    <section>
      <div className='keyboard-row'>{firstRowOfKeys}</div>
      <div className='keyboard-row'>{secondRowOfKeys}</div>
      <div className='keyboard-row'>{thirdRowOfKeys}</div>
    </section>
  );
}

export default Keyboard;
