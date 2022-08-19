import React from 'react';


function Child (){
    return (
        <div >
            <p style={{marginBottom:'0'}}>Child</p>
        </div>
    )
}

// 這邊帶的　children 參數是固定，主要在主程式中<Main>標籤夾進去的<Child />
function Main ({children}){
    return (
        <div style={{width:'50vw',border:'1px solid black'}}>
            <h1>Main</h1>
            {children}
        </div>
    )
}

function Sidebar (){
    return (
        <div style={{width:'50vw',border:'1px solid black'}}>
            <h1 style={{marginTop:'0'}}>Sidebar</h1>
        </div>
    )
}

function TestComponentV1() {
    return ( 
        <div >
            <h1>測試元件</h1>
            <div style={{display:'flex'}}>
            <Sidebar />
            {/* 當要把子元件包進去則要用<Main></ Main>方式包住，跟一般只要顯示的<Child />方式不同! */}
                <Main>
                    <Child />
                </ Main>
            </div>
        </div>
     );
}

export default TestComponentV1;