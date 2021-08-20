class Node:
    def __init__(self, value):
        self.data = value
        self.left = None
        self.right = None


def dfs(root):
    if root:
        dfs(root.left)
        print(root.data)
        dfs(root.right)


root = Node(1)
root.left = Node(2)
root.right = Node(3)
dfs(root)
