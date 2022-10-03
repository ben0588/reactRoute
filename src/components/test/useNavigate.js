import { useNavigate,Link,NavLink } from "react-router-dom";

function UseNavigate() {
    // 建立Hook
    const navigator = useNavigate();
    // 使用JavaScript觸發跳轉頁面
    const btnSwitch =()=>{
        // 主要可以寫if 若是沒有帳號權限，可以設定移轉的網址

        // 當replace為true時，當他們再次點擊回到前一頁時，不會再次看到登入頁面
        // state可以再跳轉路由時傳遞資料
        navigator('/Home',{replace: true, state:{id:1}})
    }
    // 返回上一頁按鈕
    const returnBut =()=>{
        navigator(-1)
    }

    const btnHttps = ()=>{
        // "react-router-dom" 不處理連接外部URL
        // navigator('https://www.google.com.tw/') 
            // 失敗

        // 如何訪問外部URL? 參考網址:https://ucamc.com/e-learning/javascript/302-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8javascript%E9%80%A3%E7%B5%90%E8%BD%89%E8%B7%B3%E7%B6%B2%E5%9D%80%E6%96%B9%E6%B3%95
            // 1、直接跳轉外部網域URL
            // window.location.href = 'https://www.google.com.tw/';

            // 2、另開頁面跳轉外部網域URL (網址,視窗名稱,config設定)
            window.open('https://www.google.com.tw/','視窗名稱','height=1000,width=1000')

    }


    return ( 
        <div>
            <h3>說明 useNavigate Hook 與 Link 差異</h3>
            <p>useNavigate所建立的Hook是使用JavaScript方式觸發(可以寫判斷)，如onClick，
                <a href="https://reactrouter.com/en/v6.3.0/api#usenavigate">文件參考</a>
            </p>
            <p>Link:將[ 靜態內容 ]變成 a href="#" 連結，用來跳轉頁面</p>
            <p>NavLink:將[ 靜態內容 ]變成 a href="#" 連結，用來跳轉頁面，導覽列對應會亮起來</p>
            <button onClick={btnSwitch}>跳轉頁面到首頁</button><br />
            <button onClick={btnSwitch}>返回上一頁</button><br />
            <button onClick={btnHttps}>測試訪問外網網站</button><br />
            <Link to="/Home">Link 回首頁</Link><br />
            <NavLink to="/Home">NavLink 回首頁</NavLink>
        </div>
     );
}

export default UseNavigate;