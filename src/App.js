import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from './components/test/layout.js'
import Home from './components/test/Home.js'
import About from "./components/test/About.js";
import Login from './components/test/Login.js';
import Todo from './components/test/Todo.js'
import Post from './components/test/Post.js'
import PostId from './components/test/PostId.js'
import Register from './components/test/Register.js'
// React Hook 練習:
import UseNavigate from './components/test/useNavigate.js'
// 六角練習
import TestUseContext from './components/uesContext/useContext.theme練習.jsx'


function App() {
  return (
    <div className="App">
      <Routes>
          {/* 最外層設定Layout，元件內新增Navbar、footer元件，在中間內容加上<Outlet />代表內容切換 */}
          <Route path="/" element={<Layout />}>
            {/* 首頁 */}
            <Route path="/" element={<Home />} />
            {/* 關於我 */}
            <Route path="/about" element={<About />} />
            {/* 會員登入頁面 */}
            <Route path="/login" element={<Login />} />
            {/* 備忘錄(成功登入才能訪問) */}
            <Route path="/todo" element={<Todo />} />
            {/* Post詳細頁面 */}
            <Route path="/post" element={<Post />}>
              {/* 動態路由 */}
              <Route path=":postId" element={<PostId />} />
            </Route>
            {/* 會員註冊頁面 */}
            <Route path="/register" element={<Register />} />


            {/* Hook練習區 */}
            <Route path="/usecontext" element={<TestUseContext />} />
            <Route path="/useNavigate" element={<UseNavigate />} />

            {/* (* 字號代表錯誤時訪問哪個頁面) */}
            <Route path="*" element={<About />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App