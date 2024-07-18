/* 
Binary Search Tree is a Data structure that allows you to quickly find and organize data

Here each node can only have two branches, and they are sorted. 

Each left-subtree is lesser than or equal to the parend node and each right-subtree is greater than or equal to the parent node 
*/

class Node {
    constructor (value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(value){
        this.root = new Node(value)
        this.count = 0
    }


    size(){
        return this.count
    }

    insert(){
        this.count ++
        
        let newNode = new Node(value)

        const searchTree = node => {
            // if value < node.value go left
            if(value < node.value){
                // if no left child, append new node
                if(!node.left){
                    node.left = newNode
                }
                // if left child, look left again
                else{
                    searchTree(node.left)
                }
            }
            //if value > node.value go right
            if(value > node.value){
                // if no right child, append new node
                if(!node.right){
                    node.right = newNode
                }
                // if right child, look left again
                else {
                    searchTree(node.right)
                }
            }
        }

        searchTree(this.root)
    }

    min(){

    }

    max(){

    }

    contains(){

    }

    //depth first search

    // in-order
    dfsInOrder(){

    }

    //pre-order
    dfsPreOrder(){
        
    }

    //post-order
    dfsPostOrder(){
        
    }

    //breadth first search

}