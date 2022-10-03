import React from 'react';
import { useContext } from 'react'
import { MyContext } from './MyContexe.jsx';

// 主題 按鈕元件
function ThemeButton() {
     // 引用主題頁傳送的物件屬性內容值
    const theme = useContext(MyContext);
    return ( 
        <>
            <button style={{color:theme.foreground,background:theme.background,fontSize:'50px'}}> 
            主題的按鈕 
            </button>
        </>
     );
}

export default ThemeButton;