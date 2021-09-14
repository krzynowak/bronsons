CREATE USER docker;
CREATE DATABASE docker;
USE docker;

CREATE TABLE tag (
    TagId INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    TagStr VARCHAR(50)
    );


    INSERT INTO tag (TagStr) VALUES ("Horror");
    INSERT INTO tag (TagStr) VALUES ("Romance");
    INSERT INTO tag (TagStr) VALUES ("Action");
    INSERT INTO tag (TagStr) VALUES ("Thriller");
    INSERT INTO tag (TagStr) VALUES ("13+");
    INSERT INTO tag (TagStr) VALUES ("18+");
    INSERT INTO tag (TagStr) VALUES ("Comedy");
    INSERT INTO tag (TagStr) VALUES ("Smut");
    INSERT INTO tag (TagStr) VALUES ("Historical");
    INSERT INTO tag (TagStr) VALUES ("Fantasy");


CREATE TABLE user (
    UserId      INT             NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserName    VARCHAR(50)     NOT NULL, 
    UserPaswd   VARCHAR(50)     NOT NULL, 
    UserMails   VARCHAR(50)     NOT NULL, 
    AuthorName  VARCHAR(50)     NOT NULL DEFAULT "Anonymous", 
    UserFunds   DOUBLE          DEFAULT 0
    );


    INSERT INTO user (UserName, UserPaswd, UserMails, AuthorName, UserFunds) VALUES ("John_Doe", "1234Five678", "JD@test.com", "John", 0);
    INSERT INTO user (UserName, UserPaswd, UserMails, AuthorName, UserFunds) VALUES ("Jane_Doe", "Password1", "JD@test2.en", "Jane", 351);
    INSERT INTO user (UserName, UserPaswd, UserMails, AuthorName, UserFunds) VALUES ("Alan_Smithee", "Passw0rd", "AS@gmail.com", "Alan", 111);
    

CREATE TABLE book (
    BookId      INT             NOT NULL AUTO_INCREMENT PRIMARY KEY,
    BookTitle   VARCHAR(50)     NOT NULL, 
    UserId      INT             NOT NULL,
    BookPrice   FLOAT           NOT NULL,
    BookPages   INT             NOT NULL,
    Tag1        INT             ,
    Tag2        INT             ,
    Tag3        INT             ,
    BookDesc    VARCHAR(500)    NOT NULL DEFAULT 'No description Provided',
    BookCover   BLOB(65535),
    BookPdf     BLOB(131070),
    BookStatus  BOOLEAN         DEFAULT true
    );


    INSERT INTO book (BookTitle, UserId, BookPrice, BookPages, Tag1, Tag2, Tag3, BookDesc) VALUES ("Moby Dick"               , 1, 14, 140, 1, 6, 3, "Test Desc1");
    INSERT INTO book (BookTitle, UserId, BookPrice, BookPages, Tag1, Tag2, Tag3, BookDesc) VALUES ("50 Shades of Suffering"  , 1, 23, 230, 2, 7, 6, "Test Desc2");
    INSERT INTO book (BookTitle, UserId, BookPrice, BookPages, Tag1, Tag2, Tag3, BookDesc) VALUES ("Bee movie Anthology"     , 1, 31, 310, 3, 8, 6, "Test Desc3");
    INSERT INTO book (BookTitle, UserId, BookPrice, BookPages, Tag1, Tag2, Tag3, BookDesc) VALUES ("Harry Potter"            , 3, 24, 240, 4, 9, 5, "Test Desc4");
    INSERT INTO book (BookTitle, UserId, BookPrice, BookPages, Tag1, Tag2, Tag3, BookDesc) VALUES ("Witcher"                 , 2, 27, 270, 5, 1, 2, "Test Desc5");
    INSERT INTO book (BookTitle, UserId, BookPrice, BookPages, Tag1, Tag2, Tag3, BookDesc) VALUES ("React tutorial"          , 3, 10, 100, 6, 2, 3, "Test Desc6");
    INSERT INTO book (BookTitle, UserId, BookPrice, BookPages, Tag1, Tag2, Tag3, BookDesc) VALUES ("Node for dummies"        , 2, 13, 130, 7, 2, 1, "Test Desc7");
    INSERT INTO book (BookTitle, UserId, BookPrice, BookPages, Tag1, Tag2, Tag3, BookDesc) VALUES ("How to"                  , 3, 29, 290, 8, 7, 10, "Test Desc8");
    INSERT INTO book (BookTitle, UserId, BookPrice, BookPages, Tag1, Tag2, Tag3, BookDesc) VALUES ("The diver"               , 2, 17, 170, 9, 7, 10, "Test Desc9");
    INSERT INTO book (BookTitle, UserId, BookPrice, BookPages, Tag1, Tag2, Tag3, BookDesc) VALUES ("The end"                 , 1, 37, 370, 10, 7, 2, "Test Desc10");

CREATE TABLE message (
    MsgId   INT             NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name    VARCHAR(50)     NOT NULL, 
    Msg     VARCHAR(500)    NOT NULL,
    Mail    VARCHAR(50)     NOT NULL
    );
