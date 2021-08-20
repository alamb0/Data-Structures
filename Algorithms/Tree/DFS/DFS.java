package Algorithms.Tree.DFS;

public class DFS {
    public static class TreeNode {
        int data;
        TreeNode left;
        TreeNode right;

        TreeNode(int data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);

        dfs(root);
    }

    // inorder dfs
    // 2
    // 1
    // 3
    public static void dfs(TreeNode root) {
        if (root != null) {
            dfs(root.left);
            System.out.println(root.data);
            dfs(root.right);
        }
    }
}
