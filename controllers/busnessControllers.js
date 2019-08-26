exports.register=function (req,res) {
    
    //1,解析客户端（post）提交的数据
    var name  = req.body.name;
    var email  = req.body.email;
    var password  = req.body.password;
    var aginPassword  = req.body.aginPassword;


    //2,向业务层要数据
    //(1),引入UserService模块
    var UserService = require('../service/UserService');
    //(2),创建UserService对象
    var userService = new UserService();
    userService.init();
    //(3),插入用户
    userService.insert(name,email,password,function(result){
        //3,把数据传给view
        res.end(JSON.stringify(result));
    });
};

