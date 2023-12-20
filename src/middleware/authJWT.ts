import express,{Express,Request,Response,NextFunction} from 'express';
const { verify } = require('../util/jwt-util');

const authJWT = (req:Request,res:Response,next:NextFunction) => {
    if (req.headers.authorization){
        const token = req.headers.authorization.split('Bearer ')[1];
        const result = verify(token);

        if(result.success){
            req.body.user.id = result.id;
            req.body.user.userId = result.userId;
            req.body.user.userNickName = result.userNickName;
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