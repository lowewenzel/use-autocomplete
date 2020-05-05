import { useState, useEffect, useRef } from 'react';
import PrefixTree from './PrefixTree';

function useAutocomplete(searchStr: string, strings: Array<string> = []) {
  const [tree, setTree]: [PrefixTree | null, Function] = useState(null);

  useEffect(() => {
    function initializeTree(strings: Array<string> = []) {
      setTree(new PrefixTree(strings));
    }
    if (!tree) {
      initializeTree(strings);
    }
  }, [searchStr, strings, tree]);

  if (tree && searchStr?.length > 0) {
    const treeCopy = tree as PrefixTree;
    return [treeCopy.complete(searchStr)];
  } else {
    return [[]];
  }
}

export default useAutocomplete;
