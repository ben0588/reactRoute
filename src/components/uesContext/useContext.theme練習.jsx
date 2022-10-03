import React from 'react';

// 引用MyContext元件
import { MyContext } from './MyContexe.jsx';

// 引用本文元件
import ThemeText from './themeText.jsx'

// 引用本文按鈕
import ThemeButton from './themeButton.jsx'

// 最外頁
function TestUseContext() {
    const themes = {
        light:{
            foreground:'#ffffff',
            background:'#313675'
        }
    }
    return (    
        <div>
            <h3>練習useContext</h3>
            {/* 只要在最外層的 MyContext.Provider的value值傳入，裡面元件都可以使用該物件*/}
            <MyContext.Provider value={themes.light}>
                <ThemeText />
                <ThemeButton />
            </MyContext.Provider>
        </div>
     );
}

export default TestUseContext;