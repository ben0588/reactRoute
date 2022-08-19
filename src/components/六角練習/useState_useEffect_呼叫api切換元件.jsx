import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// 等待元件
import Loading from './loading等待元件.jsx'
// 圖片元件
import ImageArea from './ImageArea圖片元件.jsx'

// 題目：當 loading 為 true 時，就會顯示 Loading 元件，false 則為 ImageArea 元件。


function TestLoadingToImg() {

    // 存放呼叫api回傳的src網址
    const [imgSrcData,setImgSrcData] = useState(null);
    // 用來改變loading狀態
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        /* 建立 and 更新元件的副作用區 */
        /*---------------------------*/

    
        /* 移除元件的副作用區 */
        // 用return包住後，畫面只會顯示一次，不會重新刷新
        return ()=>{
        async function getAPI (){
            const response = await fetch('https://dog.ceo/api/breeds/image/random')
            // console.log(response)
            const result = await response.json();
            // console.log(result)
            setImgSrcData(result.message)
            setLoading(false)
        }
        getAPI()
        }
    },[])
    console.log(imgSrcData)

    

    return ( 
        <div>
            測試元件2
            {loading? <Loading />:<ImageArea src={imgSrcData}/>}           
        </div>
     );
}

export default TestLoadingToImg;

