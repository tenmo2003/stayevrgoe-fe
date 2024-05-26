import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from "@headlessui/react";
import React, { useState } from 'react';
import { PlusOutlined, FilterFilled, EnvironmentFilled, MoneyCollectFilled, StarFilled } from '@ant-design/icons'
import ava from "../assets/ava.png"
import { Button } from 'antd'
import UserContext from "../contexts/UserContext";
import { useContext, useEffect } from "react";
// import { toast } from "sonner";
import service from "../service/service";
import ks1 from "../assets/ks1.webp"
import lotte from "../assets/180712-4-2000-ove-hanoi-hotel.jpg.thumb.768.768.jpg";
import diamond from "../assets/diamondwestlake.jpg"
import hiddencharm from "../assets/hiddencharm.jpg"
import muongthanh from "../assets/muongthanh.jpg"
import mulne from "../assets/mulne.webp"
import sapa from "../assets/spa.webp"
import vungtau from "../assets/vungtau.webp"
import nol from "../assets/nol.webp"
import dalat from "../assets/dalat.webp"
import col from "../assets/col.webp"
import gol from "../assets/golf.webp"

export default function HotelList() {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        console.log(user);

        service
            .get(`/hotels`, {
                param: {
                    minPrice: 100000,
                    maxPrice: 10000000,
                    page: 0,
                    limit: 999
                }
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((e) => {
                // toast("Lỗi tải khách sạn");
            })
    }, [user]);

    const sortOptions = [
        { name: "Most Popular", href: "#", current: true },
        { name: "Best Rating", href: "#", current: false },
        { name: "Newest", href: "#", current: false },
        { name: "Price: Low to High", href: "#", current: false },
        { name: "Price: High to Low", href: "#", current: false },
    ];

    const filters = [
        {
            id: "province",
            name: "Tỉnh thành",
            options: [
                { value: "hanoi", label: "Hà Nội", checked: false },
                { value: "ninhbinh", label: "Ninh Bình", checked: false },
                { value: "thanhhoa", label: "Thanh Hoá", checked: false },
                { value: "hochiminh", label: "TP Hồ Chí Minh", checked: false },
                { value: "phanthiet", label: "Phan Thiết", checked: false },
                { value: "vungtau", label: "Vũng Tàu", checked: false },
                { value: "phuquoc", label: "Phú Quốc", checked: false },
                { value: "dalat", label: "Đà Lạt", checked: false },
            ],
        },
        {
            id: "khoanggia",
            name: "Khoảng giá",
            options: [
                { value: "1", label: "0 - 1tr", checked: false },
                { value: "2", label: "1tr - 2tr", checked: false },
                { value: "3", label: "2tr - 3tr", checked: false },
                { value: "4", label: "3tr - 4tr", checked: false },
                { value: "5", label: "4tr - 5tr", checked: false },
            ],
        },
    ];

    const hotels = [
        {
            image: ks1,
            name: 'Khách sạn Palace SaiGon',
            address: '56 - 66 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam, 700000',
            price: '1.190.476'
        },
        {
            image: lotte,
            name: 'Lotte Hotel Hà Nội',
            address: '54 P. Liễu Giai, Cống Vị, Ba Đình, Hà Nội 100000',
            price: '2.120.476'
        },
        {
            image: diamond,
            name: 'Diamond Westlake Suite',
            address: '96 Đ. Tô Ngọc Vân, Quảng An, Tây Hồ, Hà Nội',
            price: '1.960.000'
        },
        {
            image: hiddencharm,
            name: 'Hidden Charm Ninh Bình',
            address: 'No 9, Tam Coc - Bich Dong Tourist Center, Hoa Lư, Ninh Bình',
            price: '1.590.000'
        },
        {
            image: muongthanh,
            name: 'Khách sạn Mường Thanh',
            address: 'Số 8A Mạc Đĩnh Chi, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam, 700000',
            price: '1.435.714'
        },
        {
            image: mulne,
            name: "Mulne Bay Resort",
            address: "Khu Phố 14, Phường Mũi Né, Phường Mũi Né, Phan Thiết, Bình Thuận, Việt Nam, 801117",
            price: '1.309.524'
        },
        {
            image: sapa,
            name: "Amarin Resort & Spa Phu Quoc",
            address: 'Cửa Lập Hamlet, Trần Hưng Đạo, Dương Đông, Kiên Giang, Thị trấn Dương Đông, Phú Quốc, Tỉnh Kiên Giang, Việt Nam, 920000',
            price: '1.022.222'
        },
        {
            image: vungtau,
            name: "Khách sạn Imperial Vũng Tàu",
            address: "159 Thùy Vân, Thắng Tam, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu, Việt Nam, 793918",
            price: "2.366.400"
        },
        {
            image: nol,
            name: "Nolis Hotel Vũng Tàu",
            address: "19 Thùy Vân, Phường 2, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu, Việt Nam, 791015",
            price: "686.654"
        },
        {
            image: dalat,
            name: "Terracotta Hotel & Resort Đà Lạt",
            address: "Phân khu chức năng 7.9, KDL hồ Tuyền Lâm, Phường 3, Đà Lạt, Tỉnh Lâm Đồng, Việt Nam, 670000",
            price: "1.542.593"
        },
        {
            image: col,
            name: "Hotel Colline Dalat",
            address: "10 Phan Bội Châu, Phường 1, Đà Lạt, Tỉnh Lâm Đồng, Việt Nam, 670000",
            price: "1.752.096"
        },
        {
            image: gol,
            name: "Golf Valley Hotel",
            address: "94 Bùi Thị Xuân, Phường 2, Đà Lạt, Tỉnh Lâm Đồng, Việt Nam, 670000",
            price: "1.579.201"
        }
    ];

   

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }


    return (
        <>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        Danh sách khách sạn
                    </h1>

                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 hover:scale-110 hover:font-bold active:text-gray-500">
                                    <FilterFilled className="text-xl" />
                                </MenuButton>
                            </div>

                            <Transition
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <MenuItem key={option.name}>
                                                {({ focus }) => (
                                                    <a
                                                        href={option.href}
                                                        className={classNames(
                                                            option.current
                                                                ? "font-medium text-gray-900"
                                                                : "text-gray-500",
                                                            focus ? "bg-gray-100" : "",
                                                            "block px-4 py-2 text-sm",
                                                        )}
                                                    >
                                                        {option.name}
                                                    </a>
                                                )}
                                            </MenuItem>
                                        ))}
                                    </div>
                                </MenuItems>
                            </Transition>
                        </Menu>
                    </div>
                </div>

                <section aria-labelledby="products-heading" className="pb-24 pt-6">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 bg-white shadow rounded-lg p-6">
                        <form className="hidden lg:block">
                            <Button type="primary" className="w-[100%]" >Áp dụng</Button>

                            {filters.map((section) => (
                                <Disclosure
                                    as="div"
                                    key={section.id}
                                    className="border-b border-gray-200 py-6"
                                >
                                    {({ open }) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">
                                                        {section.name}
                                                    </span>
                                                    <PlusOutlined />
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel className="pt-6">
                                                <div className="space-y-4">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div
                                                            key={option.value}
                                                            className="flex items-center"
                                                        >
                                                            <input
                                                                id={`filter-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                defaultValue={option.value}
                                                                type="checkbox"
                                                                defaultChecked={option.checked}
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                            />
                                                            <label
                                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                className="ml-3 text-sm text-gray-600"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </form>

                        {/* Product grid */}
                        <div className="lg:col-span-3">
                            <div className="flex flex-row flex-wrap">
                                {hotels.map((hotel, index) => (
                                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
                                        <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:opacity-50">
                                            <a href="/hoteldetail" className="flex flex-col h-full">
                                                <img className="rounded-t-lg h-[150px] w-full" src={hotel.image} alt="" />
                                                <div className="p-5 flex flex-col flex-grow">
                                                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white text-center">{hotel.name}</h5>
                                                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 truncate">
                                                        <EnvironmentFilled /> {hotel.address}
                                                    </p>
                                                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                                                        <MoneyCollectFilled /> {hotel.price} VND
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>

    );
}
