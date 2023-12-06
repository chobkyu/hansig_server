import express,{Express,Request,Response} from 'express';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAll = async (req:Request,res:Response) => {
    try{
        const data = await prisma.hansics.findMany();
        //console.log(data)
        
        return res.json(data)
    }catch(err){
        console.log(err);
    }

}

module.exports ={
    getAll
}