const express = require('express');
const router = express.Router();

const mysql = require('mysql2');
const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} = process.env;
const db = mysql.createConnection({
    host:  DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
})
db.connect();

const pool = mysql.createPool({
    host:  DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

const promisePool = pool.promise();

/* GET home page. */
router.get('/', function(req, res, next) {
   const sql = 'SELECT * FROM tag';
   db.query(sql, (err,data) => {
     res.json(data);
   });
});


router.get('/books', function(req, res, next) {
  const sql = 'SELECT                                           \
                book.BookId,                                    \
                book.BookCover,                                 \
                book.BookTitle,                                 \
                book.BookDesc,                                  \
                t1.TagStr as tagStr_1,                          \
                t2.TagStr as tagStr_2,                          \
                t3.TagStr as tagStr_3,                          \
                us.AuthorName                                   \
                FROM book                                       \
                LEFT JOIN tag  as t1 ON book.Tag1 = t1.TagId    \
                LEFT JOIN tag  as t2 ON book.Tag2 = t2.TagId    \
                LEFT JOIN tag  as t3 ON book.Tag3 = t3.TagId    \
                LEFT JOIN user as us ON book.UserId = us.UserId ';

  db.query(sql, (err,data) => {
    res.json(data);
  });
});

router.get('/book', function(req, res, next) {
  const sql = 'SELECT                                           \
                book.BookCover,                                 \
                book.BookTitle,                                 \
                book.BookDesc,                                  \
                book.BookPrice,                                 \
                book.BookPages,                                 \
                t1.TagStr as tagStr_1,                          \
                t2.TagStr as tagStr_2,                          \
                t3.TagStr as tagStr_3,                          \
                us.AuthorName                                   \
                FROM book                                       \
                LEFT JOIN tag  as t1 ON book.Tag1 = t1.TagId    \
                LEFT JOIN tag  as t2 ON book.Tag2 = t2.TagId    \
                LEFT JOIN tag  as t3 ON book.Tag3 = t3.TagId    \
                LEFT JOIN user as us ON book.UserId = us.UserId \
                WHERE book.BookId = ' + req.query.ID;

  db.query(sql, (err,data) => {
    //console.log(err);
    res.json(data);
  });
});

router.get('/booksManage', function(req, res, next) {
  const sql = 'SELECT                                           \
                book.BookId,                                    \
                book.BookCover,                                 \
                book.BookTitle,                                 \
                book.BookDesc,                                  \
                book.BookStatus,                                \
                t1.TagStr as tagStr_1,                          \
                t2.TagStr as tagStr_2,                          \
                t3.TagStr as tagStr_3,                          \
                us.AuthorName                                   \
                FROM book                                       \
                LEFT JOIN tag  as t1 ON book.Tag1 = t1.TagId    \
                LEFT JOIN tag  as t2 ON book.Tag2 = t2.TagId    \
                LEFT JOIN tag  as t3 ON book.Tag3 = t3.TagId    \
                LEFT JOIN user as us ON book.UserId = us.UserId \
                WHERE book.UserId = ' + req.query.ID;

  db.query(sql, (err,data) => {
    res.json(data);
  });
});



router.post('/booksStatus', function(req, res, next) {
  const sql = 'UPDATE book                                 \
                SET BookStatus = ' + req.query.newState + '\
                WHERE book.BookId = ' + req.query.ID;

  db.query(sql, (err,data) => {
    //console.log(req.query.newState);
    res.status(200).json({Success: true});
  });
});


router.post('/booksDelete', function(req, res, next) {
  const sql = 'DELETE FROM book WHERE book.BookId =' + req.query.ID;

  db.query(sql, (err,data) => {
    //console.log(req.query.newState);
    res.status(200).json({Success: true});
  });
});


router.get('/booksTags', function(req, res, next) {
  const sql = 'SELECT * FROM tag';
  db.query(sql, (err,data) => {
    res.json(data);
  });
});

router.post('/booksAdd', function(req, res, next) {
  const sql = 'INSERT INTO book (BookTitle, UserId, BookPrice, BookPages, Tag1, Tag2, Tag3, BookDesc) VALUES \
              ('+ req.query.title + ', \
               '+ req.query.UserId + ', \
               '+ req.query.price + ', \
               '+ req.query.pages + ', \
               '+ req.query.tag1 + ', \
               '+ req.query.tag2 + ', \
               '+ req.query.tag3 + ', \
               \"'+ req.query.desc + '\")';

  db.query(sql, (err,data) => {
    //console.log(sql);
    //console.log(err);
    res.status(200).json({Success: true});
  });
});


router.post('/logUsser', function(req, res, next) {
  const sql = 'SELECT UserId FROM user \
              WHERE \
              UserName = \"' +  req.query.lName + '\" AND UserPaswd = \"' +  req.query.lPsswd + '\"';

  db.query(sql, (err,data) => {
    //console.log(sql);
    //console.log(err);
    res.status(200).json(data);
  });
});

router.post('/userAdd', function(req, res, next) {
  const sql = 'INSERT INTO user (UserName, UserPaswd, UserMails) VALUES \
              (\"' + req.query.uname + '\", \
               \"' + req.query.pass  + '\", \
               \"' + req.query.mail  + '\")';

  db.query(sql, (err,data) => {
    //console.log(sql);
    //console.log(err);
    res.status(200).json({Success: true});
  });
});

router.get('/settings', function(req, res, next) {
  const sql = 'SELECT AuthorName, UserFunds FROM user WHERE UserId=' + req.query.UserId;
  db.query(sql, (err,data) => {
    res.json(data);
  });
});

router.post('/settingsN', function(req, res, next) {
  const sql = 'UPDATE user \
              SET AuthorName = \"' + req.query.name + '\" \
              WHERE UserId = ' + req.query.UserId;
               
  db.query(sql, (err,data) => {
    //console.log(sql);
    //console.log(err);
    res.status(200).json({Success: true});
  });
});

router.post('/settingsF', function(req, res, next) {
  const sql = 'UPDATE user \
              SET UserFunds = UserFunds +\"' + req.query.funds + '\" \
              WHERE UserId = ' + req.query.UserId;
               
  db.query(sql, (err,data) => {
    //console.log(sql);
    //console.log(err);
    res.status(200).json({Success: true});
  });
});



router.post('/settingsP', function(req, res, next) {
  const sql = 'UPDATE user \
              SET UserPaswd = \"' + req.query.passNew + '\" \
              WHERE UserId = ' + req.query.UserId + ' AND UserPaswd = \"' + req.query.passOld + '\"';
               
  db.query(sql, (err,data) => {
    //console.log(sql);
    //console.log(err);
    res.status(200).json({Success: true});
  });
});

router.post('/settingsD', function(req, res, next) {
  const sql = 'DELETE FROM user WHERE UserId = ' + req.query.UserId;
               
  db.query(sql, (err,data) => {
    //console.log(sql);
    //console.log(err);
    res.status(200).json({Success: true});
  });
});

router.post('/message', function(req, res, next) {
  const sql = 'INSERT INTO message (Name, Mail, Msg) VALUES \
  (\"' + req.query.name + '\", \
   \"' + req.query.mail  + '\", \
   \"' + req.query.msg  + '\")';
   
  db.query(sql, (err,data) => {
    //console.log(sql);
    //console.log(err);
    res.status(200).json({Success: true});
  });
});


module.exports = router;
