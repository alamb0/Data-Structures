class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const dfs = (root) => {
  if (root !== null) {
    dfs(root.left);
    console.log(root.value);
    dfs(root.right);
  }
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

dfs(root);
// inorder traversal
// 2
// 1
// 3
