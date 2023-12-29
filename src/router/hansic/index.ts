import express from "express";
const ctrl = require('./hansic.ctrl')
/*
ㄴ 리뷰 입력 시
ㄴ 리뷰 수정 시
ㄴ 리뷰 삭제 시
ㄴ 메뉴 입력 시
ㄴ 메뉴 수정 시
ㄴ 메뉴 삭제 시
ㄴ 리뷰 댓글 입력 시
ㄴ 리뷰 댓글 삭제 시
*/
const router = express.Router();
//review
router.get('/',ctrl.output.getAll);
router.post('/:id',ctrl.process.create);
router.patch('/:id',ctrl.process.update);
router.delete('/:id',ctrl.process.delete);
//menu

//reviewcomment
module.exports = router
