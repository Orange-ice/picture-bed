import React from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logoUrl from '@/assets/burt.png'

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  background-color: #407fbf;
  color: #fff;
  > img {height: 30px;}
  > nav {
    > a {
      color: #fff;
      margin-left: 30px;
      &.active{border-bottom: solid 1px #fff;}
    }
  }
`

function Header () {
  return (
    <Wrapper>
      <img src={logoUrl} alt=""/>
      <nav>
        <Router>
          <NavLink to="/" activeClassName="active" exact>首页</NavLink>
          <NavLink to="/history" activeClassName="active">上传记录</NavLink>
          <NavLink to="/about" activeClassName="active">关于我</NavLink>
        </Router>
      </nav>
    </Wrapper>
  );
}

export default Header;
