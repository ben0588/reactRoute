import React from 'react';
import { Outlet } from "react-router-dom";

import Navbar from './Navbar.js'
import Footer from './footer.js'

// 最外層設定Layout，元件內新增Navbar、footer元件，在中間內容加上<Outlet />代表內容切換
function Layout() {
    return ( 
        <div>
            <Navbar />
                <div  className="content">
                    <Outlet />
                </div>
            <Footer />
        </div>
     );
}

export default Layout;