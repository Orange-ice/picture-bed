import React from 'react';
import { observer } from 'mobx-react';
import LoginOrRegister from '@/components/LoginOrRegister';
import Layout from '@/components/Layout';

const Login = observer(() => {
  return (
    <Layout>
      <LoginOrRegister isLogin={true} />
    </Layout>
  )
})

export default Login
