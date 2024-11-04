// interface User{
//     name:string,
//     age:number
// }

// function sumOfAge(u1:User,u2:User)
// {
//     return u1.age + u2.age;
// }
// const ans =sumOfAge({name:"pradeep",age:20},{name:"ravi",age:16})
// console.log(ans);

// i want to hit the database and get the user


// first api = PICK
// interface User{
//     name:string,
//     age:number,
//     password:string,
//     email:string,
//     id:string
// }
// async function finduser(){
//     const user = await findOne({where:{eamil:"xccv"}})
// }//return type of this will be user there is no problem

// the problem arise when the some part of the user will be extract 

//i want to update the name age and password of the user 

// function updateUser(name:string,age:number,password:string){

// }

// another method is PICK

// type UpdateProps= Pick<User ,'name'|'age'|'password'>
// function updateUser(user:UpdateProps)
// {
//     //logic to update the user
// }


//second api Partial

// interface User{
//     name:string,
//     age:number,
//     password:string,
//     email:string,
//     id:string
// }

// type UpdateProps= Pick<User ,'name'|'age'|'password'>
// type UpdatePropsOptional =Partial<UpdateProps>// now a can give it only one from the 3

// function updateUser(user:UpdatePropsOptional)
{
    //logic to update the user
    
}


// Readonly
// const a =[1,2,3,4]; 
// a[0] =5; // here we are changing the internal values of the arr not the reference
// although a is constant there is no complain
// const user = "pradeep"
// user ="dgdfgh";
// a=[2,3,4] it wii complain

// const obj ={
//     name:"pk",
//     age:20,

// }

// now i don't watn that some can change the inner values of the object
// type Users={
//     readonly username:string,
//     readonly age:number
// }

// const user1:Users ={
//     username:"pradeep",
//     age:23
// }

// user1.username = "ndsnf"; it will give error

// for whole object 

// const user1:Readonly<Users> ={
//     username:"pradeep",
//     age:23
// }


//Records and Maps

// make a object
//ugly syntex
// type User={
//     username:string,
//     id:string
// }
// type Users={
//     [key:string]:User
// }

// const users:Users ={
//     "userid1":{
//         username:"pradeep",
//         id:"userid1"
//     },
//     "userid2":{
//         username:"kumar",
//         id:"userid2"
//     }
// }


// using records


// type Users = Record<string,number>//<key,value>

// const users:Users ={
//     "age":12,
//     "age2":23
// }



// type Users = Record<string,{username:string,id:number}>

// const users:Users ={
//     "userid1":{
//         username:"pradeep",
//         id:1
//     },
//     "userid2":{
//         username:"kumar",
//         id:2
//     }
// }

// const user = new Map();
// user.set("userid1",{username:"pradeep",age:12})
// user.set("userid2",{username:"kumar",age:34})
// const user1 = user.get("userid1");
// console.log(user1);


// type User={
//     username:string,
//     age:number
// }

// const user = new Map<string , User>();
// user.set("userid1",{username:"pradeep",age:12})
// user.set("userid2",{username:"kumar",age:34})
// const user1 = user.get("userid1");
// console.log(user1);




//exclude

// type EventType = 'click'|'scroll'|'mousemove';

// type ExcludeEvent = Exclude<EventType ,'scroll'>;

// const HandleEvent = (event :ExcludeEvent)=>{
//     console.log(`handling event:${event}`);
    
// }
// HandleEvent('mousemove')
// HandleEvent('scroll')



// *****************************************************

// import { z } from 'zod';

// const stringZodSchema = z.number();
// type stringZodType = z.infer<typeof stringZodSchema>
//here the type of stringZodType will be same as  stringZodSchema schema


import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
//because the type of updatedBody is unknown thaat will be type of the schema so 
type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody:FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);


