exports.index=function (req,res) {
    if(req.session.sign){
        console.log(req.session.sign);
         res.render('index',{state:2});
         return; //必须return 返回设置信息
    }
    let email =req.cookies.email;
    let password=req.cookies.password;

    if(email==null||password==null){
        res.render('index',{state:-1});
    }else{
        //(1)引入userService
        let UserService = require('../service/ByService');
        //(2)创建对象


        let userService = new UserService();
        console.log(userService)
        //(3)对象初始化
        userService.whole();
        //(4)验证用户都合法
        userService.checkUser(email,password,function(result){
            if(result.insertId==2)
            {
                req.session.sign=true;
                res.render('index',{state:2});
            }else{
                res.render('index',{state:-1});
            }
        },1);
    }  
    
};

exports.register=function (req,res) {
      res.render('register',{state:-1});
}

exports.login=function(req,res){
    res.render('login',{state:-1});
}

exports.checkout=function(req, res){
    if(req.session.sign){
        console.log(req.session.sign);
         res.render('checkout',{state:2});
         return; //必须return 返回设置信息
    }
    let email =req.cookies.email;
    let password=req.cookies.password;

    if(email==null||password==null){
        res.render('checkout',{state:-1});
    }else{
        //(1)引入userService
        let UserService = require('../service/ByService');
        //(2)创建对象
        let userService = new UserService();
        console.log(userService)
        //(3)对象初始化
        userService.whole();
        //(4)验证用户都合法
        userService.checkUser(email,password,function(result){
            if(result.insertId==2)
            {
                req.session.sign=true;
                res.render('checkout',{state:2});
            }else{
                res.render('checkout',{state:-1});
            }
        },1);
    }  
  
};
exports.furniture=function(req, res){
    var num;
    var FurnitureDao = require('../daoD/furnitureDao');
    var furnitureDao = new FurnitureDao();
    furnitureDao.init();
    furnitureDao.selectProducts1(function(result1){
        // res.render('furniture',{products:result1},{state=-1})
        num=result1
    })
    if(req.session.sign){
        console.log(req.session.sign);
         res.render('furniture',{state:2,products:num});
         return; //必须return 返回设置信息
    }
    let email =req.cookies.email;
    let password=req.cookies.password;

    if(email==null||password==null){
        res.render('furniture',{state:-1,products:num});
    }else{
        //(1)引入userService
        let UserService = require('../service/ByService');
        //(2)创建对象
        let userService = new UserService();
        console.log(userService)
        //(3)对象初始化
        userService.whole();
        //(4)验证用户都合法
        userService.checkUser(email,password,function(result){
            if(result.insertId==2)
            {
                req.session.sign=true;
                res.render('furniture',{state:2,products:num});
            }else{
                res.render('furniture',{state:-1,products:num});
            }
        },1);
    }  
    
};

exports.mail=function(req, res){
    if(req.session.sign){
        console.log(req.session.sign);
         res.render('mail',{state:2});
         return; //必须return 返回设置信息
    }
    let email =req.cookies.email;
    let password=req.cookies.password;

    if(email==null||password==null){
        res.render('mail',{state:-1});
    }else{
        //(1)引入userService
        let UserService = require('../service/ByService');
        //(2)创建对象
        let userService = new UserService();
        console.log(userService)
        //(3)对象初始化
        userService.whole();
        //(4)验证用户都合法
        userService.checkUser(email,password,function(result){
            if(result.insertId==2)
            {
                req.session.sign=true;
                res.render('mail',{state:2});
            }else{
                res.render('mail',{state:-1});
            }
        },1);
    }  
    
};
exports.products=function(req, res){
    var data;
    var ProductsDao = require('../daoD/productsDao');
    var productsDao = new ProductsDao();
    productsDao.init();
    productsDao.selectProducts(function(result){
        // console.log(result);
        // res.render('products',{products:result})
        data=result
    })
   
    if(req.session.sign){
        console.log(req.session.sign);
         res.render('products',{state:2,products:data});
         return; //必须return 返回设置信息
    }
    let email =req.cookies.email;
    let password=req.cookies.password;

    if(email==null||password==null){
        res.render('products',{state:-1,products:data});
       
    }else{
        //(1)引入userService
        let UserService = require('../service/ByService');
        //(2)创建对象
        let userService = new UserService();
        console.log(userService)
        //(3)对象初始化
        userService.whole();
        //(4)验证用户都合法
        userService.checkUser(email,password,function(result){
            if(result.insertId==2)
            {
                req.session.sign=true;
                res.render('products',{state:2,products:data});
            }else{
                console.log(data)
                res.render('products',{state:-1,products:data});
            }
        },1);
    }  
    
};

exports.codes=function(req, res){
    if(req.session.sign){
        console.log(req.session.sign);
         res.render('codes',{state:2});
         return; //必须return 返回设置信息
    }
    let email =req.cookies.email;
    let password=req.cookies.password;

    if(email==null||password==null){
        res.render('codes',{state:-1});
    }else{
        //(1)引入userService
        let UserService = require('../service/ByService');
        //(2)创建对象
        let userService = new UserService();
        console.log(userService)
        //(3)对象初始化
        userService.whole();
        //(4)验证用户都合法
        userService.checkUser(email,password,function(result){
            if(result.insertId==2)
            {
                req.session.sign=true;
                res.render('codes',{state:2});
            }else{
                res.render('codes',{state:-1});
            }
        },1);
    }  

};
exports.single=function(req, res){
    if(req.session.sign){
        console.log(req.session.sign);
         res.render('single',{state:2});
         return; //必须return 返回设置信息
    }
    let email =req.cookies.email;
    let password=req.cookies.password;

    if(email==null||password==null){
        res.render('single',{state:-1});
    }else{
        //(1)引入userService
        let UserService = require('../service/ByService');
        //(2)创建对象
        let userService = new UserService();
        console.log(userService)
        //(3)对象初始化
        userService.whole();
        //(4)验证用户都合法
        userService.checkUser(email,password,function(result){
            if(result.insertId==2)
            {
                req.session.sign=true;
                res.render('single',{state:2});
            }else{
                res.render('single',{state:-1});
            }
        },1);
    }
};
