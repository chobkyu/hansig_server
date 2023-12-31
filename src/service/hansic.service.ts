import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
/*
ㄴ 리뷰 입력 시
ㄴ 리뷰 수정 시
ㄴ 리뷰 삭제 시
ㄴ 메뉴 입력 시
ㄴ 메뉴 수정 시
ㄴ 메뉴 삭제 시
ㄴ 리뷰 댓글 입력 시
ㄴ 리뷰 댓글 삭제 시
*/
class HansicService{
    menu={
        async getAll(){
            try{
                const data = await prisma.review.findMany();
                //console.log(data)
                
                return {data,success:true}
            }catch(err){
                console.error(err);
                return {success:false}
            }
        },
        async get(req:Request){
            try{
                const data = await prisma.hansics.findMany();
                //console.log(data)
                
                return {data,success:true}
            }catch(err){
                console.error(err);
                return {success:false}
            }
        },
    };
    async create(restaurantId:number,req:Request):Promise<Response>
    {
        const requestBody=req.body;
        return new Response();
    }
    async getHansicDate(){
        try{
            const data = await prisma.hansics.findMany();
            //console.log(data)
            
            return {data,success:true}
        }catch(err){
            console.error(err);
            return {success:false}
        }
    }

    constructor()
    {
    }
}

module.exports = HansicService;