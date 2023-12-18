const {promisify} = require('util');
const jwt = require('jsonwebtoken');
const secret ='test_secret';

module.exports = {
    sign : (user:any) => {
        const payload = {
            id: user.id,
            userId : user.userId,
            userNickName : user.userNickName
        };

        return jwt.sign(payload, secret,{
            algorithm:'HS256',
            expiresIn:'1h',
        });
    },
    verify: (token:string) => {
        let decoded = null;
        try{
            decoded = jwt.verify(token,secret);
            return {success:true, decodedData : decoded}
        }catch(err){
            console.log(err);
            return {success:false,msg:err};
        }
    }
}