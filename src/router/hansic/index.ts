import express from "express";
const ctrl = require('./hansic.ctrl')

const router = express.Router();

router.get('/',ctrl.getAll);

module.exports = router
