"use strict";
function t01() {
    const n = 55;
    return n;
}
console.log(t01());
function t02() {
    document.querySelector('.out-1').textContent = 'hello';
}
t02();
function t03(a, b) {
    return a * b;
}
console.log(100 - t03(4, 5));
function t04(a, b) {
    console.log(a * b);
}
t04(5, 6);
function t06(a, b) {
    let increase;
    (b) ? increase = a * b : increase = a;
    return increase;
}
console.log(t06(10, 50));
console.log(t06(10));
function checkEmail(email) {
    if (email.indexOf('@') !== -1)
        return email.toLocaleLowerCase();
    return false;
}
console.log(checkEmail('harry@Poter'));
console.log(checkEmail('harryPoter'));
(checkEmail('harry@Poter')) && console.log('GOOD');
//# sourceMappingURL=script.js.map