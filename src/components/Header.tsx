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

const Operate = styled.div`
  margin-left: auto;
`

function Header () {
  return (
    <Wrapper>
      <img src={logoUrl} alt=""/>
        <Router>
          <nav>
            <NavLink to="/" activeClassName="active" exact>首页</NavLink>
            <NavLink to="/history" activeClassName="active">上传记录</NavLink>
            <NavLink to="/about" activeClassName="active">关于我</NavLink>
          </nav>
          <Operate>
            <button><NavLink to="/login">登录</NavLink></button>
            <button><NavLink to="/register">注册</NavLink></button>
          </Operate>
        </Router>
    </Wrapper>
  );
}

export default Header;
