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
})

