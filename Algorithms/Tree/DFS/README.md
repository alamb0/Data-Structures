# Tree Traversal / DFS

# C++
```bash
g++ -std=c++11 -O2 -Wall dfs.cpp -o dfs
./dfs
```

# Java

# Python
```bash
python3 dfs.py
```

# Go
```bash
go run dfs.go
```

# JavaScript
```
node dfs.js
```

Inorder Tree Traversal 
- Left
- Root
- Right

Example Tree

![Tree](./assets/tree1.png?raw=true)

The inorder traversal starts with the entire tree as seen in the bottom of the call stack. Then recursively the tree is traversed from left subtree, to root, to right subtree. The recursive base case is if a node is null and the leaf nodes of the tree return null. This is shown in a example here:

![Sub Tree](./assets/child.png?raw=true)

Example Call Stack

![Call Stack](./assets/call-stack.png?raw=true)
