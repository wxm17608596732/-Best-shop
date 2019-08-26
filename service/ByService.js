function ByService(){
      
    this.whole=function(){
    var Logindao=require("../daoD/LoginDao")
    this.logindao=new Logindao();
    this.logindao.whole()
}
    this.checkUser=function(email,password,call,state){
        if(state==0){
         //(1)用户工具类
         let tool=require('../Tools/tool');
         var email =tool.crypto(email);
         var password =tool.crypto(password);
        }
    this.logindao.select(email,function(result){
       let resData={
           insertId:-1,
           msg:''
       }
       console.log(resData)
       
           var length = result.length;
           if(length==0){
                   resData.msg="没有该用户，请注册"
           }else{
              let buffer=result[0].password
              if(password==buffer){
               resData.msg="登陆成功！";
               resData.insertId=2;
              }else{
               resData.msg="登录失败，请输入正确的密码";
               resData.insertId=1;
              }
           }
           call(resData)
    })
}    
this.select=function(email,call){
    //(4)查询密码
    this.userDao.select(email,function(result){
        call(result);
    });
}

}
module.exports=ByService