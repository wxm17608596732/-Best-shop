exports.cart=function(req,res){

    //2   处理业务
      //插入到购物车里面去  
      var CartDao = require('../daoD/cartDao');
      //(2)创建对象
      var cartDao = new CartDao();
      //(3)对象初始化
      cartDao.int();
      cartDao.selectwhole(function(result){
             console.log(result)
             var data = JSON.parse(JSON.stringify(result))
             console.log(data)
             res.render("checkout",{data:data})  
      })
      //   //返回给前端信息；
     
    }