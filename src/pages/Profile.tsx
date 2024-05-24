import React, { useState } from 'react';
import { Table, Input } from "antd"
import ava from "../assets/ava.png"

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Name',
        username: 'Username',
        email: 'Email',
        phoneNumber: 'Phone number'
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        console.log('Profile saved:', profile);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
        }));
    };
    const columns = [
        {
          title: "Order ID",
          dataIndex: "id",
          key: "id",
          width: "10%",
        },
        {
            title: "Hotel/User",
            dataIndex: "hotel",
            key: "id",
            width: "10%",
        },
        {
            title: "Room",
            dataIndex: "roomID",
            key: "id",
            width: "10%",
        },
        {
            title: "Time",
            dataIndex: "time",
            key: "id",
            width: "10%",
        },
        {
            title: "State",
            dataIndex: "state",
            key: "id",
            width: "10%",
        },
    ]

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
                                {/* <h1 className="text-xl font-bold">Name</h1>
                                <p className="text-gray-700">Username</p>
                                <p className="text-gray-700">Email</p>
                                <p className="text-gray-700">Phone number</p>
                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Edit profile</a>
                                </div> */}
                                {isEditing ? (
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
                                    {isEditing ? (
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
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Booking history</h2>
                            
                            <Table
                                scroll={{ x: 800 }}
                                className="w-full"
                                columns={columns}
                                
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
