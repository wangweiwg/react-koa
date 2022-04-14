import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from './index.module.scss';
import { login } from '../../service/index'

const Login = () => {
    const navigation = new useNavigate();

    const onFinish = async (values) => {
        console.log('Success:', values);
        const { code, data } = await login({
            account: 'dingjian',
            password: '123456'
        })
        if (code === 200) {
            navigation('/')
        }
    };
  
    const handleRegister = () => {
        navigation('/register')
    }
    return (
        <div className={style.loginPage}>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ account: 'dingjian', password: '123456' }}
                onFinish={onFinish}
                autoComplete="off"
                className={style.loginForm}
            >
                <div className={style.title}>后台登录系统</div>
                <Form.Item label="用户名" name="account" rules={[{ required: true, message: '请输入用户名!' }]}>
                    <Input />
                </Form.Item>
        
                <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input.Password />
                </Form.Item>
        
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <div className={style.btns}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                        <Button type="text" onClick={handleRegister}>
                            注册
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
  };

export default Login;