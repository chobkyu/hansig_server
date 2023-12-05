import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAll = async (req:Request,res:Response) => {
    try{
        console.log('getAll')
        const data = await prisma.hansics.findMany();
        //console.log(data)
        console.log(typeof data)
        return data
    }catch(err){
        console.log(err);
    }

}

module.exports ={
    getAll
}