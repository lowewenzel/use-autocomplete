class PrefixTreeNode {
  character: string;
  children: { [key: string]: PrefixTreeNode };
  terminal: boolean;

  constructor(char: string) {
    this.character = char;
    this.children = {};
    this.terminal = false;
  }

  isTerminal(): boolean {
    return this.terminal;
  }

  numChildren(): number {
    return Object.keys(this.children).length || 0;
  }

  hasChild(character: string): boolean {
    return !!this.children?.[character];
  }

  getChild(character: string): PrefixTreeNode {
    if (this.hasChild(character)) {
      return this.children[character];
    }
    throw Error(`No child with character: ${character}`);
  }

  addChild(character: string, childNode: PrefixTreeNode) {
    if (!this.hasChild(character)) {
      this.children[character] = childNode;
    }
  }

  toString(): string {
    return this.character;
  }
}

class PrefixTree {
  root: PrefixTreeNode;
  size: number;
  constructor(strings: Array<string> = []) {
    this.root = new PrefixTreeNode('');
    this.size = 0;
    if (strings.length) {
      strings.forEach((str) => this.insert(str));
    }
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  contains(str: string): boolean {
    const [node] = this._find_node(str);
    return !!(node && node.isTerminal());
  }

  insert(str: string) {
    let [node] = this._find_node(str);
    if (node && node.isTerminal()) {
      return;
    }

    node = this.root;

    for (const character of str.toLowerCase()) {
      if (!node.hasChild(character)) {
        node.addChild(character, new PrefixTreeNode(character));
      }
      node = node.children[character];
    }

    node.terminal = true;

    this.size += 1;
  }

  complete(prefix: string): Array<string> {
    const completions: Array<string> = [];

    let [node] = this._find_node(prefix);
    if (!node || node === null) {
      return [];
    }

    if (node.isTerminal()) {
      completions.push(prefix);
    }

    Object.keys(node.children).forEach((key) => {
      const child = node!.children[key];
      this._traverse(child, prefix + child.character, (str: string) => {
        completions.push(str);
      });
    });

    return completions;
  }

  strings() {}

  _find_node(str: string): [PrefixTreeNode | null, number] {
    let depth = 0;

    if (!!!str.length) return [this.root, 0];

    let node = this.root;

    for (const character of str) {
      const foundNode = node.children?.[character];
      if (foundNode) {
        node = foundNode;
        depth += 1;
      } else {
        return [null, depth];
      }
    }

    return [node, depth];
  }

  _traverse(node: PrefixTreeNode, prefix: string, visit: Function) {
    if (node.isTerminal()) {
      visit(prefix);
    }
    Object.values(node.children).forEach((n) => {
      this._traverse(n, prefix + n.character, visit);
    });
  }
}

export default PrefixTree;
