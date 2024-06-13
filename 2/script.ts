// const i1 = <HTMLInputElement>document.querySelector('#i-1');
const i1 = document.querySelector('#i-1') as HTMLInputElement;

console.log(i1.value);


const i2 = document.querySelector('#i-2') as HTMLInputElement;

console.log(i2.value);

i2.value = String(222)
console.log(i2.value);

const i3 = <HTMLInputElement>document.querySelector('input[type="checkbox"]') as HTMLInputElement;

console.log(i3.checked);

const i4 = (<HTMLInputElement>document.querySelector('input[name="r"]:checked')).value;

console.log(i4);

const s = document.querySelector('select').value;
const s2 = (<HTMLSelectElement>document.querySelector('.s-2'));

console.log(s);
console.log(s2.value);

s2.value = 'aaa'


const i8 = document.querySelector('.i-8') as HTMLInputElement | null //TODO зачем |null

console.log(i8);
console.log(i8?.value);

(i8 !== null) && console.log(i8.value);

if (i8 !== null) {
    console.log(i8.value);
}
// console.log(i8.value);
