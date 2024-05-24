import { Button } from "antd"
import { EnvironmentFilled } from "@ant-design/icons";
import img from "../assets/hinh5.jpg";
import { DatePicker, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';


export default function HotelDetail() {
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
                <h1 className="font-bold text-2xl mt-7">Moon Hotel</h1>
                <div className="flex justify-between mb-10">
                    <div>
                        <h1>Moon Hotel</h1>
                        <h1 className="text-[#8c6b40] font-medium">Khách sạn 4 sao</h1>
                        <p className="mb-2 font-normal text-gray-700 dark:text-gray-600 mt-6">
                            <EnvironmentFilled /> 54/34 Bạch Đằng, Phường 2, Quận Tân Bình, Thành phố Hồ Chí Minh, Việt Nam, 700000
                        </p>
                    </div>
                    <div className="ml-auto text-right">
                        <h1>Giá/phòng/đêm/từ</h1>
                        <h1 className="font-bold text-2xl text-[#bb6060]">499.279 VND</h1>
                        <Button type="primary" className="bg-[#d65b0f] w-[240px] mt-3 text-xl h-[40px]" onClick={scrollToEmptyRooms}> Chọn phòng</Button>
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full h-[400px] mb-6">
                    <img className="rounded-lg col-span-2 row-span-3 object-cover w-full h-full" src={img} alt="img1" />
                    <img className="rounded-lg col-span-1 row-span-1 object-cover w-full h-full" src={img} alt="img2" />
                    <img className="rounded-lg col-span-1 row-span-1 object-cover w-full h-full" src={img} alt="img3" />
                    <img className="rounded-lg col-span-1 row-span-1 object-cover w-full h-full" src={img} alt="img3" />
                </div>
                <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-6">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Giới thiệu</h5>
                    <p className="font-normal text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
                <h1 id="emptyRooms" className="font-bold text-xl mb-6">Những phòng còn trống tại Moon Hotel</h1>
                <Space direction="vertical" size={12} className="flex-row">
                    <RangePicker className="w-[70vw]"/>
                    <Button type="primary" icon={<SearchOutlined />} className="w-[8vw]">Tìm kiếm</Button>
                </Space>

                <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow my-6">
                    <h1 className="font-bold text-xl mb-3 ml-2">Superior Double</h1>
                    <div className="grid grid-cols-4 grid-rows-1 gap-4">
                        <div className="row-span-1 col-span-1">
                            <div className="flex-col">
                                <img className="rounded-lg object-cover w-full h-full" src={img} alt="img1" />
                                <div className="grid grid-cols-2 grid-row-1 mt-3">
                                    <p className="col-span-2 row-span-1">Diện tích 300m2</p>
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
                                            <p className="px-6 py-4 font-medium text-black text-xs">Không gồm bữa sáng</p>
                                            <p className="px-6 pb-4 font-medium text-[#38a638] text-xs">Miễn phí hủy đổi trả</p>
                                        </th>
                                        <td className="px-6 py-4">2 người</td>
                                        <td className="font-bold px-6 py-4 text-l text-[#bb6060]">499.279 VND</td>
                                        <td>
                                            <Button type="primary" className="bg-[#d65b0f] w-[120px] mt-3 text-base font-bold h-[40px] flex items-center justify-center text-center" href="/payment">Chọn</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-6">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-black">Những review khác của du khách về My Villa Airport Hotel </h5>
                    <p className="font-normal text-black mb-5">Xếp hạng & điểm đánh giá chung</p>
                    <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-6">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-black">Những review khác của du khách về My Villa Airport Hotel </h5>
                        <p className="font-normal text-black">Xếp hạng & điểm đánh giá chung</p>
                    </div>
                </div>





            </div>
        </div>
    )
}