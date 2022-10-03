import React from 'react';
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    // useNavigate 參考文件:https://reactrouter.com/docs/en/v6/hooks/use-navigate#usenavigate
    // 額外補充
    // useNavigate() 可以帶上選用參數，這邊也補充給大家～

    // replace: boolean，其值為 true 或 false。通常呼叫 navigate 會推送一個新的 entry 到 history stack，所以使用者可以按下前一頁回去，如果填入 replace: true 目前的 entry 在 history stack 內會被取代成新的。例如：當用戶點擊『購買』按鈕但需要先登入時，在登入後跳轉到結帳畫面，若使用 replace: true，當他們再次點擊回到前一頁時，不會再次看到登入頁面。
    // state: 可為任意值，可用 state 在跳轉路由時傳遞資料，例如：navigate('/login', { state: { id: 1, } })，在 Login 元件就可以透過以下方式把傳遞值取出。

    return ( 
        <div>
        <button onClick={()=>{
            // 當replace為true時，當他們再次點擊回到前一頁時，不會再次看到登入頁面
            // state可以再跳轉路由時傳遞資料
            navigate('/login',{replace: true, state:{id:1}});
        }}>登出按鈕</button>
        <button onClick={()=>{
            navigate(-1)
        }}>返回上一頁</button>
        </div>
     );
}

export default Logout;