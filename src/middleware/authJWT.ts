import express,{Express,Request,Response,NextFunction} from 'express';
const { verify } = require('../util/jwt-util');

const authJWT = (req:Request,res:Response,next:NextFunction) => {
    if (req.headers.authorization){
        const token = req.headers.authorization.split('Bearer ')[1];
        const result = verify(token);

        console.log(result)
        if(result.success){
            console.log(result.decodedData)
            req.body.id = result.decodedData.id;
            req.body.userId = result.decodedData.userId;
            req.body.userNickName = result.decodedData.userNickName;
            next();
        } else{
            res.status(401).send({
                ok:false,
                message:result.msg
            });
        }
    }
}

module.exports = authJWT;