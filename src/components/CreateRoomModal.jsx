import React from 'react';
import { Modal, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const CreateRoomModal = ({ visible, onCancel }) => {
    return (
        <Modal visible={visible} onCancel={onCancel} footer={null}>
            <div className='flex justify-center'>
                <div className='w-[80%]'>
                    <h1 className="text-xl font-bold text-gray-900 md:text-2xl flex justify-center">
                        Tạo phòng
                    </h1>
                    <div className='mt-4 flex flex-col'>
                        <p>Tên phòng</p>
                        <Input size="large" placeholder="Tên phòng" className='mb-6' />
                        <p>Giá</p>
                        <Input size="large" placeholder="Giá" className='mb-6' />
                        <p>Mô tả</p>
                        <TextArea
                            placeholder="Mô tả"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                            className='mb-6'
                        />
                        <p>Hình ảnh</p>
                        <Upload>
                            <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
                        </Upload>
                    </div>
                    <div className='mt-4 flex flex-row justify-center'>
                        <Button type='primary' className="mb-3" onClick={onCancel}>Tạo phòng</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default CreateRoomModal;
