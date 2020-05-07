<div align="center">

## React use-autocomplete

[![npm version](https://badge.fury.io/js/use-autocomplete.svg)](https://badge.fury.io/js/use-autocomplete)

</div>

## About

This is a hook, `useAutocomplete`, that returns autocomplete values using a prefix tree. This is for front-end autocompletion rather than remote autocompletion, which is more commonly used.

Use it in any input component, see [examples](./examples) for more.

## How to install

Run the following to install the hook

```bash
yarn install react-autocomplete
```

## How to use

Import from `use-autocomplete` and pass in the search term and list of values. Small example:

#### With fake data

```js
import React, { useState } from 'react';
import useAutocomplete from 'use-autocomplete';

import testWords from './data/testWords.json';

const Example = () => {
  const [textState, setTextState] = useState('');
  const [completions] = useAutocomplete(textState, testWords);

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
```

#### Data conversion

```js
import React, { useState } from 'react';
import useAutocomplete from 'use-autocomplete';

const Example = ({ someSampleObject }) => {
  const [textState, setTextState] = useState('');
  const [completions] = useAutocomplete(
    textState,
    Object.keys(someSampleObject)
  );

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
```

<a name="contributing"></a>

## Contributing

Pull requests welcome!
