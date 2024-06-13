let a: number = 3;
let b: string = 'hello';
let b1: string = '1';
let c: boolean = true;

b1 = String(a);
let d = Number(b1)
let e = !Boolean(b1)
let f: any = b;

let g: number = +b1;
console.log(g);


console.log(a, b, c)
console.log(b1, d, e, f);

document.querySelector('.out-1').textContent = String(c)
const h: number = +document.querySelector('.out-2').textContent

console.log(h);

