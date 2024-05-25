import React, { useState } from 'react';
import { Table, Input, Tabs, Button, Upload } from "antd"
import { SearchOutlined, EnvironmentFilled, UploadOutlined } from '@ant-design/icons'
import ava from "../assets/ava.png"
import img from "../assets/hinh5.jpg";
import CreateRoomModal from "../components/CreateRoomModal"

const { TabPane } = Tabs;

export default function Profile() {
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [description, setDescription] = useState("Description về khách sạn đồ đó :D");
    const [address, setAddress] = useState("Địa chỉ chi tiết");
    const [images, setImages] = useState([img, img, img, img]);
    const [modalCreate, setModalCreate] = useState(false);

    const showCreate = () => {
        setModalCreate(true);
    };

    const cancelCreate = () => {
        setModalCreate(false);
    };

    const [profile, setProfile] = useState({
        name: 'Name',
        username: 'Username',
        email: 'Email',
        phoneNumber: 'Phone number'
    });

    const handleEditClick = () => {
        setIsEditingProfile(true);
    };

    const handleSaveClick = () => {
        setIsEditingProfile(false);
        console.log('Profile saved:', profile);
    };

    const handleCancelClick = () => {
        setIsEditingProfile(false);
    };

    const handleEditDesClick = () => {
        setIsEditingDescription(true);
    };

    const handleSaveDesClick = () => {
        setIsEditingDescription(false);
        console.log('Profile saved:', profile);
    };

    const handleCancelDesClick = () => {
        setIsEditingDescription(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
        }));
    };
    
    const columns = [
        { title: "Order ID", dataIndex: "id", key: "id", width: "10%",},
        {title: "Hotel/User", dataIndex: "hotel", key: "id", width: "10%",},
        {title: "Room", dataIndex: "roomID", key: "id", width: "10%",},
        {title: "Time", dataIndex: "time", key: "id", width: "10%",},
        {title: "State", dataIndex: "state", key: "id", width: "10%",},
    ]

    const roomListColumns = [
        { title: "roomID", dataIndex: "id" },
        { title: "Tên phòng", dataIndex: "roomName" },
        { title: "Cơ sở vật chất", dataIndex: "facilities" },
        { title: "Giá", dataIndex: "price" },
        { title: "Xoá phòng", dataIndex: "delete" },
    ];
    
    const bookingHistoryColumns = [
        { title: "id", dataIndex: "id" },
        { title: "Khách", dataIndex: "user" },
        { title: "Phòng", dataIndex: "roomName" },
        { title: "Thời gian", dataIndex: "time" },
        { title: "Giá", dataIndex: "price" },
        { title: "Trạng thái", dataIndex: "state" },
    ];

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-8 w-[80%]">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <h1 className="text-xl font-bold">Role</h1>
                                <img src={ava} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">
                                </img>
                                {isEditingProfile ? (
                                    <>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder='Name'
                                        value={profile.name}
                                        onChange={handleChange}
                                        className="text-xl font-bold mb-2"
                                    />
                                    <Input
                                        type="text"
                                        name="username"
                                        placeholder='Username'
                                        value={profile.username}
                                        onChange={handleChange}
                                        className="text-gray-700 mb-2"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder='Email'
                                        value={profile.email}
                                        onChange={handleChange}
                                        className="text-gray-700 mb-2"
                                    />
                                    <Input
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder='Phone number'
                                        value={profile.phoneNumber}
                                        onChange={handleChange}
                                        className="text-gray-700 mb-2"
                                    />
                                    </>
                                ) : (
                                    <>
                                    <h1 className="text-xl font-bold">{profile.name}</h1>
                                    <p className="text-gray-700">{profile.username}</p>
                                    <p className="text-gray-700">{profile.email}</p>
                                    <p className="text-gray-700">{profile.phoneNumber}</p>
                                    </>
                                )}

                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    {isEditingProfile ? (
                                    <>
                                        <button
                                        onClick={handleSaveClick}
                                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                                        >
                                        Save
                                        </button>
                                        <button
                                        onClick={handleCancelClick}
                                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                                        >
                                        Cancel
                                        </button>
                                    </>
                                    ) : (
                                    <button
                                        onClick={handleEditClick}
                                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                                    >
                                        Edit profile
                                    </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nội dung bên phải */}
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            {/* Nếu là user */}
                            {/* <h2 className="text-xl font-bold mb-4">Booking history</h2>
                            
                            <Table
                                scroll={{ x: 800 }}
                                className="w-full"
                                columns={columns}
                                
                            /> */}

                            {/* Nếu là hotel mana */}
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Thông tin khách sạn" key="1">
                                    <h2 className="text-xl font-bold mb-4">Hình ảnh</h2>
                                    <div className="grid grid-cols-4 gap-3 w-full h-auto mb-6">
                                        {images.map((src, index) => (
                                            <img key={index} className="rounded-lg col-span-1 row-span-1 object-cover w-full h-full" src={src} alt={`img${index}`} />
                                        ))}
                                    </div>

                                    {isEditingDescription && (
                                            <div className="mb-6">
                                                <Upload>
                                                    <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
                                                </Upload>
                                            </div>
                                        )}

                                        <h2 className="text-xl font-bold mb-4">Giới thiệu</h2>
                                        {isEditingDescription ? (
                                            <Input.TextArea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className='mb-6'/>
                                        ) : (
                                            <p className="text-gray-700 mb-6">{description}</p>
                                        )}
                                        <h2 className="text-xl font-bold mb-4">Địa chỉ</h2>
                                        {isEditingDescription ? (
                                            <Input value={address} onChange={(e) => setAddress(e.target.value)} />
                                        ) : (
                                            <p className="text-gray-700 mb-6">
                                                <EnvironmentFilled /> {address}
                                            </p>
                                        )}
                                        <div className='flex justify-center mt-6'>
                                            {isEditingDescription ? (
                                                <>
                                                    <Button type="primary" className='mr-2' onClick={handleSaveDesClick}>Lưu</Button>
                                                    <Button onClick={handleCancelDesClick}>Hủy</Button>
                                                </>
                                            ) : (
                                                <Button type="primary" onClick={handleEditDesClick}>Chỉnh sửa</Button>
                                            )}
                                        </div>
                                    
                                </TabPane>
                                <TabPane tab="Danh sách phòng" key="2">
                                    <div className='flex justify-between items-center w-full mb-3 px-8'>
                                        <div className='flex-1'></div> {/* giữ chỗ bên trái */}
                                        <div className='flex justify-center flex-1'>
                                            <Input
                                                placeholder="Tên khách sạn"
                                                className="px-2 py-1 w-full"
                                                suffix={
                                                    <div className="rounded-l px-2 py-1 flex">
                                                        <SearchOutlined className="transition-all duration-300" />
                                                    </div>
                                                }
                                            />
                                        </div>
                                        <div className='flex-1 flex justify-end'>
                                            <Button type="primary" className='ml-4' onClick={showCreate}>
                                                Tạo phòng
                                            </Button>
                                        </div>
                                    </div>
                                    
                                    <Table scroll={{ x: 800 }} dataSource={[]} columns={roomListColumns} />
                                    
                                </TabPane>
                                <TabPane tab="Lịch sử đặt phòng" key="3">
                                    <div className='flex justify-center'>
                                        <Input
                                            placeholder="Tên khách sạn"
                                            className="w-[31%] px-2 py-1 mb-3"
                                            suffix={
                                            <div className="rounded-l px-2 py-1 flex">
                                                <SearchOutlined className="transition-all duration-300" />
                                            </div>
                                            }
                                        />
                                    </div>
                                    
                                    <Table scroll={{ x: 800 }} dataSource={[]} columns={bookingHistoryColumns} />  
                                </TabPane>
                            </Tabs>

                            <CreateRoomModal visible={modalCreate} onCancel={cancelCreate}></CreateRoomModal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
