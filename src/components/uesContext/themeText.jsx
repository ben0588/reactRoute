import React from 'react';
import { useContext } from 'react'
import { MyContext } from './MyContexe.jsx';

// 主題 本文元件
function ThemeText() {
     // 引用主題頁傳送的物件屬性內容值
    const theme = useContext(MyContext)
    return ( 
        <>
            <p style={{color:theme.background,fontSize:'50px'}}> 這是主題本文文字 </p>
        </>
     );
}

export default ThemeText;