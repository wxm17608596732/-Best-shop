function UserService(){

    this.init=function(){
        //(1)引入userDao模块
        var UserDao =  require('../daoD/UserDao');
        //(2)创建对象
        this.userDao =  new UserDao();
        //(3)对象初始化
        this.userDao.init();
    }

    this.insert=function(name,email,password,call){

        var resData={
            insertId:-1,
            msg:''
        }
        var tools = require('../Tools/tool')
        var name=tools.crypto(name);
        var email=tools.crypto(email);
        var password=tools.crypto(password);

        //1,如何存在就直接返回存在的结果

        var that = this;
        this.checkUser(name,function(result){
             if(result){
                 resData.msg="用户已经存在！请重新注册"
                 call(resData);
             }else{
                 that.userDao.insertUser(name,email,password,function (data) {
                     resData.msg="注册成功";
                     resData.insertId=data.insertId;
                     call(resData);

                 })
             }

        })
    }

    this.selectUserByName=function(name,call){
        //(1)查询用户数据
        this.userDao.selectUserByName(name,function(result){

            call(result);
        })
    }

    
    this.checkUser=function(name,call){
       this.selectUserByName(name,function(result){
           if(result.length==0){
               call(false);
           }else{
               call(true);
           }
       });
    }

}
module.exports=UserService;
