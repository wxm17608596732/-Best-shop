function ProductsDao() {
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
    this.selectProducts = function(call){
        var  userGetSql = 'SELECT * FROM rightProducts';
        this.connection.query(userGetSql,function (err, result) {
            if(err){
                console.log('[SELECT ERROR] -- ',err.message);
                return;
            }
            // console.log('result--'+result);
            call(result);
        });
        this.connection.end();
    }
}
module.exports=ProductsDao;