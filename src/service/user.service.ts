import { success } from "../interface/success";
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
            //데이터 체크
            const checkData = this.checkData(user);
            if(!checkData.success) return {success:false,status:400};

            //아이디 중복 체크
            const checkId = await this.checkId(user.userId);
            if(!checkId.success) return {success:false,status:409};

            //닉네임 중북 체크
            const checkNickName = await this.checkNickName(user.userNickName);
            if(!checkNickName.success) return {success:false, status:409};


            await prisma.user.create({
                data:{
                    userId:user.userId,
                    userPw:user.userPw,
                    userName:user.userName,
                    userNickName:user.userNickName
                }
            });
            return {success:true,status:201};
        }catch(err){
            console.error(err);
            return {success:false}
        }
    }

    /**입력 값 체크 */
    checkData(user:user){
        if(user.userId == null || user.userName == null || user.userNickName == null || user.userPw ==null){
            return {success:false,status:400}
        }else return {success:true};
    }


    /**닉네임 중복체크 */
    async checkNickName(userName:string) : Promise<success>{
        try{
            const res = await prisma.user.findFirst({
                where:{
                    userNickName:userName
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

    /**아이디 중복 체크 */
    async checkId(userId:string) : Promise<success>{
        try{
            const res = await prisma.user.findFirst({
                where:{
                    userId:userId
                }
            });

            if(res) return {success:false};
            else return {success:true};

        }catch(err){
            console.log(err);
            return {success:false};
        }
    }
}


module.exports = UserService