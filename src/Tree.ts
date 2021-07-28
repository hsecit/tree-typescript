interface BinaryTree {
    insert: (key) => void
    insertNode: (node: NodeTree, newNode: NodeTree) => void
    // showPreoder: () => Promise<number[]>
}

/**
 * @class Node hepler
 */
class NodeTree {
    key: number
    left: NodeTree
    right: NodeTree

    constructor(key: number) {
        this.key = key
        this.left = null
        this.right = null

    }
}

/**
 * @class build new tree with more methods
 */

class Tree implements BinaryTree {
    root: NodeTree
    constructor() {
        this.root = null
    }


    /**
     * @method add new node to the tree
     * @param key number
     */
    insert = (key) => {
        let node = new NodeTree(key)
        if (this.root === null) this.root = node
        else {
            this.insertNode(this.root, node)
        }
    }


    /**
     * @method add node to the tree based on the node value
     * @param node current node
     * @param newNode new one
     */
    insertNode(node: NodeTree, newNode: NodeTree) {
        if (newNode.key < node.key) {
            if (node.left == null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right == null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    /**
     * InOrder traverse implemetation
     ** @summary An in-order traversal visits all the nodes of a BST in an ascending order, meaning it will
       visit the nodes from the smallest to the largest. An application of in-order traversal would
       be to sort a tree.
     * @param cb custom callback function
     */
    inOrderTraverse = (cb) => {
        this.inOrderTraverseNode(this.root, cb)
    }

    /**
     * InOrder traverse implemetation
     * @param node selected node
     * @param cb callback function
     */
    inOrderTraverseNode = (node: NodeTree, cb) => {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, cb)
            cb(node.key)
            this.inOrderTraverseNode(node.right, cb)
        }
    }

    /**
     * PreOrder traverse implemetation
     * * @summary A pre-order traversal visits the node prior to its descendants. An application of pre-order
      traversal could be to print a structured document.
     * @param cb callback function
     */
    preOrderTraverse = (cb) => {
        this.preOrderTraverseNode(this.root, cb)

    }

    /**
     * PreOrder traverse implemetation
     * @param node selected node 
     * @param cb custom callback function
     */
    preOrderTraverseNode = (node: NodeTree, cb) => {
        if (node !== null) {
            cb(node.key)
            this.preOrderTraverseNode(node.left, cb)
            this.preOrderTraverseNode(node.right, cb)
        }
    }

    /**
     * PostOrder traverse implementation
     * * @summary A post-order traversal visits the node after it visits its descendants. An application of postorder traversal could be computing the space used by a file in a directory and its
      subdirectories.
     * @param cb 
     */
    postOrderTraverse = (cb) => {
        this.postOrderTraverseNode(this.root, cb)
    }
    /**
     * PostOrder traverse implemetation
     * @param node selected node 
     * @param cb custom callback function
     */
    postOrderTraverseNode = (node: NodeTree, cb) => {
        if (node !== null) {
            this.preOrderTraverseNode(node.left, cb)
            this.preOrderTraverseNode(node.right, cb)
            cb(node.key)
        }
    }

    // callback functions 
    print(val: number) {
        console.log(val);

    }


    /**
     * 
     * @returns the minimum of the tree
     */
    min() {
        return this.minNode(this.root)
    }
    /**
     * 
     * @param node 
     * @returns the minimum of the tree
     */
    minNode = (node: NodeTree) => {
        if (node) {
            while (node && node.left) {
                node = node.left
            }

            return node.key
        }
        return null
    }

    /**
     * 
     * @returns the maximum of the tree
     */
    max() {
        return this.maxNode(this.root)
    }

    /**
     * 
     * @param node 
     * @returns the maximum of the tree
     */
    maxNode = (node: NodeTree) => {
        if (node) {
            while (node && node.right) {
                node = node.right
            }
            return node.key
        }
        return null
    }

    search(key: number) {
        return this.searchNode(this.root, key)
    }

    searchNode = (node: NodeTree, key) => {

        if (node === null) return false
        if (key < node.key) {
            console.log(`LEFT: We're in node ${node.key}`);
            this.searchNode(node.left, key)
        }
        else if (key > node.key) {
            this.searchNode(node.right, key)
            console.log(`RIGHT: We're in node ${node.key}`);
        }
        else {
            console.log("True");

            return true
        }
    }


}

export { Tree }









