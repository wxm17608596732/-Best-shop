var express=require("express");
var app=express();
var path=require("path");
app.set('view engine','html')
app.set('views',path.join(__dirname,'/views'));
app.engine('html',require('ejs').__express);
app.use(express.static('public'));
//引入cookie模块
var cookieParser = require('cookie-parser');
app.use(cookieParser())
//引入session模块
var session = require('express-session');
app.use(session({
    secret: '12345',
    name: 'express_11_cookie',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 80*1000 },     //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
}));
//1,引入body-parser模块
var bodyParser = require('body-parser');
// 2，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//3、引入操作层Controllers文件下的IndexControllers（主要 res.render（）返回结果显示页面信息）
var indexControllers = require('./Controllers/IndexControllers');
//4、路由get获取所有页面信息
app.get('/login',indexControllers.login)
app.get('/index',indexControllers.index);
app.get('/register', indexControllers.register);
app.get('/checkout',indexControllers.checkout);
app.get('/furniture',indexControllers.furniture);
app.get('/mail',indexControllers.mail);
app.get('/products',indexControllers.products);
app.get('/short-codes',indexControllers.codes);
app.get('/single',indexControllers.single);

//5、引入busnessControllers模块
var busnessControllers = require('./Controllers/busnessControllers')
//6、post获取用ajax发过来的button提交信息；
app.post('/register',urlencodedParser,busnessControllers.register);
var LoginController = require('./Controllers/LoginController')
app.post('/login',urlencodedParser,LoginController.login)
var SingController = require('./controllers/SingController')
app.post('/cart',urlencodedParser,SingController.sing)


//7、监听端口号
app.listen(9999,function(){
    console.log("running......")
})