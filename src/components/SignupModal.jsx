import React from 'react';
import { Modal, Input, Button, Radio, Flex  } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined, KeyOutlined } from '@ant-design/icons';

const SignupModal = ({ visible, onCancel, onSignup }) => {
    return (
        <Modal visible={visible} onCancel={onCancel} footer={null}>
            <div className='flex justify-center'>
                <div className='w-[80%]'>
                    <h1 className="text-xl font-bold text-gray-900 md:text-2xl flex justify-center">
                        Signup
                    </h1>
                    <div className='mt-4 flex flex-col'>
                        <p>Username</p>
                        <Input size="large" placeholder="username" prefix={<UserOutlined className='pr-2'/>} className='mb-6' />
                        <p>Email</p>
                        <Input size="large" placeholder="email" prefix={<MailOutlined className='pr-2'/>} className='mb-6' />
                        <p>Phone number</p>
                        <Input size="large" placeholder="phone number" prefix={<PhoneOutlined className='pr-2'/>} className='mb-6' />
                        <p>Password</p>
                        <Input.Password size="large" placeholder="password" prefix={<KeyOutlined className='pr-2'/>} className='mb-6' />
                        <p>Confirm password</p>
                        <Input.Password size="large" placeholder="confirm password" prefix={<KeyOutlined className='pr-2'/>} className='mb-6' />
                        <p>Bạn là?</p>
                        <Flex vertical gap="middle">
                            <Radio.Group defaultValue="a" buttonStyle="solid" className='flex flex-row mb-6'>
                                <Radio.Button value="a" className="w-[50%] h-9 flex justify-center items-center">Khách hàng</Radio.Button>
                                <Radio.Button value="b" className="w-[50%] h-9 flex justify-center items-center">Quản lý khách sạn</Radio.Button>
                            </Radio.Group>
                        </Flex>
                    </div>
                    
                    <div className='flex flex-row justify-center'>
                        <p>Đã có tài khoản? </p>
                        <p className='ml-2 font-bold cursor-pointer hover:scale-110 text-blue-500' onClick={onSignup}> Đăng nhập </p>
                    </div>

                    <div className='mt-4 flex flex-row justify-center'>
                        <Button type='primary' className="mb-3" onClick={onSignup} >Đăng ký</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SignupModal;
