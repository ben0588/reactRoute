import React from 'react';
import {useState} from 'react';

function TestUseStateTodo() {

    // input輸入的內容更新
    const [textValue,setTextValue] = useState('');
    // 用一個陣列存放輸入值，底下用map方式顯示
    const [todo,setTodo] = useState([]);

    const addTodo = ()=>{
        return setTodo([...todo,textValue])
    }
    return ( 
        <div>
            <label htmlFor="testTodo">新增行事曆</label>
            <input type="text" id='testTodo' name='testTodo' value={textValue}
            // 輸入時會更新其value狀態
            onChange={(e)=>{setTextValue(e.target.value)}} />
            {/* 點擊時會觸發更新todo陣列，把input的輸入值對應[index]值更新其value值 */}
            <button onClick={addTodo}>新增</button>
            <hr />
            {todo.map((value,index)=>{
                return (
                    <li key={index}>{value}</li>
                )
            })}

        </div>
     );
}

export default TestUseStateTodo;