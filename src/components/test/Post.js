import React from 'react';
import { Outlet } from 'react-router-dom';

function Post() {
    return ( 
        <>
        <h3>這是Post頁面，請在url後新增/數字，使用url傳遞參數到PostId頁面</h3>
        <Outlet />
        </>
     );
}

export default Post;