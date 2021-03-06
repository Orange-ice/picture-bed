import React from 'react';
import { observer } from 'mobx-react';
import { Form, Input, Button, message } from 'antd';
import styled from 'styled-components';
import { useStores } from '@/stores';
import { useHistory } from 'react-router-dom';

const FormWrapper = styled.div`
  padding: 20px;
  margin: 50px 500px 0;
  min-width: 500px;
  border: solid 1px #ccc;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    min-width: 200px;
  }

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
  isLogin: boolean,
};
interface UserInfo {
  username: string,
  password: string
}
const LoginOrRegister: React.FC<Props> = observer((props) => {
  const { isLogin } = props;
  const [form] = Form.useForm();
  const { AuthStore } = useStores();
  const history = useHistory();
  const setInfo = (values: UserInfo) => {
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
  }
  const login = (values: UserInfo) => {
    setInfo(values)
    AuthStore.login().then(() => {
      message.success('登录成功')
      history.push('/')
    }).catch((error) => {
      message.error(error.rawMessage)
    })
  };
  const register = (values: UserInfo) => {
    setInfo(values)
    AuthStore.register().then(() => {
      message.success('注册成功，并成功登录')
      history.push('/')
    }).catch((error) => {
      message.error(error.rawMessage)
    })
  };
  const onFinish = (values: UserInfo) => {
    console.log('Success:', values);
    if (isLogin) {
      login(values)
    } else {
      register(values)
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const validateUsername = (rule:object, value: string) => {
    if (/\W/.test(value)) { return Promise.reject(new Error('只能包含字母数字下划线')) }
    if (value.length < 4 || value.length > 10) { return Promise.reject(new Error('长度为4~10个字符')) }
    return Promise.resolve();
  };
  const validateConfirm = (rule: object, value: string) => {
    if (form.getFieldValue('password') === value) { return Promise.resolve() }
    return Promise.reject(new Error('两次密码不一致'));
  };
  return (
    <FormWrapper>
      <span>{isLogin ? '图床系统登录' : '欢迎注册图床系统'}</span>
      <Form
        form={form}
        {...layout}
        labelAlign={labelAlign}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }, { validator: validateUsername }]}
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
            rules={[{ required: true, message: '请输入确认密码' }, { validator: validateConfirm }]}
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
