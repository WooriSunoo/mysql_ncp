// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser.js");
const router = express.Router();

// 기본주소: localhost:PORT/user

// GET / => localhost:PORT/
router.get("/", controller.main);
// GET /user/signup => localhost:PORT/user
router.get("/signup", controller.getSignup); // 회원가입 폼을 보여줌

// GET /user/signin => localhost:PORT/user
router.get("/signin", controller.getSignin); // 로그인 폼을 보여줌

// POST /user/signup => localhost:PORT/user/signup
router.post("/signup", controller.postSignup); // 회원가입 정보 저장

// POST /user/signin => localhost:PORT/user/signin
router.post("/signin", controller.postSignin); // 회원가입 정보 저장

// POST /user/profile => localhost:PORT/user/profile
router.post("/profile", controller.postProfie); // 로그인 정보 조회

// POST /user/profile/edit => localhost:PORT/user/profile/edit
router.post("/profile/edit", controller.postProfieedit); // 회원정보 수정

// POST /user/profile/delete => localhost:PORT/user/profile/delete
router.post("/profile/delete", controller.postProfiedelete);

// GET /visitor => localhost:PORT/visitor
router.post("/signup/check", controller.postCheck); // 중복체크

module.exports = router;
