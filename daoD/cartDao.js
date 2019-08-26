function CartDao(){
    this.int=function(){ 
    var mysql = require('mysql');  //调用MySQL模块
      //1，创建一个connection
     this.connection = mysql.createConnection({
          host: 'localhost',       //主机 ip
          user: 'root',            //MySQL认证用户名
          password: '123456',                //MySQL认证用户密码
          port: '3306',                 //端口号
          database: 'lcn'          //数据库里面的数据
      });
      //2,连接
      this.connection.connect();
    }
    this.selectwhole=function(call){
        //1,编写sql语句
          var  sql = "SELECT * FROM cart";
         //2,进行查询操作
          /**
           *query，mysql语句执行的方法
           * 1，userAddSql编写的sql语句
           * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
           */
          this.connection.query(sql,function (err, result) {
              if(err){
                  console.log('[select ERROR] - ',err.message);
                  return;
              }
              call(result);
          });
      
      this.connection.end();
  }
}
module.exports=CartDao