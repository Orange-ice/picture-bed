import React from 'react';
import { observer } from 'mobx-react';
import LoginOrRegister from '@/components/LoginOrRegister';

const Login = observer(() => {
  return (
    <>
      <LoginOrRegister isLogin={true} />
    </>
  )
})

export default Login
