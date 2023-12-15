const app = require('../app')
const request = require('supertest')
const should = require('should');

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