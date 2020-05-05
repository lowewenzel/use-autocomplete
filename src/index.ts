import React from 'react';
import PrefixTree from './PrefixTree';

const useAutocomplete = () => {
  const [tree, setTree] = React.useState(new PrefixTree());

  console.log(tree);
};
