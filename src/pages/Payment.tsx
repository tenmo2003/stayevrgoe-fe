import { Input } from "antd"
import { Button } from "antd"
export default function Payment() {
    return (
        <div className='flex justify-center'>
            <div className="flex-col w-[80%]">
                <h1 className="font-bold text-2xl mt-7 mb-4">Đặt phòng của bạn</h1>
                <h1 className="font-medium text-basic text-[gray] mb-7">Hãy đảm bảo tất cả thông tin chi tiết trên trang này đã chính xác trước khi tiến hành thanh toán.</h1>
                <div className="block max-w-[60%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-6">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-black">Thông tin liên hệ đặt phòng</h5>
                    <p className="font-normal text-gray-500 mb-5">Hãy điền chính xác và đầy đủ tất cả thông tin để đảm bảo bạn nhận được Phiếu xác nhận  đặt phòng (E-voucher) qua email của mình.</p>
                    <p>Họ và tên*</p>
                    <Input size="large" placeholder="" className='mb-6' />
                    <p>Số điện thoại*</p>
                    <Input size="large" placeholder="" className='mb-6' />
                    <p>Email*</p>
                    <Input size="large" placeholder="email@gmail.com" className='mb-6' />
                </div>
                <div className="block max-w-[60%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-6">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-black">Chi tiết giá</h5>
                    <div className="flex justify-between mb-2">
                        <p className="font-medium">Thanh toán tại khách sạn</p>
                        <p className="text-[#9c546a] font-medium ">499.279 VND</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="text-[#549c68] font-medium">Phí dịch vụ của stayevgoe</p>
                        <p className="text-[#549c68] font-medium ">MIỄN PHÍ</p>
                    </div>
                </div>
                <div className="flex justify-end max-w-[60%]">
                    <Button type="primary" className="bg-[#d65b0f] w-[240px] mt-3 text-lg h-[40px] mb-6 justify-end" >Đặt chỗ</Button>
                </div>
            </div>
        </div>
    )
}