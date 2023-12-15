import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const UserService = require('../../service/user.service')
import express,{Express,Request,Response} from 'express';

const output = {
    getUser: async (req:Request,res:Response) => {
        try{
            const userservice = new UserService();
            const id = req.params.id;
            const response = await userservice.getUser(id);

            if(!response.success) {
                console.log(response)
                return res.status(response.status).end();
            }

            const data = response.data;
            //console.log(data)
            return res.json({data});
        }catch(err){
            console.log(err);
            return res.status(500).end();
        }
    }
}

const process = {
    insertUser : async (req:Request,res:Response) => {
        try{
            //console.log(req.body)
            const userservice = new UserService()
            const response = await userservice.insertUser(req.body);
            
            if(response.success){
                return res.status(201).end();
            }
            return res.status(response.status).end();
        }catch(err){
            console.log(err)
            return res.status(500).end();

        }
    },

    login : async(req:Request,res:Response) => {
        try{
            console.log(req.body);
            const userservice = new UserService();
            const response = await userservice.login(req.body);

            if(response.success) return res.json({token:'testtoken'});
            else return res.status(response.status).end();

        }catch(err){
            console.log(err);
            return res.status(500).end();
        }
    }
}

module.exports ={
    output,process
}