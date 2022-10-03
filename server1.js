// 以 Express 建立 Web 伺服器
var express = require("express");
var app = express();

// 允許跨域使用本服務
var cors = require("cors");
app.use(cors());

// 以 body-parser 模組協助 Express 解析表單與JSON資料
var bodyParser = require('body-parser');
app.use( express.json() );
app.use( express.urlencoded({extended: false}) );

// 連接埠號
var port  = 8000;
// 一切就緒，開始接受用戶端連線
app.listen(port);
console.log("Web伺服器就緒，開始接受用戶端連線.");
console.log(`伺服器已經啟動在 http://localhost:${port}/`);
console.log("鍵盤「Ctrl + C」可結束伺服器程式.");

// 模擬資料庫存取到的資料
const data = [
    {
      id:1,
      title:'測試資料庫'
    }
  ]

// 設定 get 方法:
app.get('/hello',function(request,response){
    response.status(200);
    response.send({
        success:true,
        data
    })
    response.end();
})

// 設定 post 方法:
app.post('/hello',function(request,response){
    const product = request.body;
    // console.log(product)
    data.push({
        ...product,
        id:new Date().getTime(),
    })
    response.send({
        success:true,
        data
    });
    response.end();
})