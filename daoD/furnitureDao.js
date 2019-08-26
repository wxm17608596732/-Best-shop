function FurnitureDao() {
    this.init = function (){
        var mysql = require('mysql');

        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '123456',
            port: '3306',
            database:'lcn'
        });
        this.connection.connect();
    };
    this.selectProducts1 = function(call){
        var  userGetSql = 'SELECT * FROM NewProducts';
        this.connection.query(userGetSql,function (err, result1) {
            if(err){
                console.log('[SELECT ERROR] -- ',err.message);
                return;
            }
            // console.log('result1--'+result1);
            call(result1);
        });
        this.connection.end();
    }
}
module.exports=FurnitureDao;