// $ g++ -std=c++11 -O2 -Wall dfs.cpp -o dfs
// $ ./dfs

#include <iostream>
#include <string>

using namespace std;

struct Node
{
    int data;
    struct Node *left;
    struct Node *right;

    Node(int value)
    {
        data = value;
        left = NULL;
        right = NULL;
    }
};

void dfs(Node *root);

int main()
{
    struct Node *root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);

    dfs(root);
    return 0;
}

// inorder dfs
// 2
// 1
// 3
void dfs(Node *root)
{
    if (root != NULL)
    {
        dfs(root->left);
        cout << root->data << endl;
        dfs(root->right);
    }
}