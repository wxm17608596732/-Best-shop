exports.login=function(req,res){
        var email=req.body.email;
        var password=req.body.password;

        var ByService = require('../service/ByService');
        //(2)创建对象
        var byService = new ByService();
        //(3)对象初始化
        byService.whole();
        //(4)验证用户是否合法
        byService.checkUser(email,password,function(result){
            if(result.insertId==2){
                req.session.sign=true;
                console.log(req.session.sign);
                res.cookie('email',result.email, {maxAge:60*60 * 1000});
                res.cookie('password',result.password, {maxAge:60*60 * 1000});
            }
            result.email = null;
            result.password = null;
            console.log("insertId=:"+result.insertId);
            console.log(req.session.sign);
            res.end(JSON.stringify(result));
        },0) ;   
}
