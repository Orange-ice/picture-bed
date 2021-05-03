import React from 'react';
import { observer } from 'mobx-react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const FormWrapper = styled.div`
  padding: 20px;
  margin: 50px 500px 0;
  min-width: 500px;
  border: solid 1px #ccc;
  &:hover{
    box-shadow: 0 5px 19px 6px rgba(0,0,0,0.05);
    border: none;
  }
  >span{
    display: block;
    text-align: center;
    font-size: 1.5em;
    padding-bottom: 0.5em;
    font-weight: 500;
  }
`

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 }
}
const labelAlign = 'left'

type Props = {
  isLogin: boolean
};

const LoginOrRegister: React.FC<Props> = observer((props) => {
  const { isLogin } = props
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <FormWrapper>
      <span>{isLogin ? '图床系统登录' : '欢迎注册图床系统'}</span>
      <Form
        {...layout}
        labelAlign={labelAlign}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>

        {!isLogin &&
          <Form.Item
            label="确认密码"
            name="confirmPassword"
            rules={[{ required: true, message: '请输入确认密码' }]}
          >
            <Input.Password />
          </Form.Item>
        }

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            {isLogin ? '登录' : '注册'}
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  )
})

export default LoginOrRegister
