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

// tree.preOrderTraverse(tree.print)
// preOrde
// 14 => 5 => 2 => 7 => 44 => 15 => 70 

// tree.postOrderTraverse(tree.print)


// min 
let min = tree.min()

console.log(`MIN: ${min}`);
console.log(`MAX: ${tree.max()}`);

console.log(`is 70 in the tree = ${tree.search(70)}`);
console.log(`is 7 in the tree = ${tree.search(7)}`);
console.log(`is 6 in the tree = ${tree.search(6)}`);

