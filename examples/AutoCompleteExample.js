import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useAutocomplete from 'use-autocomplete';

import testwords from './testdata/testwords.json';

const Example = () => {
  const [textState, setTextState] = useState('');
  const [completions] = useAutocomplete(textState, testwords);

  return (
    <div>
      <input
        type='text'
        value={textState}
        onChange={(e) => setTextState(e.target.value)}
      />
      <div>
        {completions.map((val, index) => (
          <p key={index}>{val}</p>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>React use-autocomplete example</p>
        <Example />
      </header>
    </div>
  );
}

export default App;
