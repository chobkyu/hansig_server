import { user } from "../interface/user";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class UserService {
    body:user;
    constructor(body:user){
        this.body = body;
    }

    async insertUser(){
        const user:user = this.body;
        console.log(this.body)
        try{
            await prisma.$queryRaw`insert into users values (${user.name},${user.age})`

            return {success:true}
        }catch(err){
            console.error(err);
            return {success:false}
        }
    }
}


module.exports = UserService