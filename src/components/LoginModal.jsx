import React from 'react';
import { Modal, Input, Button } from "antd";
import { UserOutlined, KeyOutlined } from '@ant-design/icons';

const LoginModal = ({ visible, onCancel, onLogin, onSignup }) => {
    return (
        <Modal visible={visible} onCancel={onCancel} footer={null}>
            <div className='flex justify-center'>
                <div className='w-[80%]'>
                    <h1 className="text-xl font-bold text-gray-900 md:text-2xl flex justify-center">
                        Login
                    </h1>
                    <div className='mt-4 flex flex-col'>
                        <p>Username</p>
                        <Input size="large" placeholder="username" prefix={<UserOutlined className='pr-2'/>} className='mb-6' />
                        <p>Password</p>
                        <Input.Password size="large" placeholder="password" prefix={<KeyOutlined className='pr-2'/>} className='mb-6' />
                    </div>
                    
                    <div className='flex flex-row justify-center'>
                        <p>Chưa có tài khoản? </p>
                        <p className='ml-2 font-bold cursor-pointer hover:scale-110 text-blue-500' onClick={onSignup}> Đăng ký </p>
                    </div>

                    <div className='mt-4 flex flex-row justify-center'>
                        <Button type='primary' className="mb-3" onClick={onLogin} >Đăng nhập</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default LoginModal;
