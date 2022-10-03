import React from 'react';
import { useParams } from 'react-router-dom';
function PostId() {
    const { postId } = useParams();
    return ( 
        <>
        <hr />
        <h3>這是PostId頁面</h3>
        <p>獲得post/後面輸入的數字</p>
        <p>Post ID:{postId}</p>
        </> 
    );
}

export default PostId;