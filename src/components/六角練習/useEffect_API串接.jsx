import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function TestUseEffectAPI() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        async function getAPI(){
            // fetch 呼叫api回傳response結果
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            // console.log(response)
            // .json() 把回傳資料json格式解析成object物件
            const result = await response.json();
            // console.log(result)
            setData(result)
        }
        getAPI()
    },[])

    return ( 
        <div>
            {data.message && <img src={data.message}/>}
        </div>
     );
}

export default TestUseEffectAPI;