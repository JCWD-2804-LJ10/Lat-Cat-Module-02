let num: number = 21;
let str: string ="john";
let check: boolean = true;
let value: null = null;
let score: undefined = undefined;

console.log(num)
console.log(str)
console.log(check)
console.log(value)
console.log(score)

let anything: any = "halololololololololololololololololol"
console.log(anything)
anything =100
console.log(anything)
anything = null
console.log(anything)

let multiple: number | string ;

multiple = 21;
console.log(multiple)
multiple = "multiple"
console.log(multiple)

function sum (a: number, b: number) : number {
    return a + b;
}

console.log(sum(10,5))
function dec (a: number, b: number) : void {
    console.log(a - b);
}
dec(30,10)

function idPrint (id: number | string) : void {
    console.log("your id is ", id);
}

idPrint("johnny")
idPrint(25)

function randomnum () : number | boolean {
    return Math.random() > 0.5? 100 : false;
}
console.log(randomnum())

let arr: number[] = [1,2,3,4,5,6,7,8,9,10]
let arr2: Array<number> = [1,2,3,4,5,6,7,8,9,10]
let arrname: string[] = ["jamal","kevin","peter"]
let arrname2: Array<string> = ["jamal","kevin","peter"]
let multiplearr: Array<number | number[]> =[10,[16,17,18,19,20]]

console.log(arr)
console.log(arrname)
console.log(multiplearr)
console.log(arrname2)
console.log(arr2)

let orangorang:[string,number]
orangorang = ["james",7]
console.log(orangorang)


enum Color{
    red,
    green,
    blue
}

let favcolor: Color = Color.red
console.log(favcolor)
favcolor = Color.blue
console.log(favcolor)
favcolor = Color.green
console.log(favcolor)
