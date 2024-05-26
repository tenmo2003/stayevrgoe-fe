import { Button } from "antd"
import { EnvironmentFilled } from "@ant-design/icons";
import img from "../assets/hinh5.jpg";
import React, { useState } from 'react';
import { DatePicker, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import ks1 from "../assets/ks1.webp";
import ks2 from "../assets/ks2.webp";
import ks3 from "../assets/ks3.webp";
import ks4 from "../assets/ks4.webp";
import room1 from "../assets/room1.webp";
import room2 from "../assets/room2.webp";
import rate1 from "../assets/rate1.webp";
import user from "../assets/user.png";
import twin from "../assets/twin.webp"


export default function HotelDetail() {
    const [visible, setVisible] = useState(true);
    const handleSearch = () => {
        setVisible(false);
        setTimeout(() => {
            setVisible(true);
        }, 1000); // Hide for 1 second
    };
    const { RangePicker } = DatePicker;
    const scrollToEmptyRooms = () => {
        const emptyRoomsSection = document.getElementById('emptyRooms');
        if (emptyRoomsSection) {
            emptyRoomsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='flex justify-center'>
            <div className="flex-col w-[80%]">
                <h1 className="font-bold text-2xl mt-7">Khách sạn Palace Saigon</h1>
                <div className="flex justify-between mb-10">
                    <div>
                        <h1>Palace Hotel Saigon</h1>
                        <h1 className="text-[#8c6b40] font-medium">Khách sạn 4 sao</h1>
                        <p className="mb-2 font-normal text-gray-700 dark:text-gray-600 mt-6">
                            <EnvironmentFilled /> 56 - 66 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam, 700000

                        </p>
                    </div>
                    <div className="ml-auto text-right">
                        <h1>Giá/phòng/đêm/từ</h1>
                        <h1 className="font-bold text-2xl text-[#bb6060]">1.349.206 VND</h1>
                        <Button type="primary" className="bg-[#d65b0f] w-[240px] mt-3 text-xl h-[40px]" onClick={scrollToEmptyRooms}> Chọn phòng</Button>
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full h-[400px] mb-6">
                    <img className="rounded-lg col-span-2 row-span-3 object-cover w-full h-full" src={ks1} alt="ks1" />
                    <img className="rounded-lg col-span-1 row-span-1 object-cover w-full h-full" src={ks2} alt="img2" />
                    <img className="rounded-lg col-span-1 row-span-1 object-cover w-full h-full" src={ks3} alt="img3" />
                    <img className="rounded-lg col-span-1 row-span-1 object-cover w-full h-full" src={ks4} alt="img3" />
                </div>
                <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-6">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Giới thiệu</h5>
                    <p className="font-normal text-black">Lưu trú tại Palace Hotel Saigon là một lựa chọn đúng đắn khi quý khách đến thăm Bến Nghé.<br></br>Hãy sẵn sàng đón nhận trải nghiệm khó quên bằng dịch vụ độc đáo và hoàn hảo của khách sạn cùng các tiện nghi đầy đủ, đáp ứng mọi nhu cầu của quý khách.

                        Trung tâm thể dục của khách sạn là một trong những tiện nghi không thể bỏ qua khi lưu trú tại đây.

                        Hưởng thụ một ngày thư thái đầy thú vị tại hồ bơi dù quý khách đang du lịch một mình hay cùng người thân.

                        Quầy tiếp tân 24 giờ luôn sẵn sàng phục vụ quý khách từ thủ tục nhận phòng đến trả phòng hay bất kỳ yêu cầu nào. Nếu cần giúp đỡ xin hãy liên hệ đội ngũ tiếp tân, chúng tôi luôn sẵn sàng hỗ trợ quý khách.

                    </p>
                </div>
                <h1 id="emptyRooms" className="font-bold text-xl mb-6">Những phòng còn trống tại Moon Hotel</h1>
                <Space direction="vertical" size={12} className="flex-row">
                    <RangePicker className="w-[70vw]" />
                    <Button type="primary" icon={<SearchOutlined />} className="w-[8vw]" onClick={handleSearch}>Tìm kiếm</Button>
                </Space>
                {visible && (
                    <>
                        <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow my-6">
                            <h1 className="font-bold text-xl mb-3 ml-2">Superior Double</h1>
                            <div className="grid grid-cols-4 grid-rows-1 gap-4">
                                <div className="row-span-1 col-span-1">
                                    <div className="flex-col">
                                        <img className="rounded-lg object-cover w-full h-full" src={room1} alt="img1" />
                                        <div className="grid grid-cols-2 grid-row-1 mt-3">
                                            <p className="col-span-2 row-span-1">Diện tích 17m2</p>
                                            <p>Vòi tắm đứng</p>
                                            <p>Máy lạnh</p>
                                            <p>Nước nóng</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-span-3 row-span-2 overflow-x-auto relative sm:rounded-lg">
                                    <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400 rounded-lg">
                                        <thead className="text-xs text-black uppercase bg-white">
                                            <tr className="bg-gray-100">
                                                <th scope="col" className="px-6 py-4">Lựa chọn phòng</th>
                                                <th scope="col" className="px-6 py-4">Khách</th>
                                                <th scope="col" className="px-6 py-4">Giá/Phòng/Đêm</th>
                                                <th scope="col" className="px-6 py-4"></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr className="hover:bg-gray-200">
                                                <th scope="row" className="flex-col">
                                                    <p className="px-6 pt-4 font-medium text-gray text-xs">Superior Double - Room Only</p>
                                                    <p className="px-6 py-4 font-medium text-black text-xs">Gồm bữa sáng</p>
                                                    <p className="px-6 pb-4 font-medium text-[#38a638] text-xs">Miễn phí hủy đổi trả</p>
                                                </th>
                                                <td className="px-6 py-4">2 người</td>
                                                <td className="font-bold px-6 py-4 text-l text-[#bb6060]">1.349.206 VND</td>
                                                <td>
                                                    <Button type="primary" className="bg-[#d65b0f] w-[120px] mt-3 text-base font-bold h-[40px] flex items-center justify-center text-center" href="/payment">Chọn</Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>


                        {/* từ đây là bỏ */}

                    

                        <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow my-6">
                            <h1 className="font-bold text-xl mb-3 ml-2">Deluxe Double - Single View</h1>
                            <div className="grid grid-cols-4 grid-rows-1 gap-4">
                                <div className="row-span-1 col-span-1">
                                    <div className="flex-col">
                                        <img className="rounded-lg object-cover w-full h-full" src={room2} alt="img1" />
                                        <div className="grid grid-cols-2 grid-row-1 mt-3">
                                            <p className="col-span-2 row-span-1">Diện tích 26m2</p>
                                            <p>Vòi hoa sen</p>
                                            <p>Máy pha trà</p>
                                            <p>Có ti vi</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-span-3 row-span-2 overflow-x-auto relative sm:rounded-lg">
                                    <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400 rounded-lg">
                                        <thead className="text-xs text-black uppercase bg-white">
                                            <tr className="bg-gray-100">
                                                <th scope="col" className="px-6 py-4">Lựa chọn phòng</th>
                                                <th scope="col" className="px-6 py-4">Khách</th>
                                                <th scope="col" className="px-6 py-4">Giá/Phòng/Đêm</th>
                                                <th scope="col" className="px-6 py-4"></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr className="hover:bg-gray-200">
                                                <th scope="row" className="flex-col">
                                                    <p className="px-6 pt-4 font-medium text-gray text-xs">Deluxe Double - Single View</p>
                                                    <p className="px-6 py-4 font-medium text-black text-xs">Gồm bữa sáng</p>
                                                    <p className="px-6 pb-4 font-medium text-[#38a638] text-xs">Miễn phí hủy đổi trả</p>
                                                </th>
                                                <td className="px-6 py-4">2 người</td>
                                                <td className="font-bold px-6 py-4 text-l text-[#bb6060]">3.130.511 VND</td>
                                                <td>
                                                    <Button type="primary" className="bg-[#d65b0f] w-[120px] mt-3 text-base font-bold h-[40px] flex items-center justify-center text-center" href="/payment">Chọn</Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow my-6">
                            <h1 className="font-bold text-xl mb-3 ml-2">Twin Deluxe View</h1>
                            <div className="grid grid-cols-4 grid-rows-1 gap-4">
                                <div className="row-span-1 col-span-1">
                                    <div className="flex-col">
                                        <img className="rounded-lg object-cover w-full h-full" src={twin} alt="img1" />
                                        <div className="grid grid-cols-2 grid-row-1 mt-3">
                                            <p className="col-span-2 row-span-1">Diện tích 26m2</p>
                                            <p>Vòi hoa sen</p>
                                            <p>Cách âm</p>
                                            <p>Có ti vi</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-span-3 row-span-2 overflow-x-auto relative sm:rounded-lg">
                                    <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400 rounded-lg">
                                        <thead className="text-xs text-black uppercase bg-white">
                                            <tr className="bg-gray-100">
                                                <th scope="col" className="px-6 py-4">Lựa chọn phòng</th>
                                                <th scope="col" className="px-6 py-4">Khách</th>
                                                <th scope="col" className="px-6 py-4">Giá/Phòng/Đêm</th>
                                                <th scope="col" className="px-6 py-4"></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr className="hover:bg-gray-200">
                                                <th scope="row" className="flex-col">
                                                    <p className="px-6 pt-4 font-medium text-gray text-xs">Twin Deluxe View</p>
                                                    <p className="px-6 py-4 font-medium text-black text-xs">Gồm bữa sáng</p>
                                                    <p className="px-6 pb-4 font-medium text-[#38a638] text-xs">Miễn phí hủy đổi trả</p>
                                                </th>
                                                <td className="px-6 py-4">2 người</td>
                                                <td className="font-bold px-6 py-4 text-l text-[#bb6060]">1.567.460 VND</td>
                                                <td>
                                                    <Button type="primary" className="bg-[#d65b0f] w-[120px] mt-3 text-base font-bold h-[40px] flex items-center justify-center text-center" href="/payment">Chọn</Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* từ đây là bỏ */}
                    </>
                )}
                <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-6 mt-10">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-black">Những review khác của du khách về My Villa Airport Hotel </h5>
                    <p className="font-normal text-black mb-5">Xếp hạng & điểm đánh giá chung</p>
                    <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-6">
                        <div className="grid grid-cols-4 grid-rows-1">
                            <div className="col-span-1 row-span-1 flex flex-row">
                                <img className="rounded-full object-cover w-[50px] h-[50px]" src={user} alt="img1" />
                                <p className="px-3 pt-4 font-medium text-gray text-sm">Ngoc Minh</p>
                            </div>
                            <div className="col-span-3 row-span-1">
                                <div className="flex justify-between">
                                    <div className="w-[60px] bg-blue-200 rounded-full flex items-center justify-center">
                                        <p>9/10</p>
                                    </div>
                                    <p className="text-base text-gray-700 dark:text-gray-600">24 May 2024</p>
                                </div>

                                <p>Khách sạn sạch sẽ, tuyệt vời. Nhân viên thân thiện</p>
                                <div className="flex flex-row gap-4 mt-2">
                                    <img className="rounded-lg object-cover w-[100px] h-[100px]" src={rate1} alt="img1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}