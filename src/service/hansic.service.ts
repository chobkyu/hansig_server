import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class HansicService{
    
    async getHansicDate(){
        try{
            const data = await prisma.hansics.findMany();
            //console.log(data)
            
            return {data,success:true}
        }catch(err){
            console.error(err);
            return {success:false}
        }
    }
}

module.exports = HansicService;