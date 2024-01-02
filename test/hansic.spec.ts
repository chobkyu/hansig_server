const app = require('../app')
const request = require('supertest')

describe('GET /hansic is ...', function () {
    this.timeout(10000)
    describe('success', async () => {
        it('return data', async () => {
            request(app)
                .get('/hansic')
                .end(async (err:any, res:any) => {

                    //console.log(res.body)
                    res.body.should.be.instanceOf(Array)
                    //done();


                })
        })
    })
});

/**한긱 뷔페 전체 조회 */
describe('GET /hansic/all ...',function(){
    describe('성공 시',() => {
        
        it('상태코드 200 리턴',async ()=>{
            
        });

        it('리스트 형식의 데이터를 반환한다',async ()=>{

        });

        it('리스트가 null 값이 아닐 때 ',async () => {

        });

        it('리스트 각 요소에는 포함되어야 한다.',async () => {

        });

        
    });

    describe('fail...',async () => {
        it('리스트가 null 일 때 204를 리턴한다.',async () => {

        });
    })

});

/**한식 뷔페 지역 별 조회 */
describe('GET /hansic/loc/:id ...',function(){
    describe('성공 시',() => {
       it('성공 시 지역 별 한식 뷔페 리스트 형식 반환' ,async () =>{

       });
       
       it('성공 시 200 리턴',async () => {
        
       });

       it('리스트 각 요소에는 포함되어야 한다.',async () => {
        
       });
    });

    describe('실패 시 ', async () => {
        it('id 입력 시 타입이 nuber가 아니면 400 리턴',async () => {
            request(app)
                .get('/hansic/loc/서울')
                .expect(400)
                .end(async(err:any,res:any) => {
                    console.log(res.body);
                });
        });

        /**현재 지역 아이디는 1부터 12까지 입니다. 
         * 디비에 가지 않고 비즈니스 로직에서 거를 수 있으면 좋을거 같습니다.
        */
        it('없는 지역 id를 요청 시 404 리턴',async () => {
            request(app)
                .get('/hansic/loc/5000')
                .expect(404)
                .end(async(err:any,res:any) => {
                    console.log(res.body);
                });
        });
    });
});


describe('GET /hansic/:id ...',function(){
    describe('성공 시', async () => {
       

        it('상태코드 200 리턴',async () => {

        });

        it('포함 되어야 한다.',async() => {

        });

    });

    describe('실패 시',async () => {
        it('해당 데이터를 찾을 수 없을 시 404 리턴',async () => {
            request(app)
                .get('/hansic/200000')
                .expect(404)
                .end(async(err:any, res:any) => {
                    console.log(res.body);
                });
        });

        it('잘못된 id 입력 시 400 리턴',async () => {
            request(app)
                .get('/hansic/기원이한뷔')
                .expect(400)
                .end(async (err:any,res:any) => {
                    console.log(res.body);
                });
        });
    });
});





