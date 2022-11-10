// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql");

// DB 연결 정보
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

// exports.getVisitors = (callback) => {
//   // before
//   // return [
//   //   { id: 1, name: '홍길동', comment: '내가 왔다.' },
//   //   { id: 2, name: '이찬혁', comment: '으라차차' },
//   // ];

//   // after - mysql 연결
//   // query(SQL, callback)
//   conn.query("SELECT * FROM visitor", (err, rows) => {
//     if (err) {
//       throw err;
//     }

//     console.log("Visitor.js", rows); // [ {}, {}, {}, {} ]
//     callback(rows);
//   });
// };

exports.postSignin = (data, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}'LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("User.js postSignin", rows); // [ {}, {}, {}, {} ]
    callback(rows[0]);
  });
};

exports.postSignup = (data, callback) => {
  // data: 사용자가 폼에 입력한 정보
  // { name: '', comment: '' }

  conn.query(
    `INSERT INTO user (userid, name, pw) VALUES('${data.userid}', '${data.name}', '${data.pw}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log("User.js", rows);
      callback(); // pk (id)
    }
  );
};

exports.postProfie = (userid, callback) => {
  console.log("여기 모델폴더:", userid); // [ {}, {}, {}, {} ]
  const sql = `SELECT * FROM user WHERE userid='${userid.userid}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("User.js 여기 rows", sql); // [ {}, {}, {}, {} ]
    callback(rows[0]);
  });
};

exports.postProfieedit = (data, callback) => {
  conn.query(
    `UPDATE user SET pw='${data.pw}', name='${data.name}' WHERE userid='${data.userid}'`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log("User.js", rows);
      callback();
    }
  );
};
exports.postProfiedelete = (id, callback) => {
  // id: 사용자가 삭제버튼을 클릭한 그 행의 id 값
  console.log("id: ", id);
  conn.query(`DELETE FROM user WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("User.js: ", rows);
    callback(true); // true : 삭제 성공을 의미
  });
};

exports.postCheck = (data, callback) => {
  conn.query(`SELECT * FROM visitor WHERE id=${data.userid}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js", !rows); // [ {}, {}, {}, {} ]
    if (!rows) {
      callback(false);
    } else {
      callback(true);
    }
  });
};
