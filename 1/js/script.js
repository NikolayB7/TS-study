"use strict";
let a = 3;
let b = 'hello';
let b1 = '1';
let c = true;
b1 = String(a);
let d = Number(b1);
let e = !Boolean(b1);
let f = b;
let g = +b1;
console.log(g);
console.log(a, b, c);
console.log(b1, d, e, f);
document.querySelector('.out-1').textContent = String(c);
const h = +document.querySelector('.out-2').textContent;
console.log(h);
//# sourceMappingURL=script.js.map