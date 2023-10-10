// Задайте правильні ts типи для класичних js;

let age: number = 50;
let name_: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number) => { return 100 + a };

// Задайте тип для змінної, в яку можна зберегти будь-яке значення.

let anything: any = -20;
anything = 'Text';
anything = {};

// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.

let some: string;
some = 'Text';

let str: string;

str = some;

// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.

// let person = ['Max', 21];

let person: [string, number];

// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).

enum Status {
  LOADING,
  READY,
}

// Зробіть змінну, яка може приймати або рядок, або число.

let var1: string | number;

// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

let var2: "enable" | "disable";

// Вкажіть типи для наступних функцій

function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// Створіть свій тип даних на основі наявних даних.

// const page1 = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: new Date('2021-01-01'),
//     updateAt: new Date('2021-05-01'),
//   }
// }

// const page2 = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }

type Page = {
  title: string,
  likes: number,
  accounts: string[],
  status: "open" | "close",
  details?: {
    createAt: Date,
    updateAt: Date,
  }
}

