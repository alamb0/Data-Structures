const tree = [0, 1, 2, 3, 4, 5, 6];
// full binary tree
//            0
//      1           2
//    3    4     5     6

function printTree(tree) {
  // root node
  console.log(tree[0]);

  for (let i = 0; i < tree.length; i++) {
    const left = tree[2 * i + 1] || null;
    const right = tree[2 * i + 2] || null;

    if (left) {
      console.log(left);
    }
    if (right) {
      console.log(right);
    }
  }
}

printTree(tree);
// 0
// 1
// 2
// 3
// 4
// 5
// 6
