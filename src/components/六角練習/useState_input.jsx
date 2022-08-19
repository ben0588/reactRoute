import React from 'react';
import { useState } from 'react';
function TestuseStateInput() {

    const [userData,userDataState] = useState({
        account:'',
        password:''
    })

    const stateUserData = (e)=>{
        // console.log('ok')
        // console.log(e.target.value)
        // name 對應的是input標籤的name值，value是輸入框中的值，e.target則是當前輸入值
        const {name,value} = e.target;
        // state先將原資料userData撈出來，...state把原資料加入，最後將原key值的內容替換[account]:value
        userDataState((state)=>({...state,[name]:value}))
    }

    const submit =()=>{
        // console.log('ok')
        console.log('帳號：'+ userData.account,'密碼：'+userData.password)
    }

    // console.log(userData)
    return ( 
        <>
        使用者帳號密碼輸入，console.log出來
        <hr />
        <div>
            <label htmlFor="account">帳號；</label>
            <input type="text" id="account" name="account" value={userData.account} onChange={stateUserData}/>
        </div>
        
        <div>
            <label htmlFor="password">密碼：</label>
            <input type="text" id='password' name='password' value={userData.password} onChange={stateUserData} />
        </div>
        <hr />
        <div>
             <button onClick={submit}>送出查看console</button>
        </div>
        
        </>
     );
}

export default TestuseStateInput;