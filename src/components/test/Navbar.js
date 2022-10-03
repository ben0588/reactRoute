import React from 'react';
import {Link } from "react-router-dom";

// 這邊可以寫cookie 紀錄，有登入才會顯示會員狀態的

function Navbar() {
    return ( 
        <div style={{border:'1px solid black'}}  className="header">
            <h3>Navbar導覽列</h3> 
        <nav>
          <Link to="/">首頁</Link> <br />
          <Link to="/about">About</Link> <br />
          <Link to="/login">會員登入頁面</Link><br />
          <Link to="/todo">備忘錄</Link><br />
          <Link to="/post">Post詳細頁面</Link><br />
          <Link to="/register">會員註冊頁面</Link><br />
          <Link to="/usecontext">useContext練習</Link><br />
          <Link to="/useNavigate">useNavigate練習</Link><br />
        </nav>
   
        
        </div>
    );
}

export default Navbar;