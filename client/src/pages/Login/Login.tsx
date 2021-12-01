import { useState } from "react";

import { Button, Form, Input } from "antd";
import { useAuth } from "../../providers/AuthProvider";
import { useServices } from "../../providers/ServiceProvider";
import { useNavigate } from "react-router";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { users } = useServices();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const finishHandler = async (values: any) => {
    setLoading(true);
    try {
      const result = await users.login(values);
      setUser(result);
      navigate('/home')
    } catch {}
    setLoading(false);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={finishHandler}
      autoComplete="off"
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="senha"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
