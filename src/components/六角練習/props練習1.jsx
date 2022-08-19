import React from 'react';

// 結構方法 ({name})
function TestProps1({name}) {
    return ( 
        <div>
            <p>子元件，成功：{name}</p>
        </div>
     );
}

// 一般方法 (props.name)
// function TestProps1(props) {
//     return ( 
//         <div>
//             <p>子元件，成功V2：{props.name}</p>
//         </div>
//      );
// }

export default TestProps1;