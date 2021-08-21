package main

import (
	"fmt"
)

type Node struct {
	data  int
	left  *Node
	right *Node
}

func dfs(root *Node) {
	if root != nil {
		dfs(root.left)
		fmt.Println(root.data)
		dfs(root.right)
	}
}

func main() {
	root := Node{
		data:  1,
		left:  &Node{data: 2, left: nil, right: nil},
		right: &Node{data: 3, left: nil, right: nil},
	}
	dfs(&root)
}
