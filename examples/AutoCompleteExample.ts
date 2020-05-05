import React from 'react';
import PrefixTree from '../dist';

const AutoCompleteExample = () => {
  const [tree, setTree] = React.useState(new PrefixTree());

  console.log(tree);

  return null;
};
