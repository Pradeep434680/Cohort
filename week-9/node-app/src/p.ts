// function greet( firstname:string)
// {
//     console.log('greet',firstname);
    
// }
// const a:string = 'pradeep'
// greet(a)


// function sum(a:number,b:number):number{
//     return a+b;
// }

// console.log(sum(2,3));


// function runAfter1S(fn:()=>void)// fun does not takes any argument and nothing returns =>callback
// {
//     setTimeout(fn,10000);
// }

// runAfter1S(function()
// {
//     console.log('hi there');
    
// })
// function sum(a:number,b:number)
// {
//     return a+b;
// }

// function runAfter1S(fn:()=>void)
// {
//     setTimeout(fn,1000);
// }

// runAfter1S(()=>{
//     console.log('hii there');
    
// })
// const greet = (name)=>`hello ${name}`

/// target
//When you set "target": "es2016", you're telling the TypeScript compiler to compile
// your TypeScript code into ECMAScript 2016 (also known as ES7). This means the generated 
//JavaScript will use features that are available in ES2016.
// const a =()=>{
//     console.log('hii there');
    
// }

// function  greet(name){// dueto "noImplicitAny": false,   
//     console.log('hii there');
    
// }
// greet("pradeep")

// interface User{
//     firstname:string;
//     lastname:string;
//     email?:string;//?optional
//     age:number
// }
// function isvalid(user:User)
// {
//     if(user.age>18)
//         return true;
//     else false;
// }
// const user = {
// 	firstName: "harkirat",
// 	lastName: "singh",
// 	email: "email@gmail.com",
// 	age: 21,
// }
// isvalid({
// 	firstname: "harkirat",
// 	lastname: "singh",
	
// 	age: 21,
// })

// type User={
//     username:string,
//     email:string,
//     age:number
// }
// function userDetails(user:User)
// {
//     console.log(user.username);
//     console.log(user.age);
//     console.log(user.email)
// }

// const user = {
//     username:"pradeep",
//     email:"ok@hmail.com",
//     age:20
// }
// userDetails(user)



// type StringOrNumber = string | number;

// function printId(id: StringOrNumber) {
//   console.log(`ID: ${id}`);
// }

// printId(101); // ID: 101
// printId("202"); // ID: 202



// interface  User{
//     age:number
// }
// interface Manager extends User{
//     name:number
// }
// interface Employe extends User{
//     name:string
// }

// function doSomething(cb1:(num:number)=>void,cb2:(str:string)=>string):string{

//     return ""
// }
// function doSomething(cb2:(num:number,str:string)=>string):string{
//     const x = cb2(2,"x");
//     return "1"
// }
// interface Manager{
//     name:string
// }

// type Techlead={
//     age:number
// }

// type Both = Techlead & Manager; //valid
// interface Both  = Techlead  & Manager; not valid



// enums
// game
// type KeyInput = "up"|"down"|"left"|"right";
// function doSomething(KeyPressed:KeyInput){
//     // logic onclick keys
// }
// doSomething("up");
// doSomething("down");
// doSomething("doudhnwed");

//syntex of emus
//uper syntex is doing the same work but this is more readable
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// function doSomething(KeyPressed:Direction)
// {
//     if(KeyPressed==Direction.Up)
//     {

//     }
// }
// doSomething(Direction.Up)
// console.log(Direction.Up);// 0
// console.log(Direction.Down);//1


// see the code in the js file it will make own logic

// how to change the value of up and down

// enum Direction {
//     Up="up",
//     Down="down",
//     Left="left",
//     Right="right"
// }
// if  i make up==1 then all will start from 1 and go to ...n
// if i make first one 10 then the second one will become 11 and so on


//next topic
// generics
// qoestion find the first element of the arr .it can contain the number as well as the string
type Input = string | number;
function getFirstNum(arr:Input[])
{
    return arr[0];
}
const value = getFirstNum(["pradeep","kumar"])
// console.log(value);
//upto here there is no problem
//but
// console.log(value.toUpperCase());
//error is brcause the value can be number and the string dueto number the toUpperCase is not possible

//second problem is that arr cann't have to type of elements 
// ["pradeep","kumar",1.2] X

//solution is generics

function identity<T>/*called by anythinf*/(arg:T){
    return arg;
}
let output1 = identity<string>("hellp")
let output2 = identity<number>(4)
//<T> =>anything

// actual solution
function firstElement<T>(arr:T[]){
    return arr[0];
}
const el = firstElement<string>(["pradeep","kumar"])
const el2 = firstElement<string|number>(["raju","kumar",1,2,3])
const el1 = firstElement<number>([1,2,3,4])
console.log(el2);


