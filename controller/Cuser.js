// TODO: 컨트롤러 코드
const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

// exports.getVisitors = (req, res) => {
//   // before
//   // console.log(Visitor.getVisitors());
//   // res.render('visitor', { data: Visitor.getVisitors() });

//   // after
//   Visitor.getVisitors((result) => {
//     console.log("Cvisitor.js", result); // [ {}, {}, {}, {} ]
//     res.render("visitor", { data: result });
//   });
// };

exports.postSignup = (req, res) => {
  console.log("postSignup: ", req.body);
  // postSignup:  { name: '', : '' }

  User.postSignup(req.body, () => {
    res.send(true);
  });
};

// 로그인 버튼 클릭-정보조회
exports.postSignin = (req, res) => {
  console.log(req.body); //{id: '1'}

  User.postSignin(req.body, (result) => {
    console.log("Cuser.js", result); /// [ {}]
    // 유저 조회 0 ->로그인 성공 -> [{}]
    // 유저 조회 x -> 로그인 실패 -> []
    // if (result.length >0){
    // res.send(true)
    // }else {

    // res.send(false)
    // }
    if (result == undefined) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
};

// 로그인 정보조회
exports.postProfie = (req, res) => {
  console.log(req.body); //{id: '1'}
  // if (result.length >0 )

  User.postProfie(req.body, (result) => {
    console.log("Cuser.js postProfie", result, req.body);
    if (result == undefined) {
      res.redirect("/user/signin");
    } else {
      console.log("Cuser.js else", { data: result });
      res.render("profile", { data: result });
    }
  });
};

exports.postProfieedit = (req, res) => {
  console.log(req.body);
  User.postProfieedit(req.body, (result) => {
    console.log("Cuser.js", result); // Cuser.js
    res.send("수정 성공!!!");
  });
};

exports.postProfiedelete = (req, res) => {
  console.log(req.body); // { id: '1' }
  console.log(req.body.id); // 1

  User.postProfiedelete(req.body.id, (result) => {
    console.log("Cuser.js: ", result);
    res.send("삭제 성공!!!");
  });
};

exports.postCheck = (req, res) => {
  console.log(req.body); //{id: '1'}
  console.log(req.body.id); //1\

  User.postCheck(req.body.userid, (result) => {
    console.log("Cuser.js", result);
    res.send(result);
  });
};
