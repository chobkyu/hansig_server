const app = require('../app')
const request = require('supertest')
const should = require('should');

/**회원 가입 시 */
describe('post /user is..', function () {
    let testData = {
        userId:'test',
        userPw:'1234',
        userName:'test_name',
        userNickName:'giwon'
    }

    before(() => {
        request(app)
            .post('/users')
            .send(testData)
            .expect(201)
            .end((err:any,res:any) => {
                console.log(res.body);
            });
    });

    describe('success', () => {
        let body = {
            userId:'test1',
            userPw:'1234',
            userName:'test_name1',
            userNickName:'giwon1'
        }
        it('201으로 응답한다', (done) => {
            request(app)
                .post('/users')
                .send(body)
                .expect(201)
                .end(done)
        }); 

    });
    describe('fail..',()=>{
        it('입력이 잘못되었을 경우 400으로 응답한다',(done)=>{
            let body = {
                userId:'test1',
                userPw:'1234',
                userName:'test_name1',
            }
            request(app)
                .post('/users')
                .send(body)
                .expect(400)
                .end(done)
        });

        it('닉네임이 중복일 경우 409로 응답한다',done => {
            let body ={
                userId:'test3',
                userPw:'1234',
                userName:'test_name',
                userNickName:'giwon1'
            };

            request(app)
                .post('/users')
                .send(body)
                .expect(409)
                .end(done)
        });
        
        it('아이디가 중복일 경우 409로 응답한다',done => {
            let body ={
                userId:'test',
                userPw:'1234',
                userName:'test_name',
                userNickName:'giwon'
            };

            request(app)
            .post('/users')
            .send(body)
            .expect(409)
            .end(done)
        });
    })
});


/**로그인 시 */
describe('post /user/login...',function(){
    describe('성공 시',() => {
        let info = {
            userId: 'test1',
            userPw: '1234'
        }
        let body:any;
        before(done=> {
            request(app)
                .post('/users/login')
                .send(info)
                .expect(201)
                .end((err:any,res:any) => {
                    body = res.body;
                    done();
                });
        });

        it('토큰을 반환한다.',()=>{
            body.should.have.property('token')
        });

        it('토큰은 문자열이여야 한다.',()=>{
            body.token.should.be.instanceOf(String)
        });

    });

    describe('실패 시',() => {
        it('입력이 잘못되었을 경우 400으로 응답한다',(done)=>{
            let body = {
                userId:'test1',
                userPw:1234,
            }
            request(app)
                .post('/users/login')
                .send(body)
                .expect(400)
                .end(done)
        });

        it('입력되지 못 한 값이 있을 경우 400으로 응답한다',(done)=>{
            let body = {
                userId:'test1',
            }
            request(app)
                .post('/users/login')
                .send(body)
                .expect(400)
                .end(done)
        });

        it('일치하는 유저가 없을 경우 404로 응답한다',(done) => {
            let body = {
                userId: 'noUser',
                userPw: 'nonono'
            }
            request(app)
                .post('/users/login')
                .send(body)
                .expect(404)
                .end(done)
        });
    });
});


/**유저 정보 읽을 시 */
describe('GET /users/userinfo',function() {
    describe('success',async () => {
        let body:any;
        before(done=> {
            request(app)
                .get('/users/userinfo/32')
                .end((err:any,res:any) => {
                    body = res.body.data;
                    console.log(body)
                    done();
                });
        });

        it('유저 아이디가 포함되어야 한다.', async () =>{
            body.should.have.property('userId');
        });

        it('유저 닉네임이 포함되어야 한다.',async () => {
            body.should.have.property('userNickName');
        });

        it('유저 이름이 포함되어야 한다.',async () => {
            body.should.have.property('userName');
        });

        it('유저 이미지가 포함되어야 한다.',async () => {
            body.should.have.property('userImgs');
        });


    });

    describe('fail...',async () => {
        it('해당 유저가 없을 때',async () => {
            request(app)
                .get('/users/userinfo/99999')
                .expect(404)
                .end(async (err:any, res:any) =>{
                    console.log(res.body)
                })
        });
    });
})

/**유저 정보 수정 시 */
describe('/patch user/info', function(){
    describe('success',async () => {
        let testData = {
            userId:'test',
            userName:'test_Name',
            userNickName:'giwonLee'
        }
        it('201으로 응답한다', (done) => {
            request(app)
                .post('/users')
                .send(testData)
                .expect(201)
                .end(done)
        }); 
    });

    describe('fail...', async ()=>{
        it('입력값이 잘못 되었을 경우 400으로 응답',(done) => {
            let testData = {
                userNickName:54
            }
            request(app)
                .patch('/users/info')
                .send(testData)
                .expect(400)
                .end(done);
        });

        it('잘못된 입력이 들어왔을 경우 400으로 응답',(done) => {
            let testData = {
                date:'2012'
            }
            request(app)
                .patch('/users/info')
                .send(testData)
                .expect(400)
                .end(done);
        });

        it('로그인이 안되어 있을 시 401로 응답',(done) => {
            let testData = {
                userId:'test',
                userName:'test_Name',
                userNickName:'giwonLee'
            }
            request(app)
                .patch('/users/info')
                .send(testData)
                .expect(401)
                .end(done);
        })
    });
});