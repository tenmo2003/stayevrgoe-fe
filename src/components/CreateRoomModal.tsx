import React, { useState } from "react";
import { Modal, Input, Button, Upload, Form, Checkbox } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import service from "../service/service";

const { TextArea } = Input;

const CreateRoomModal = ({ visible, onCancel, hotel }:any) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const handleUploadChange = (info) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-1);
    setFileList(newFileList);
  };

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("hotelId", hotel);
    formData.append("description", values.description);

    if (fileList && fileList.length > 0) {
      fileList.forEach((file):any => {
        formData.append("images", file.originFileObj);
      });
    }

    const facilitiesList = values.facilities.join(",");
    formData.append("facilities", facilitiesList);

    // Chuyển đổi các giá trị thành số
    formData.append("priceInUSD", parseFloat(values.priceInUSD));
    formData.append("capacity", parseInt(values.capacity, 10));
    formData.append("area", parseFloat(values.area));

    try {
      const response = await service.post("/hotel/room", formData);
      toast.success("Tạo phòng thành công");
      console.log("Server response:", response.data);
    } catch (error) {
      toast.error("Tạo phòng thất bại");
      console.error("Error:", error);
    }
  };

  return (
    <Modal visible={visible} onCancel={onCancel} footer={null}>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h1 className="flex justify-center text-xl font-bold text-gray-900 md:text-2xl">
            Tạo phòng mới
          </h1>
          <Form form={form} onFinish={onFinish}>
            <div className="mt-4 flex flex-col">
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
                  multiple
                >
                  <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
                </Upload>
              </Form.Item>

              <p>Cơ sở vật chất</p>
              <Form.Item name="facilities">
                <Checkbox.Group>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div className="grid grid-cols-1 gap-y-3">
                      <Checkbox value="BEACH_VIEW">Hướng nhìn ra biển</Checkbox>
                      <Checkbox value="BALCONY">Có ban công</Checkbox>
                      <Checkbox value="BREAKFAST">Bữa sáng</Checkbox>
                      <Checkbox value="BATHTUB">Bồn tắm</Checkbox>
                      <Checkbox value="TELEVISION">Có ti vi</Checkbox>
                      <Checkbox value="COFFEE_TEA_MAKER">Máy pha trà/cafe</Checkbox>
                    </div>

                    <div className="grid grid-cols-1 gap-y-3">
                      <Checkbox value="SHOWER">Vòi hoa sen</Checkbox>
                      <Checkbox value="HAIR_DRYER">Máy sấy</Checkbox>
                      <Checkbox value="TOILETRIES">Đồ vệ sinh cá nhân</Checkbox>
                      <Checkbox value="SOUND_PROOF">Cách âm</Checkbox>
                      <Checkbox value="SINGLE_ROOM">Phòng đơn</Checkbox>
                      <Checkbox value="DOUBLE_ROOM">Phòng đôi</Checkbox>
                    </div>
                  </div>
                </Checkbox.Group>
              </Form.Item>

              <p>Giá</p>
              <Form.Item
                name="priceInUSD"
                rules={[
                  { required: true, message: "Vui lòng nhập giá phòng" },
                ]}
              >
                <Input size="large" placeholder="Giá" suffix="VND/ngày"/>
              </Form.Item>

              <p>Sức chứa</p>
              <Form.Item
                name="capacity"
                rules={[
                  { required: true, message: "Vui lòng nhập sức chứa" },
                ]}
              >
                <Input size="large" placeholder="Sức chứa" suffix="người"/>
              </Form.Item>

              <p>Diện tích</p>
              <Form.Item
                name="area"
                rules={[
                  { required: true, message: "Vui lòng nhập diện tích" },
                ]}
              >
                <Input size="large" placeholder="Diện tích" suffix="m2"/>
              </Form.Item>
            </div>
            <div className="mt-4 flex flex-row justify-center">
              <Button
                type="primary"
                className="mb-3"
                htmlType="submit"
                onClick={onCancel}
              >
                Tạo phòng
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default CreateRoomModal;
