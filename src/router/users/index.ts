import express,{Express,Request,Response} from 'express';
const ctrl = require('./user.ctrl')
const router = express.Router();
const authJWT = require('../../middleware/authJWT')

router.get('/userinfo/:id',ctrl.output.getUser);

router.post('/',ctrl.process.insertUser);
router.post('/login',ctrl.process.login);

router.patch('/info', authJWT, ctrl.process.updateUserData);

module.exports = router