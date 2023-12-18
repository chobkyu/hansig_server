import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const UserService = require('../../service/user.service')
import express,{Express,Request,Response} from 'express';

const output = {
    /**유저 정보 조회 */
    getUser: async (req:Request,res:Response) => {
        try{
            const userservice = new UserService();
            const id = parseInt(req.params.id);
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
    /**회원가입 */
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

    /**로그인 */
    login : async(req:Request,res:Response) => {
        try{
            console.log(req.body);
            const userservice = new UserService();
            const response = await userservice.login(req.body);

            if(response.success) return res.json(response);
            else return res.status(response.status).end();

        }catch(err){
            console.log(err);
            return res.status(500).end();
        }
    },

    /**유저 정보 업데이트 */
    updateUserData : async(req:Request,res:Response) => {
        try{

        }catch(err){
            console.log(err);
            return res.status(500).end();
        }
    }
}

module.exports ={
    output,process
}