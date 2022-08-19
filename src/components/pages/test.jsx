import React from 'react';

function Test() {

    const user = {firstName:'Wang ',lastName:'Candy ', description: '前端工程師',data:'是一位 '}
    return ( 
        <>
        <h1>
            {user.firstName} 
            {user.lastName}
            {user.data}
            {user.description}
            
        </h1>
        
        </>
     ); 
}

export default Test;