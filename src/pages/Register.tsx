import React from 'react';
import { observer } from 'mobx-react';
import LoginOrRegister from '@/components/LoginOrRegister';
import Layout from '@/components/Layout';

const Register = observer(() => {
  return (
    <Layout>
      <LoginOrRegister isLogin={false}/>
    </Layout>
  )
})

export default Register
