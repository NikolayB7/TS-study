

//Возвращение типа данных
function t01(): number {
    const n = 55;
    return n;
}

console.log(t01());


//Процедура
//Ничего не возвращает а только групирует код

function t02(): void {
    document.querySelector('.out-1').textContent = 'hello'
}
t02()

//Аргументы
function t03(a: number, b: number): number {
    return a * b
}

console.log(100 - t03(4, 5));
// console.log(100 - t03('4', 5)); - не запустится копилятор

//Процедура
function t04(a: number, b: number): void {
    console.log(a * b);
}

t04(5, 6)

//кол-во аргументов
// если передать больше аргументов чем обьявлено то получим ошибку в компиляторе
// не обязательные аргументы передаются в конце через '?' -> b?:number
function t06(a: number, b?: number): number {
    let increase;
    (b) ? increase = a * b : increase = a
    return increase
}

console.log(t06(10, 50));
console.log(t06(10));


//Несколько типов данных

function checkEmail(email: string): string | boolean {
    if (email.indexOf('@') !== -1) return email.toLocaleLowerCase()
    return false
}

console.log(checkEmail('harry@Poter'));
console.log(checkEmail('harryPoter'));

(checkEmail('harry@Poter')) && console.log('GOOD');

