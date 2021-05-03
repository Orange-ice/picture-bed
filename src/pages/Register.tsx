import React from 'react';
import { observer } from 'mobx-react';
import LoginOrRegister from '@/components/LoginOrRegister';

const Register = observer(() => {
  return (
    <>
      <LoginOrRegister isLogin={false}/>
    </>
  )
})

export default Register
