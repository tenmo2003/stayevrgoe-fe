import { Disclosure } from '@headlessui/react'
import { BellOutlined } from '@ant-design/icons'
import { Input, Button } from "antd";
import logo from "../assets/stayevrgoe.png";
import ava from "../assets/ava.png"

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800 width-screen">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                            className="h-10 w-auto"
                            src={logo}
                            alt="Stayergoe"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a className='text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' href="/">Home</a>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a className='text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' href="/test">Test page</a>
                            </div>
                        </div>
                    </div>

                    <Input type="search" placeholder="Tìm kiếm" className='w-[25%]'/>

                    <div className="absolute inset-y-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* <Button type="primary">Đăng nhập</Button> */}

                        <BellOutlined className='text-white text-xl mr-2 cursor-pointer hover:scale-110'/>

                        <div className="relative ml-3 group">
                            <div className="relative flex rounded-full bg-gray-800 text-sm">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img
                                className="h-8 w-8 rounded-full cursor-pointer"
                                src={ava}
                                alt=""
                                />
                            </div>
                            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 active:font-bold" href="/profile">Profile</a>
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 active:font-bold" href="#">Logout</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </Disclosure>
    );
};

export default Navbar;
