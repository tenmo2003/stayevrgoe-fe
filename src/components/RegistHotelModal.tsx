import React, { useState } from "react";
import { Modal, Input, Button, Upload, Checkbox, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import service from "../service/service";
import { toast } from "sonner";

const { TextArea } = Input;

const RegistHotelModal = ({ visible, onCancel }: any) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const handleUploadChange = (info) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-4);
    setFileList(newFileList);
  };

  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append("name", values.hotelName);
    formData.append("location", values.location); 
    formData.append("description", values.description);

    if (fileList && fileList.length > 0) {
      fileList.forEach((file: any) => {
        formData.append("images", file.originFileObj);
      });
    }

    const facilitiesList = values.facilities.join(",");
    formData.append("facilities", facilitiesList);

    try {
      const response = await service.post("/hotel/register", formData);
      toast.success("Đăng ký thành công");
      console.log("Server response:", response.data);
    } catch (error) {
      toast.error("Đăng ký thất bại");
      console.error("Error:", error);
    }
  };

  return (
    <Modal visible={visible} onCancel={onCancel} footer={null}>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h1 className="flex justify-center text-xl font-bold text-gray-900 md:text-2xl">
            Đăng ký khách sạn
          </h1>
          <Form form={form} onFinish={onFinish}>
            <div className="mt-4 flex flex-col">
              <p>Tên khách sạn</p>
              <Form.Item
                name="hotelName"
                rules={[
                  { required: true, message: "Vui lòng nhập tên khách sạn" },
                ]}
              >
                <Input size="large" placeholder="Tên khách sạn" />
              </Form.Item>

              <p>Địa chỉ</p>
              <Form.Item
                name="location"
                rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
              >
                <Input size="large" placeholder="Địa chỉ" />
              </Form.Item>

              <p>Mô tả</p>
              <Form.Item name="description">
                <TextArea
                  placeholder="Mô tả"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Form.Item>

              <p>Hình ảnh</p>
              <Form.Item name="images">
                <Upload
                  fileList={fileList}
                  onChange={handleUploadChange}
                  beforeUpload={() => false}
                  multiple={true}
                >
                  <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
                </Upload>
              </Form.Item>

              <p>Cơ sở vật chất </p>
              <Form.Item name="facilities">
                <Checkbox.Group>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div className="grid grid-cols-1 gap-y-3">
                      <Checkbox value="WIFI">Wifi</Checkbox>
                      <Checkbox value="SWIMMING_POOL">Bể bơi</Checkbox>
                      <Checkbox value="PARKING">Bãi đỗ xe </Checkbox>
                      <Checkbox value="RESTAURANT">Nhà hàng</Checkbox>
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
              </Form.Item>
            </div>
            <div className="mt-4 flex flex-row justify-center">
              <Button type="primary" className="mb-3" htmlType="submit" onClick={onCancel}>
                Đăng ký khách sạn
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default RegistHotelModal;
