import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const UserService = require('../../service/user.service')
import express,{Express,Request,Response} from 'express';

const process = {
    insertUser : async (req:Request,res:Response) => {
        try{
            console.log(req.body)
            const userservice = new UserService(req.body)
            const response = await userservice.insertUser();
            
            if(req.body.name == null || req.body.age == null){
                return res.status(400).json({err:'데이터 없음'})
            }
            console.log(response.success)
            if(response.success){
                return res.status(201).end();
            }
            return res.status(500).end();

        }catch(err){
            console.log(err)
        }
    },
}

module.exports ={
    process
}