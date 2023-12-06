import express,{Express,Request,Response} from 'express';
const ctrl = require('./user.ctrl')
const router = express.Router();

router.post('/',ctrl.process.insertUser)


module.exports = router