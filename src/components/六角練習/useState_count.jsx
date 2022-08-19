import React from 'react';
import { useState } from 'react';


function TestuseState () {
    const [count,setCount] = useState(0);
    return ( 
        <div>
            <p>V2 現在數字是:{count}</p>
            <button onClick={()=>{ setCount(count+1)}}> 加一 </button>
            <button onClick={()=>{ setCount(count-1)}}> 減一 </button>
        </div>
     );
}

export default TestuseState ;