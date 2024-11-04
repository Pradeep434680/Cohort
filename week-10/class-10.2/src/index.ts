// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient()
// async function insertUser(username:string,password:string,firstname:string,lastname:string) {
//     const res = await  prisma.user.create({
//         data:{
//             email:username,
//             password,
//             firstname,
//             lastname
//         },
//         select:{
//             id:true,
//             password:true
//         }
//     })
//     console.log(res);
    
// }
// insertUser("pradeepkumar@gmail.com","password1","pradeep1",'kumar')

import { PrismaClient } from "@prisma/client";
import { error } from "console";

const prisma = new PrismaClient();

interface UpdateParams {
    firstname: string;
    lastname: string;
}

async function updateUser(userid: number, {
    firstname,
    lastname
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { id:userid },
    data: {
      firstname,
      lastname
    }
  });
  console.log(res);
}

updateUser(1, {
    firstname: "new name",
    lastname: "singh"
})

// error
// The error occurs because Prisma expects the where clause for the update method
// to match a unique identifier for the User model, usually the id field or another 
//unique field. By default, Prisma may not recognize email as a unique field unless it is defined as such in your schema.

// To fix this issue, you can try one of the following approaches:
// 1. Check if email is Unique in the Schema
// model User {
//     id       Int    @id @default(autoincrement())
//     email    String @unique
//     password String
//     firstname String
//     lastname  String
//   }
  
