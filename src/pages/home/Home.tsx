import { Carousel } from "antd";
import img from "../../assets/hinh8.jpg";
import img1 from "../../assets/hinh11.webp";
import img2 from "../../assets/hinh10.webp";
import img3 from "../../assets/hinh12.jpg";
import lotte from "../../assets/180712-4-2000-ove-hanoi-hotel.jpg.thumb.768.768.jpg";
import diamond from "../../assets/diamondwestlake.jpg"
import hiddencharm from "../../assets/hiddencharm.jpg"
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
    <div className="mb-12 flex-col justify-center">
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
          <div className="flex flex-wrap">
            <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
              <div className="rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <a href="/hoteldetail">
                  <img
                    className="h-[200px] w-full rounded-t-lg"
                    src={ks1}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="/hoteldetail">
                    <h5 className="text-black-900 mb-2 font-bold tracking-tight dark:text-black">
                      Khách sạn Palace SaiGon
                    </h5>
                  </a>
                  <p className="... mb-3 truncate font-normal text-gray-700 dark:text-gray-400">
                    Lưu trú tại Palace Hotel Saigon là một lựa chọn đúng đắn khi quý khách đến thăm Bến Nghé
                  </p>
                  <p className="mb-3 font-medium text-[#bb6060]">
                    1.350.000VND
                  </p>
                  <a
                    href="/hoteldetail"
                    className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    tìm hiểu thêm
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
              <div className="rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <a href="/hoteldetail">
                  <img
                    className="h-[200px] w-full rounded-t-lg"
                    src={lotte}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="/hoteldetail">
                    <h5 className="text-black-900 mb-2 font-bold tracking-tight dark:text-black">
                      Lotte Hotel Hà Nội
                    </h5>
                  </a>
                  <p className="... mb-3 truncate font-normal text-gray-700 dark:text-gray-400">
                    Toạ lạc tại góc cắt giữa hai phố Liễu Giai và Đào Tấn thuộc quận Ba Đình, KHÁCH SẠN LOTTE HÀ NỘI là sự kết nối và tổng hoà giữa khu phố cổ Hà Nội giàu truyền thống và khu đô thị mới đang ngày một phát triển với tương lai tươi sáng.
                  </p>
                  <p className="mb-3 font-medium text-[#bb6060]">
                    2.120.000VND
                  </p>
                  <a
                    href="/hoteldetail"
                    className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    tìm hiểu thêm
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
            <div className="rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <a href="/hoteldetail">
                  <img
                    className="h-[200px] w-full rounded-t-lg"
                    src={diamond}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="/hoteldetail">
                    <h5 className="text-black-900 mb-2 font-bold tracking-tight dark:text-black">
                        Diamond Westlake Suites
                    </h5>
                  </a>
                  <p className="... mb-3 truncate font-normal text-gray-700 dark:text-gray-400">
                    Diamond Westlake Suites Hà Nội được xem như là nét độc đáo riêng của các căn hộ nơi đây khi có vị trí tọa lạc vô cùng đắc địa thuộc khu bán đảo quận Tây Hồ, thành phố Hà Nội
                  </p>
                  <p className="mb-3 font-medium text-[#bb6060]">
                    1.960.000VND
                  </p>
                  <a
                    href="/hoteldetail"
                    className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    tìm hiểu thêm
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full p-2 sm:w-1/2 lg:w-1/4">
            <div className="rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <a href="/hoteldetail">
                  <img
                    className="h-[200px] w-full rounded-t-lg"
                    src={hiddencharm}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="/hoteldetail">
                    <h5 className="text-black-900 mb-2 font-bold tracking-tight dark:text-black">
                      Hidden Charm Ninh Bình
                    </h5>
                  </a>
                  <p className="... mb-3 truncate font-normal text-gray-700 dark:text-gray-400">
                  Nằm tại trung tâm của khu nghỉ dưỡng, Ninh Bình Hidden Charm Hotel & Resort sở hữu một hồ bơi vô cực view núi ngoài trời với thiết kế hiện đại, độc đáo
                  </p>
                  <p className="mb-3 font-medium text-[#bb6060]">
                    1.590.000VND
                  </p>
                  <a
                    href="/hoteldetail"
                    className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    tìm hiểu thêm
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="mb-8 flex justify-end text-[#251c53] underline ">
            Xem thêm{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
