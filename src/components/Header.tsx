import React from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logoUrl from '@/assets/burt.png'
import { Button } from 'antd';

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
  > button:first-child{margin-right: 20px;}
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
            <Button size="small"><NavLink to="/login">登录</NavLink></Button>
            <Button size="small"><NavLink to="/register">注册</NavLink></Button>
          </Operate>
        </Router>
    </Wrapper>
  );
}

export default Header;
