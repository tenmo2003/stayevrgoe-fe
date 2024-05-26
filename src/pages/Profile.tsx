import React, { useContext, useEffect, useState } from "react";
import { Table, Input, Tabs, Button, Upload, Form, Checkbox } from "antd";
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
import RegistHotelModal from "../components/RegistHotelModal";
import UserContext from "../contexts/UserContext";
import service from "../service/service";
import { toast } from "sonner";

const { TabPane } = Tabs;

export default function Profile() {
  const { user, setUser } = useContext(UserContext);

  const [form] = Form.useForm();
  const [hotelForm] = Form.useForm();

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const [hotelName, setHotelName] = useState("Khách sạn");
  const [description, setDescription] = useState("Chưa có khách sạn");
  const [location, setLocation] = useState("Chưa có khách sạn");
  const [images, setImages] = useState([img, img, img, img]);
  const [facilities, setFacilities] = useState(["WIFI"]);

  const [modalCreate, setModalCreate] = useState(false);
  const [modalRegist, setModalRegist] = useState(false);

  useEffect(() => {
    console.log(user);

    if (user && user.workingHotelId) {
      service
        .get(`/hotels/${user.workingHotelId}`)
        .then((res) => {
          setHotelName(res.data.data.name);
          setLocation(res.data.data.location);
          setDescription(res.data.data.description);
          setImages(res.data.data.imagesURLs);
          setFacilities(res.data.data.facilities);

          hotelForm.setFieldsValue({
            name: res.data.data.name,
            description: res.data.data.description,
            location: res.data.data.location,
            facilities: res.data.data.facilities,
          });
        })
        .catch((e) => {
          toast("Lỗi tải thông tin khách sạn");
        });

      service
        .get(`/hotels/${user.workingHotelId}/rooms`, {
          params: {
            hotelId: user.workingHotelId,
            minPrice: 100000,
            maxPrice: 10000000,
            facilities: facilities,
            page: 0,
            limit: 999,
          },
        })
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((e) => {
          toast("Lỗi tải phòng khách sạn");
        });
    }
  }, [user]);

  const showCreate = () => {
    setModalCreate(true);
  };

  const cancelCreate = () => {
    setModalCreate(false);
  };

  const cancelRegist = () => {
    setModalRegist(false);
  };

  const handleEditClick = () => {
    setIsEditingProfile(true);
  };

  const handleCancelClick = () => {
    setIsEditingProfile(false);
  };

  const handleEditDesClick = () => {
    setIsEditingDescription(true);
  };

  const handleCancelDesClick = () => {
    setIsEditingDescription(false);
  };

  const showRegist = () => {
    setModalRegist(true);
  };

  const editUserProfile = () => {
    const { fullName, email, phoneNumber } = form.getFieldsValue();
    setIsEditingProfile(false);
    service
      .patch("/users/me", {
        fullName,
        email,
        phoneNumber,
      })
      .then((res) => {
        toast("Sửa thông tin thành công");
        setUser({
          fullName,
          email,
          phoneNumber,
        });
      })
      .catch((err) => {
        toast("Sửa thông tin thất bại");
      });
  };

  const editHotelDes = () => {
    const { name, location, description, facilities } =
      hotelForm.getFieldsValue();
    setIsEditingDescription(false);
    service
      .patch("/hotel", {
        id: user.workingHotelId,
        name,
        location,
        description,
        facilities,
      })
      .then((res) => {
        toast("Sửa thông tin khách sạn thành công");
        setHotelName(name);
        setDescription(description);
        setLocation(location);
        setFacilities(facilities);
      })
      .catch((err) => {
        toast("Sửa thông tin khách sạn thất bại");
      });
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
                <Form
                  form={form}
                  initialValues={{
                    fullName: user.fullName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                  }}
                  onFinish={editUserProfile}
                >
                  <Form.Item
                    name="fullName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your full name!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Full name"
                      disabled={!isEditingProfile}
                      className="mb-2 text-xl font-bold"
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your full name!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="email"
                      disabled={!isEditingProfile}
                      className="text-l mb-2"
                    />
                  </Form.Item>
                  <Form.Item
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your full name!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Phone number"
                      disabled={!isEditingProfile}
                      className="text-l mb-2"
                    />
                  </Form.Item>
                </Form>
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
                      onClick={editUserProfile}
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
                        <Form
                          form={hotelForm}
                          initialValues={{
                            name: hotelName,
                            location: location,
                            description: description,
                            facilities: facilities,
                          }}
                          onFinish={editHotelDes}
                        >
                          <Form.Item
                            name="name"
                            rules={[
                              {
                                required: true,
                                message: "Please input description!",
                              },
                            ]}
                          >
                            {isEditingDescription ? (
                              <Input className="my-2 text-2xl font-bold" />
                            ) : (
                              <h1 className="mb-4 text-3xl font-bold">
                                {hotelName}
                              </h1>
                            )}
                          </Form.Item>

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

                          <h2 className="mb-4 text-xl font-bold">Giới thiệu</h2>
                          <Form.Item
                            name="description"
                            rules={[
                              {
                                required: true,
                                message: "Please input description!",
                              },
                            ]}
                          >
                            {isEditingDescription ? (
                              <Input.TextArea rows={4} />
                            ) : (
                              <p className="mb-6 text-gray-700">
                                {description}
                              </p>
                            )}
                          </Form.Item>

                          <h2 className="mb-4 text-xl font-bold">Địa chỉ</h2>
                          <Form.Item
                            name="location"
                            rules={[
                              {
                                required: true,
                                message: "Please input description!",
                              },
                            ]}
                          >
                            {isEditingDescription ? (
                              <Input />
                            ) : (
                              <p className="mb-6 text-gray-700">{location}</p>
                            )}
                          </Form.Item>

                          <h2 className="mb-4 text-xl font-bold">
                            Cơ sở vật chất
                          </h2>
                          <Form.Item
                            name="facilities"
                            rules={[
                              {
                                required: true,
                                message: "Please input description!",
                              },
                            ]}
                          >
                            {isEditingDescription ? (
                              <Checkbox.Group>
                                <div className="grid grid-cols-2 gap-x-4">
                                  <div className="grid grid-cols-1 gap-y-3">
                                    <Checkbox value="WIFI">Wifi</Checkbox>
                                    <Checkbox value="SWIMMING_POOL">
                                      Bể bơi
                                    </Checkbox>
                                    <Checkbox value="PARKING">
                                      Bãi đỗ xe{" "}
                                    </Checkbox>
                                    <Checkbox value="RESTAURANT">
                                      Nhà hàng
                                    </Checkbox>
                                  </div>

                                  <div className="grid grid-cols-1 gap-y-3">
                                    <Checkbox value="AIRPORT_TRANSFER">
                                      Đón từ sân bay
                                    </Checkbox>
                                    <Checkbox value="LAUNDRY">Giặt ủi</Checkbox>
                                    <Checkbox value="FULL_DAY_FRONT_DESK">
                                      Lễ tân 24/24{" "}
                                    </Checkbox>
                                    <Checkbox value="AIR_CONDITIONING">
                                      Điều hoà không khí
                                    </Checkbox>
                                  </div>
                                </div>
                              </Checkbox.Group>
                            ) : (
                              <p className="mb-6 text-gray-700">
                                {facilities.map((facility, index) => (
                                  <span key={index}>
                                    {facility}
                                    {index !== facilities.length - 1 && ", "}
                                  </span>
                                ))}
                              </p>
                            )}
                          </Form.Item>
                        </Form>

                        <div className="mt-6 flex justify-center">
                          {isEditingDescription ? (
                            <>
                              <Button
                                type="primary"
                                className="mr-2"
                                onClick={editHotelDes}
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
                          scroll={{ x: 840 }}
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
                          scroll={{ x: 840 }}
                          dataSource={[]}
                          columns={bookingHistoryColumns}
                        />
                      </TabPane>
                    </Tabs>

                    <Button
                      className="absolute right-[13%]"
                      onClick={showRegist}
                    >
                      +
                    </Button>
                  </div>

                  <CreateRoomModal
                    visible={modalCreate}
                    onCancel={cancelCreate}
                    hotel={user.workingHotelId}
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
