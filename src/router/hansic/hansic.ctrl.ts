import express,{Express,Request,Response} from 'express';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const hansicService = require('../../service/hansic.service');

const output = {
    getAll : async (req:Request,res:Response) => {
        const response = await hansicService.getAll();
        if(response.success) return res.json(response);
        else return res.status(500);  
    },
    create:async(req:Request,res:Response)=>
    {
        const restaurantId= req.params.id;
        const response=await hansicService.create(restaurantId,req);
        return res.status(201);
    },
    menu:{
        getAll :async (req:Request,res:Response) => {
            const response = await hansicService.menu.getAll();
            if(response.success) return res.json(response);
            else return res.status(500);
        },
        get:async (req:Request,res:Response) => {
            const response = await hansicService.menu.get(parseInt(req.params.id));
            if(response.success) return res.json(response);
            else if(res.locals.errmsg)
            {
                return res;
            } 
            else{return res.status(500);}
            
        }
    }
}

const process = {

}

module.exports ={
    output,process
}