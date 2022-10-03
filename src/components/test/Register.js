import axios from 'axios';
import React from 'react';
// npm install react-hook-form (表單驗證套件)
import { useForm } from "react-hook-form";


// 六角網址:https://hackmd.io/cBGCCAQTT_WZEYcKrd5taA
// 官方文件:https://react-hook-form.com/api

function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        axios.post('http://127.0.0.1:8050/api/product',{ title:data})
        .then(response=>console.log(response))
    
    };
    const onError = (errors, e) => console.log(errors, e); // 無法完成驗證的內容

    // 在 React Hook Form 中有提供各種驗證屬性，如下：
    //     required: 必填
    //     min: 輸入的最小值，例如：年齡必須輸入 0 以上。
    //     max: 輸入的最大值，例如：年齡必須輸入 120 以下。
    //     minLength: 輸入的字串長度最小值，例如：密碼需大於 8 碼。
    //     maxLength: 輸入的字串長度最大值，例如：標題需小於 12 字。
    //     pattern：可以使用 regex 正規表達式來客製化自己的輸入限制。
    //     validate：加入 callback function 執行自訂的驗證函式

    // 要改變input內的值要使用 watch() 方法

    return ( 
        <div>
            <h3>這是註冊頁面</h3>
            <form onSubmit={handleSubmit(onSubmit,onError)}>
                <label htmlFor="account">帳號:</label>
                <input type="text" name="account" placeholder="請輸入Email帳號"
                {...register("account",{ 
                    // 必填
                    required: {value:true , message:'此欄位必填' },
                    // Email正規化
                    pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,message:'不符合 Email 規則'} })} />
                {/* 當value不存在時則顯示對應的message提示 */}
                {errors.account?.message }
                <br />
            
                <label htmlFor="password">密碼:</label>
                <input type="password" name="password" placeholder="請輸入註冊密碼" 
                {...register("password",{ 
                    // 必填
                    required:{value:true,message:'此欄位必填'},
                    // 長度最少 8 碼
                    minLength:{value:8,message:'密碼至少為 8 碼'}})}/>
                 {/* 當value不存在時則顯示對應的message提示 */}
                {errors.password?.message}
                <br />
            
            <input type="submit" />
            </form>
        </div>
     );
}

export default Register;