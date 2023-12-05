const app = require('../app')
const request = require('supertest')

describe('GET /hansic is ...',() => {
    describe('success',(done:any) => {
        request(app)
            .get('/hansic')
            .end((err:any,res:any) => {
                console.log('test');
                res.body.should.be.instanceOf(Object)
                 done();
            })
    })
})