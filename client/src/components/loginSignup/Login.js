import React from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { purple } from '@ant-design/colors';
import { Button, Form, Input, Card } from 'antd';

import Auth from '../../utils/auth';

const Login = (props) => {

  const [login] = useMutation(LOGIN_USER);
  
  const onFinish = async (values) => {
    const email = values.email;
    const password = values.password;

    try {
      
    const { data } = await login({variables: {email, password}});

    Auth.login(data.login.token);
    
    } catch (e) {
      console.error(e);
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card title="Login"  style={{ width: 800 }}>
      <Form
        name="login"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          style={{color: purple[3]}}
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}        
        >
          <Input placeholder="email"/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{backgroundColor: purple[3], color: 'white', borderColor: purple[3]}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Login;
