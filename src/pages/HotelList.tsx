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
import { PlusOutlined, FilterFilled, EnvironmentFilled, MoneyCollectFilled, StarFilled  } from '@ant-design/icons'
import ava from "../assets/ava.png"
import { Button } from 'antd'
import UserContext from "../contexts/UserContext";
import { useContext, useEffect } from "react";

export default function HotelList() {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        console.log(user);
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
            { value: "binhduong", label: "Bình Dương", checked: false },
            { value: "thanhhoa", label: "Thanh Hoá", checked: false },
            { value: "haiphong", label: "Hải Phòng", checked: false },
            ],
        },
        {
            id: "rating",
            name: "Rating",
            options: [
            { value: "1", label: "☆", checked: false },
            { value: "2", label: "☆☆", checked: false },
            { value: "3", label: "☆☆☆", checked: false },
            { value: "4", label: "☆☆☆☆", checked: false },
            { value: "5", label: "☆☆☆☆☆", checked: false },
            ],
        },
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
                            <Button type="primary" className="w-[100%]">Áp dụng</Button>
                            
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

                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:opacity-50">
                                    <a href="/hoteldetail">
                                        <img className="rounded-t-lg" src={ava} alt="" />
                                        <div className="p-5">
                                            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white text-center">Tên khách sạn</h5>
                                            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                                                <EnvironmentFilled /> Tỉnh thành
                                            </p>
                                            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                                                <MoneyCollectFilled /> Khoảng giá
                                            </p>
                                            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                                                <StarFilled /> Rating
                                            </p>                                       
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
}
