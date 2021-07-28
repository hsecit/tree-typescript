import { Tree } from './Tree'

let tree = new Tree()
//          14
//      5         44
//   2     7   15     70     
//        


tree.insert(14)
tree.insert(44)
tree.insert(5)
tree.insert(7)
tree.insert(2)
tree.insert(15)
tree.insert(70)

tree.inOrderTraverse(tree.print)
// inOrder
// 2 -> 5 => 7 => 14 => 25 => 44 => 70

tree.preOrderTraverse(tree.print)
// preOrde
// 14 => 5 => 2 => 7 => 44 => 15 => 70 

tree.postOrderTraverse(tree.print)
// tree.showPreOrder().then(res => {
//     console.log(res);

// })