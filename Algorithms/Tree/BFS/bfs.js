class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const bfs = (root) => {
  const queue = [];
  queue.push(root);

  while (queue.length) {
    const node = queue.shift();
    console.log(node.value);

    if (node.left != null) {
      queue.push(node.left);
    }
    if (node.right != null) {
      queue.push(node.right);
    }
  }
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

bfs(root);
// 1
// 2
// 3
