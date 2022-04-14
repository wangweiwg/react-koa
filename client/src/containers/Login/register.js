import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from './index.module.scss';
import { register } from '../../service/index';

const Login = () => {
    const navigation = new useNavigate();

    const onFinish = async (values) => {
        const { code, msg } = await register(values);
        if (code === 200) {
            message.success(msg, 1.5, () => {
                navigation('/login');
            });   
        }
    };
  
    return (
        <div className={style.loginPage}>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{
                    account: 'dingjian',
                    password: '123456',
                    storeName: '顶尖',
                    contact: '王伟',
                    phone: '15356183205',
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <div className={style.title}>欢迎注册，请如实填写以下相关信息</div>
                <Form.Item label="账号" name="account" rules={[{ required: true, message: '请输入账号!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="店名" name="storeName" rules={[{ required: true, message: '请输入店名!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="联系人" name="contact" rules={[{ required: true, message: '请输入联系人!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="联系人电话" name="phone" rules={[{ required: true, message: '请输入联系人电话!' }]}>
                    <Input />
                </Form.Item>
        
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <div className={style.btns}>
                        <Button type="primary" htmlType='submit'>
                            立即注册
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
  };

export default Login;