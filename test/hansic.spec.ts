const app = require('../app')
const request = require('supertest')

describe('GET /hansic is ...',() => {
    describe('success',(done:any) => {
        request(app)
            .get('/hansic')
            .end(async (err:any,res:any) => {
                console.log(await res.body);
                
                console.log('?')
                done();
            })
    })
})