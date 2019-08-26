exports.sing=function(req,res){
      var state=req.body.state  
    //2   处理业务
      //插入到购物车里面去  
      var SingDao = require('../daoD/SingDao');
      //(2)创建对象
      var singDao = new SingDao();
      //(3)对象初始化
      singDao.int();
      singDao.insert(img,color,function(result){
         if(result.length==0){
         var data = "添加购物车失败";
             res.end(data)
             
         }else{
            var data = "添加购物车成功";
             res.end(data)
         }
    
      })
      //   //返回给前端信息；
     
    }

