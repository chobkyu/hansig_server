import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const UserService = require('../../service/user.service')
import express,{Express,Request,Response} from 'express';

const output = {

}

const process = {
    insertUser : async (req:Request,res:Response) => {
        try{
            //console.log(req.body)
            const userservice = new UserService(req.body)
            const response = await userservice.insertUser();
            
            if(response.success){
                return res.status(201).end();
            }
            return res.status(response.status).end();
        }catch(err){
            console.log(err)
            return res.status(500).end();

        }
    },
}

module.exports ={
    output,process
}