import React from 'react';

function ReactDay1() {

    const user = {
        firstName: 'Candy',
        lastName: 'Wang',
        description: '前端工程師',
        avatar: 'https://i.pravatar.cc/300?img=31'
    };
    
    return ( 
        <>
        <div className='card'>
            <img src={user.avatar} alt="頭貼" />
            <h3><b>{user.firstName} {user.lastName}</b></h3>
            <p>{user.description}</p>
            <p className='text-blue'>每天練習 React 1次 V1</p  >
        </div>
        
        </>
     ); 
}

export default ReactDay1;