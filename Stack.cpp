#include <stdio.h>
#include <stdlib.h>
#include<string>

using namespace std;

struct node {
	int data;
	struct node* next;
} *list = NULL;

//struct node* tail;
int size = 0;

void push(int data);
void pop();
void print_list();
void check_equality();

int main()
{
	print_list();
	push(1);
	print_list();
	push(2);
	print_list();
	push(3);
	print_list();
	push(4);
	print_list();

	pop();
	print_list();
	pop();
	print_list();
	pop();
	print_list();
	pop();
	print_list();

	string equalParens = "{{{}}}";
	string unequalParens = "{{{}}";

	for (int i = 0; i < equalParens.length(); i++) {
		if (equalParens.at(i) == '{')
		{
			push(0);
		}
		else if (equalParens.at(i) == '}') {
			pop();
		}
	}

	check_equality();

	for (int i = 0; i < unequalParens.length(); i++) {
		if (unequalParens.at(i) == '{')
		{
			push(0);
		}
		else if (unequalParens.at(i) == '}') {
			pop();
		}
	}
	
	check_equality();

	getchar();
	return 0;
}

void push(int data)
{
	struct node *new_node = (struct node *)malloc(sizeof(struct node));
	new_node->data = data;
	new_node->next = NULL;

	if (list == NULL) {
		list = new_node;
		//tail = list;
	}
	else {
		struct node* temp = list;
		while (temp->next != NULL) {
			temp = temp->next;
		}
		temp->next = new_node;
	}
	::size++;
}

void pop()
{
	struct node* temp = list->next;
	struct node* follow = list;

	if (temp == NULL) {
		temp = list;
		list = list->next;
		free(temp);
		::size--;
		return;
	}
	else {
		while (temp != NULL)
		{
			if (temp->next == NULL)
			{
				follow->next = temp->next;
				free(temp);
				::size--;
				return;
			}
			follow = temp;
			temp = temp->next;
		}
	}
}

void print_list() {
	struct node* temp = list;

	if (list == NULL) {
		printf("Empty List\n");
	}
	else {
		while (temp != NULL) {
			printf("Data: %d ", temp->data);
			temp = temp->next;
		}
		printf("\n");
	}
}

void check_equality() {
	if (::size == 0) {
		printf("Equal Parenthesis");
	}
	else {
		printf("Unequal Parenthesis");
	}
	printf("\n");
}
