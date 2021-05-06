import React from 'react';
import Layout from '@/components/Layout';
import Uploader from '@/components/Uploader';
import Tips from '@/components/Tips';

function Home () {
  return (
    <Layout>
      <Tips>请先登录再上传！</Tips>
      <Uploader/>
    </Layout>
  );
}

export default Home;
