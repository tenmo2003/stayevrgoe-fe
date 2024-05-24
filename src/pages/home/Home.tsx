import { Carousel } from 'antd';
import img from "../../assets/hinh5.jpg";
import img1 from "../../assets/hinh6.jpg";

function Home() {

  const onChange = (currentSlide: any) => {
    console.log(currentSlide);
  };

  return (
    <div className="flex-col justify-center">
      <Carousel afterChange={onChange} className="mb-6">
        <div>
          <img className="h-[480px] w-[100%] object-fill" src={img} />
        </div>
        <div>
          <img className="h-[480px] w-[100%] object-fill" src={img} />
        </div>
        <div>
          <img className="h-[480px] w-[100%] object-fill" src={img} />
        </div>
        <div>
          <img className="h-[480px] w-[100%] object-fill" src={img1} />
        </div>
      </Carousel>
      <div className='flex justify-center'>
        <div className="flex-col w-[90%]">
          <h1 className="text-2xl font-bold text-center mb-6">
            Khách sạn tiêu biểu
          </h1>
          <div className="flex flex-row flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="/hoteldetail">
                <img className="rounded-t-lg" src={img1} alt="" />
              </a>
              <div className="p-5">
                <a href="/hoteldetail">
                  <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="/hoteldetail" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
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
