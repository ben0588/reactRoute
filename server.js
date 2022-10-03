// 引入 http 協定
const http = require("http");

// 導入 fs 模塊
const fs = require("fs");

// 導入 Qs 模塊，解析字串
const qs = require('querystringify');

// 設定port跟本機ip
const port = 8070;
const ip = "127.0.0.1";

// 建立回復的給用戶的涵式 (filename文件名、statusCode狀態碼、response回覆內容)
const sendResponse = (filename,statusCode,response)=>{
    // readFile需要兩個參數(文件名、回調涵式(error,data))
    fs.readFile(`./html/${filename}`,(error,data)=>{
        // 當檔案不存在時，直接報錯
        if (error){
            response.statusCode = 500;
            response.setHeader("Content-Type","text/plain");
            response.end('連接服務失敗')
        }else{
        // 當檔案存在，返回輸入的狀態碼，"text/html" 格式要html，返回data頁面內容
            response.statusCode = statusCode;
            response.setHeader("Content-Type","text/html");
            response.end(data)
        }
    });
};

// 建立server
const server = http.createServer((request,response)=>{
    // request.url 查看用戶請求的網址('url')
    // request.method 查看用戶請求的方法(GET、POST...)
    console.log(request.url,request.method);
    let url = request.url;
    const method = request.method;


    /*   GET  方法*/
    // 教學範例
    // if ( method === "GET" ){
    //     if(url === "/"){
    //         sendResponse("index.html",200,response);
    //     }else if (url === "/about"){
    //         sendResponse("about.html",200,response);
    //     }else{
    //         sendResponse("404.html",404,response)
    //     }
    // }
    // response.end('hello from nodejs server 2');

    // 嘗試用三元運算運行(OK)
    if ( method === "GET" ){
        const requestUrl = new URL(url,`http://${ip}:${port}`);
        // console.log(requestUrl); // 先查看有什麼可以取得
        // console.log(requestUrl.searchParams.get("lang")) // 獲取url參數
        url = requestUrl.pathname; // 增加彈性，抓取當前進入的網頁url
        const lang = requestUrl.searchParams.get("lang"); // 存語言
        let selector ;

        // 教學範例
        // if (lang === null || lang === "en"){
        //     selector=""
        // }else if (lang === "zh"){
        //      selector="-zh"
        // }else{
        //     selector=""
        // }

        // 嘗試用三元運算運行(OK)
        lang === null ?  selector=""
        :lang === "en"?  selector=""
        :lang === "zh"?  selector="-zh"
        :selector=""

        url === "/" ? sendResponse(`index${selector}.html`,200,response) 
        : url === `/about` ? sendResponse(`about${selector}.html`,200,response)
        : url === `/login` ? sendResponse(`login${selector}.html`,200,response)
        : url === `/login-success` ? sendResponse(`login-success${selector}.html`,200,response)
        : url === `/login-fail` ? sendResponse(`login-fail${selector}.html`,200,response)
        : sendResponse(`404${selector}.html`,404,response);
    } 
    else {
        if (url === "/process-login"){
            // console.log(method)
            let body = [];
            request.on("data",(chunk)=>{
                body.push(chunk)
            });
            request.on("end",()=>{
                body = Buffer.concat(body).toString(); // 轉換成字符
                body = Object.fromEntries(new URLSearchParams(body)) // 轉換成物件格式顯示
                console.log(body) // { userName: '444', password: '444' }

                // 登入機制
                if (body.userName === "ben" && body.password === "ben123"){
                    // 當帳號密碼正確更新狀態碼，並且設定setHeader("Location",要前往哪個網址)
                    response.statusCode = 301;
                    response.setHeader("Location","/login-success");
                }else{
                    // 當帳號密碼錯誤更新狀態碼，並且設定setHeader("Location",要前往哪個網址)
                    response.statusCode = 301;
                    response.setHeader("Location","/login-fail");
                }
                response.end();
            })
        }
    }
    

});



// 設定監聽.listen()三個參數
server.listen(port,ip,()=>{
    console.log(`Server is running at http://${ip}:${port}`)
});

// 建立html資料夾 (index.html、about.html、404.html)