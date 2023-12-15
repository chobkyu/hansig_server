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
            await prisma.$queryRaw`insert into user(userId,userPw,userName,userNickName) values (${user.userId},${user.userPw})`

            return {success:true}
        }catch(err){
            console.error(err);
            return {success:false}
        }
    }

    async checkNickName(userName:string){
        try{
            const res = await prisma.user.findFirst({
                where:{
                    userName:userName
                },
            });

            if(res){
                return {success:false};
            }else{
                return {success:true};
            }
        }catch(err){
            console.log(err);
            return {success:false};
        }
    }

    async checkId(userId:string){
        try{

        }catch(err){
            console.log(err);
            return {success:false};
        }
    }
}


module.exports = UserService