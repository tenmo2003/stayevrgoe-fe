import { Carousel } from 'antd';
import img from "../../assets/hinh8.jpg";
import img1 from "../../assets/hinh11.webp";
import img2 from "../../assets/hinh10.webp";
import img3 from "../../assets/hinh12.jpg";
import { useContext, useEffect } from "react";
import service from "../../service/service";
import UserContext from "../../contexts/UserContext";

import ks1 from "../../assets/ks1.webp";
function Home() {
  const { user, setUser } = useContext(UserContext);

  const onChange = (currentSlide: any) => {
    console.log(currentSlide);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="flex-col justify-center mb-12">
      <Carousel afterChange={onChange} className="mb-6">
        <div>
          <img className="h-[480px] w-[100%] object-fill" src={img} />
        </div>
        <div>
          <img className="h-[480px] w-[100%] object-fill" src={img2} />
        </div>
        <div>
          <img className="h-[480px] w-[100%] object-fill" src={img1} />
        </div>
        <div>
          <img className="h-[480px] w-[100%] object-fill" src={img3} />
        </div>
      </Carousel>
      <div className="flex justify-center">
        <div className="w-[90%] flex-col">
          <h1 className="mb-6 text-center text-2xl font-bold">
            Khách sạn tiêu biểu
          </h1>
          <div className="flex flex-row flex-wrap">
            <div className="w-full max-w-sm p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 ">
              <div className="rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <a href="/hoteldetail">
                  <img className="rounded-t-lg w-full h-[200px]" src={ks1} alt="" />
                </a>
                <div className="p-5">
                  <a href="/hoteldetail">
                    <h5 className="mb-2 font-bold tracking-tight text-black-900 dark:text-black">Khách sạn Palace SaiGon</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ...">Lưu trú tại Palace Hotel Saigon là một lựa chọn đúng đắn khi quý khách đến thăm Bến Nghé</p>
                  <p className="mb-3 font-medium  text-[#bb6060]">1.350.000VND</p>
                  <a href="/hoteldetail" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    tìm hiểu thêm
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-[#251c53] justify-end mb-8 underline ">Xem thêm </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
