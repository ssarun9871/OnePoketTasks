const a=[2,4,4];

function sum(array){
  return array.reduce((acc,curr) => {
   acc = acc+curr;
   return acc
  },0)
}

console.log(sum(a));