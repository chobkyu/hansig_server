const app = require('../app')
const request = require('supertest')

describe('GET /hansic is ...', function () {
    this.timeout(10000)
    describe('success', async () => {
        it('return data', async done => {
            request(app)
                .get('/hansic')
                .end(async (err, res) => {

                    console.log(res.body)
                    await res.body.should.be.instanceOf(Array)
                    done();


                })
        })
    })
})

describe('post /user is..',function () {
    describe('success',()=>{
        
    })
})