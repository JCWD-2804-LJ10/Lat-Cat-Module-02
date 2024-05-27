console.log("variable declaration");
console.log("================================================================");
let num: number = 21;
let str: string = "john";
let check: boolean = true;
let value: null = null;
let score: undefined = undefined;

console.log(num);
console.log(str);
console.log(check);
console.log(value);
console.log(score);

let anything: any = "halololololololololololololololololol";
console.log(anything);
anything = 100;
console.log(anything);
anything = null;
console.log(anything);

let multiple: number | string;

multiple = 21;
console.log(multiple);
multiple = "multiple";
console.log(multiple);

console.log("================================================================");
console.log("function declaration");
console.log("================================================================");

function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(10, 5));
function dec(a: number, b: number): void {
  console.log(a - b);
}
dec(30, 10);

function idPrint(id: number | string): void {
  console.log("your id is ", id);
}

idPrint("johnny");
idPrint(25);

function randomnum(): number | boolean {
  return Math.random() > 0.5 ? 100 : false;
}
console.log(randomnum());

console.log("================================================================");
console.log("array declaration");
console.log("================================================================");
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrname: string[] = ["jamal", "kevin", "peter"];
let arrname2: Array<string> = ["jamal", "kevin", "peter"];
let multiplearr: Array<number | number[]> = [10, [16, 17, 18, 19, 20]];

console.log(arr);
console.log(arrname);
console.log(multiplearr);
console.log(arrname2);
console.log(arr2);

console.log("================================================================");
console.log("tuple declaration");
console.log("================================================================");

let orangorang: [string, number];
orangorang = ["james", 7];
console.log(orangorang);

console.log("================================================================");
console.log("enum declaration");
console.log("================================================================");

enum Color {
  red,
  green,
  blue,
}

let favcolor: Color = Color.red;
console.log(favcolor);
favcolor = Color.blue;
console.log(favcolor);
favcolor = Color.green;
console.log(favcolor);

enum stats {
  attack = 100,
  defense = 200,
  speed = 300,
  hp = 400,
  special = 500,
  total = attack + defense + speed + hp + special,
}
let curstat: stats = stats.attack;
console.log(curstat);
curstat = stats.defense;
console.log(curstat);
curstat = stats.speed;
console.log(curstat);
curstat = stats.hp;
console.log(curstat);
curstat = stats.special;
console.log(curstat);
curstat = stats.total;
console.log(curstat);

console.log("================================================================");
console.log("object and type declaration");
console.log("================================================================");

let student: {
  name: string;
  age: number;
  hobbies: string[];
  isMarried?: boolean;
} = {
  name: "jamal",
  age: 21,
  hobbies: ["coding", "sleeping"],
  isMarried: false,
};

console.log(student.name);
// TAMBAHKAN ? DI PROPERTI JIKA INGIN TAK HARUS//
type addy = {
  street: string;
  city: string;
  country?: string;
};

type people = {
  name: string;
  age: number;
  address: addy;
  id: number;
};

const charas: people = {
  id: 1,
  name: "jamal",
  age: 21,
  address: {
    street: "street",
    city: "city",
    country: "country",
  },
};
console.log(charas);

console.log("================================================================");
console.log("interface declaration");
console.log("================================================================");

interface Animal {
  name: string;
  age: number;
}

interface Dogs extends Animal {
  breed: string;
  bark(): void;
}

class pet implements Animal {
  name: string;
  age: number;
  breed: string;
  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  bark(): void {
    console.log(this.name, "is barking");
    // setTimeout(() => console.log("bark bark bark kark"), 2000);
    console.log("bark bark bark kark");
  }
}
const myDog: pet = new pet("Gori", 1, "labrador");
myDog.bark();

console.log("================================================================");
console.log("Type union declaration");
console.log("================================================================");

type success = {
  status: "success";
  data: string;
};

type fail = {
  status: "failure";
  error: string;
};

type response = success | fail;

function handleres(result: response): void {
  if (result.status === "success") {
    console.log("success : ", result.data);
  } else {
    console.log("fail : ", result.error);
  }
}

function mathrandomgen(): response {
  const randomval = Math.random() * 10;
  if (randomval < 5) {
    return {
      status: "success",
      data: "operation is good",
    };
  } else {
    return {
      status: "failure",
      error: "operation is not good",
    };
  }
}
handleres(mathrandomgen());
