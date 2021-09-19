import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class LevelOrder {
    public static class TreeNode {
        int data;
        List<TreeNode> children;

        TreeNode(int data) {
            this.data = data;
            this.children = new ArrayList<>();
        }

        public void setChildren(List<TreeNode> children) {
            this.children = children;
        }
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.children = Arrays.asList(new TreeNode(2), new TreeNode(3), new TreeNode(4));

        levelOrder(root);
    }

    // level order of N-ary tree output:
    // 1
    // 2
    // 3
    // 4
    public static void levelOrder(TreeNode root) {
        if (root != null) {
            System.out.println(root.data);
            for (int i = 0; i < root.children.size(); i++) {
                levelOrder(root.children.get(i));
            }
        }
    }
}
