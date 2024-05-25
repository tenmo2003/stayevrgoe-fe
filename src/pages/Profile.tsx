import React, { useContext, useEffect, useState } from "react";
import { Table, Input, Tabs, Button, Upload } from "antd";
import {
  SearchOutlined,
  EnvironmentFilled,
  UploadOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import ava from "../assets/ava.png";
import img from "../assets/hinh5.jpg";
import CreateRoomModal from "../components/CreateRoomModal";
import RegistHotelModal from "../components/RegistHotelModal"
import UserContext from "../contexts/UserContext";

const { TabPane } = Tabs;

export default function Profile() {
  const { user, setUser } = useContext(UserContext);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [description, setDescription] = useState(
    "Description về khách sạn đồ đó :D",
  );
  const [address, setAddress] = useState("Địa chỉ chi tiết");
  const [images, setImages] = useState([img, img, img, img]);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalRegist, setModalRegist] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const showCreate = () => {
    setModalCreate(true);
  };

  const cancelCreate = () => {
    setModalCreate(false);
  };

  const showRegist = () => {
    setModalRegist(true);
  };

  const cancelRegist = () => {
    setModalRegist(false);
  };

  const [profile, setProfile] = useState({
    fullName: "fullName",
    email: "Email",
    phoneNumber: "Phone number",
  });

  const handleEditClick = () => {
    setIsEditingProfile(true);
  };

  const handleSaveClick = () => {
    setIsEditingProfile(false);
    console.log("Profile saved:", profile);
  };

  const handleCancelClick = () => {
    setIsEditingProfile(false);
  };

  const handleEditDesClick = () => {
    setIsEditingDescription(true);
  };

  const handleSaveDesClick = () => {
    setIsEditingDescription(false);
    console.log("Profile saved:", profile);
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
    { title: "Order ID", dataIndex: "id", key: "id", width: "10%" },
    { title: "Hotel/User", dataIndex: "hotel", key: "id", width: "10%" },
    { title: "Room", dataIndex: "roomID", key: "id", width: "10%" },
    { title: "Time", dataIndex: "time", key: "id", width: "10%" },
    { title: "State", dataIndex: "state", key: "id", width: "10%" },
  ];

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
      <div className="container mx-auto w-[80%] py-8">
        <div className="grid grid-cols-4 gap-6 px-4 sm:grid-cols-12">
          <div className="col-span-4 sm:col-span-3">
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex flex-col items-center">
                <h1 className="mb-2 text-xl font-bold">
                  {user.role == "USER" ? "Khách hàng" : "Quản lý khách sạn"}
                </h1>
                <img
                  src={ava}
                  className="mb-4 h-32 w-32 shrink-0 rounded-full bg-gray-300"
                ></img>
              </div>
              {isEditingProfile ? (
                <>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={user.fullName}
                    onChange={handleChange}
                    className="mb-2 text-xl font-bold"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    className="mb-2 text-gray-700"
                  />
                  <Input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={user.phoneNumber}
                    onChange={handleChange}
                    className="mb-2 text-gray-700"
                  />
                </>
              ) : (
                <>
                  <h1 className="mb-2 text-center text-xl font-bold">
                    {user.fullName}
                  </h1>
                  <p className="text-gray-700">
                    <MailOutlined className="mr-2" />
                    {user.email}
                  </p>
                  <p className="text-gray-700">
                    <PhoneOutlined className="mr-2" />
                    {user.phoneNumber}
                  </p>
                </>
              )}

              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {isEditingProfile ? (
                  <>
                    <button
                      onClick={handleSaveClick}
                      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleEditClick}
                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  >
                    Edit profile
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Nội dung bên phải */}
          <div className="col-span-4 sm:col-span-9">
            <div className="rounded-lg bg-white p-6 shadow">
              {user.role == "USER" ? (
                <>
                  <h2 className="mb-4 text-xl font-bold">Booking history</h2>

                  <Table
                    scroll={{ x: 800 }}
                    className="w-full"
                    columns={columns}
                  />
                </>
              ) : (
                <>
                  <div className="flex flex-row">
                    <Tabs defaultActiveKey="1">
                      <TabPane tab="Thông tin khách sạn" key="1">
                        <h2 className="mb-4 text-xl font-bold">Hình ảnh</h2>
                        <div className="mb-6 grid h-auto w-full grid-cols-4 gap-3">
                          {images.map((src, index) => (
                            <img
                              key={index}
                              className="col-span-1 row-span-1 h-full w-full rounded-lg object-cover"
                              src={src}
                              alt={`img${index}`}
                            />
                          ))}
                        </div>

                        {isEditingDescription && (
                          <div className="mb-6">
                            <Upload>
                              <Button icon={<UploadOutlined />}>
                                Tải ảnh lên
                              </Button>
                            </Upload>
                          </div>
                        )}

                        <h2 className="mb-4 text-xl font-bold">Giới thiệu</h2>
                        {isEditingDescription ? (
                          <Input.TextArea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            className="mb-6"
                          />
                        ) : (
                          <p className="mb-6 text-gray-700">{description}</p>
                        )}
                        <h2 className="mb-4 text-xl font-bold">Địa chỉ</h2>
                        {isEditingDescription ? (
                          <Input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        ) : (
                          <p className="mb-6 text-gray-700">
                            <EnvironmentFilled /> {address}
                          </p>
                        )}
                        <div className="mt-6 flex justify-center">
                          {isEditingDescription ? (
                            <>
                              <Button
                                type="primary"
                                className="mr-2"
                                onClick={handleSaveDesClick}
                              >
                                Lưu
                              </Button>
                              <Button onClick={handleCancelDesClick}>
                                Hủy
                              </Button>
                            </>
                          ) : (
                            <Button type="primary" onClick={handleEditDesClick}>
                              Chỉnh sửa
                            </Button>
                          )}
                        </div>
                      </TabPane>
                      <TabPane tab="Danh sách phòng" key="2">
                        <div className="mb-3 flex w-full items-center justify-between px-8">
                          <div className="flex-1"></div>{" "}
                          {/* giữ chỗ bên trái */}
                          <div className="flex flex-1 justify-center">
                            <Input
                              placeholder="Tên khách sạn"
                              className="w-full px-2 py-1"
                              suffix={
                                <div className="flex rounded-l px-2 py-1">
                                  <SearchOutlined className="transition-all duration-300" />
                                </div>
                              }
                            />
                          </div>
                          <div className="flex flex-1 justify-end">
                            <Button
                              type="primary"
                              className="ml-4"
                              onClick={showCreate}
                            >
                              Tạo phòng
                            </Button>
                          </div>
                        </div>

                        <Table
                          scroll={{ x: 800 }}
                          dataSource={[]}
                          columns={roomListColumns}
                        />
                      </TabPane>
                      <TabPane tab="Lịch sử đặt phòng" key="3">
                        <div className="flex justify-center">
                          <Input
                            placeholder="Tên khách sạn"
                            className="mb-3 w-[31%] px-2 py-1"
                            suffix={
                              <div className="flex rounded-l px-2 py-1">
                                <SearchOutlined className="transition-all duration-300" />
                              </div>
                            }
                          />
                        </div>

                        <Table
                          scroll={{ x: 800 }}
                          dataSource={[]}
                          columns={bookingHistoryColumns}
                        />
                      </TabPane>
                    </Tabs>

                    <Button className="flex justify-end" onClick={showRegist}>+</Button>
                  </div>

                  <CreateRoomModal
                    visible={modalCreate}
                    onCancel={cancelCreate}
                  ></CreateRoomModal>

                  <RegistHotelModal
                    visible={modalRegist}
                    onCancel={cancelRegist}
                  ></RegistHotelModal>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
