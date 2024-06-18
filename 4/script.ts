
const t01 = (a:number,b:number):number => a*b

console.log(t01(5,2));

const t02 = (a:number,b:number = 4):number => a*b

console.log(t02(5))
console.log(t02(5,3))