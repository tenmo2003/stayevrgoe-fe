import React, { useState } from 'react';
import { Tabs, Table, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import ava from '../assets/ava.png';
import hotel from '../assets/hotel.png';
import user from '../assets/user.png';

const { TabPane } = Tabs;

export default function Admin() {
    const userColumns = [
        {
            title: "id",
            dataIndex: "id",
        },
        {
            title: "username",
            dataIndex: "username",
        },
        {
            title: "email",
            dataIndex: "email",
        },
        {
            title: "SĐT",
            dataIndex: "phone number",
        },
        {
            title: "Ngày tham gia",
            dataIndex: "phone number",
        },
        {
            title: "Khoá tài khoản",
            dataIndex: "delete",
        },
    ]

    const WaitlistColumns = [
        {
            title: "id",
            dataIndex: "id",
        },
        {
            title: "Tên khách sạn",
            dataIndex: "name",
        },
        {
            title: "username",
            dataIndex: "username",
        },
        {
            title: "email",
            dataIndex: "email",
        },
        {
            title: "SĐT",
            dataIndex: "phone number",
        },
        {
            title: "Ngày đăng ký",
            dataIndex: "date",
        },
        {
            title: "Phê duyệt",
            dataIndex: "delete",
        },
    ]

    const HotellistColumns = [
        {
            title: "id",
            dataIndex: "id",
        },
        {
            title: "Tên khách sạn",
            dataIndex: "name",
        },
        {
            title: "username",
            dataIndex: "username",
        },
        {
            title: "email",
            dataIndex: "email",
        },
        {
            title: "SĐT",
            dataIndex: "phone number",
        },
        {
            title: "Ngày duyệt",
            dataIndex: "date",
        },
        {
            title: "Khoá tài khoản",
            dataIndex: "delete",
        },
    ]
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8 w-[80%]">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6 mb-3">
                            <div className="flex flex-col items-center">
                                <img src={ava} className="w-24 h-24 bg-gray-300 rounded-full mb-4" alt="Avatar"/>
                                <h1 className="text-xl font-bold">Admin</h1>
                            </div>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 mb-3 flex px-5 py-3 gap-3">
                            <img src={hotel} width={70} height={70} />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold">xx</span>
                                <span className="text-sm">Khách sạn</span>  
                            </div>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 mb-3 flex px-5 py-3 gap-3">
                            <img src={user} width={70} height={70} />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold">xx</span>
                                <span className="text-sm">Khách hàng</span>  
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Danh sách thành viên" key="1">
                                    {/* Nội dung của Danh sách thành viên */}
                                    <div className='flex justify-center'>
                                        <Input
                                            placeholder="username"
                                            className="w-[40%] px-2 py-1 mb-3"
                                            suffix={
                                            <div className="rounded-l px-2 py-1 flex">
                                                <SearchOutlined className="transition-all duration-300" />
                                            </div>
                                            }
                                        />
                                    </div>
                                    
                                    <Table scroll={{ x: 800 }} dataSource={[]} columns={userColumns} />
                                </TabPane>
                                <TabPane tab="Waitlist" key="2">
                                    {/* Nội dung của Waitlist */}
                                    <div className='flex justify-center'>
                                        <Input
                                            placeholder="Tên khách sạn"
                                            className="w-[40%] px-2 py-1 mb-3"
                                            suffix={
                                            <div className="rounded-l px-2 py-1 flex">
                                                <SearchOutlined className="transition-all duration-300" />
                                            </div>
                                            }
                                        />
                                    </div>
                                    
                                    <Table scroll={{ x: 800 }} dataSource={[]} columns={WaitlistColumns} />
                                </TabPane>
                                <TabPane tab="Danh sách khách sạn" key="3">
                                    {/* Nội dung của Danh sách khách sạn */}
                                    <div className='flex justify-center'>
                                        <Input
                                            placeholder="Tên khách sạn"
                                            className="w-[40%] px-2 py-1 mb-3"
                                            suffix={
                                            <div className="rounded-l px-2 py-1 flex">
                                                <SearchOutlined className="transition-all duration-300" />
                                            </div>
                                            }
                                        />
                                    </div>
                                    
                                    <Table scroll={{ x: 800 }} dataSource={[]} columns={HotellistColumns} />
                                </TabPane>
                                <TabPane tab="Thông báo" key="4">
                                    {/* Nội dung của Thông báo */}
                                    <p>Tiêu đề</p>
                                    <Input size="large" placeholder="Tiêu đề" className='mb-6' />
                                    <p>Nội dung</p>
                                    <Input.TextArea placeholder="Nhập thông báo của bạn ở đây..." rows={6} className='mb-6'/>
                                    <div className='flex justify-center'>
                                        <Button type='primary'>Gửi thông báo</Button>
                                    </div>
                                    
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
