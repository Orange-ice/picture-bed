import React from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';

function Header () {
  return (
    <div>
      <nav>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/history">上传记录</Link>
          <Link to="/about">关于我</Link>
        </Router>
      </nav>
    </div>
  );
}

export default Header;
