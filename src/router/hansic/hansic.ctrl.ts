import express,{Express,Request,Response} from 'express';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const hansicService = require('../../service/hansic.service');

const output = {
    getAll : async (req:Request,res:Response) => {
        const response = await hansicService.getAll();
        if(response.success) return res.json(response);
        else return res.status(500);
    
    }
}

const process = {

}

module.exports ={
    output,process
}