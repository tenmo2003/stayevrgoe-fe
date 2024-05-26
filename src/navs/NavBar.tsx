import { Disclosure } from "@headlessui/react";
import { BellOutlined, MessageOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import logo from "../assets/stayevrgoe.png";
import ava from "../assets/ava.png";
import { useContext, useEffect, useState } from "react";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import UserContext from "../contexts/UserContext";
import service from "../service/service";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn);

  useEffect(() => {
    if (user != null) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [user]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      service.get("/users/me").then((res) => {
        setUser(res.data.data);
      });
    }
  }, []);

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignup, setModalSignup] = useState(false);

  const showLogin = () => {
    setModalLogin(true);
  };

  const cancelLoginModal = () => {
    setModalLogin(false);
  };

  const showSignup = () => {
    setModalSignup(true);
  };

  const cancelSignupModal = () => {
    setModalSignup(false);
  };

  const switchToSignup = () => {
    cancelLoginModal();
    showSignup();
  };

  const switchToLogin = () => {
    cancelSignupModal();
    showLogin();
  };

  return (
    <Disclosure as="nav" className="width-screen bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-10 w-auto" src={logo} alt="Stayergoe" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                  href="/"
                >
                  Home
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                  href="/hotelList"
                >
                  Khách sạn
                </a>
              </div>
            </div>
          </div>

          <Input
            type="search"
            placeholder="Tìm kiếm"
            suffix={<SearchOutlined className="pl-2" />}
            className="w-[25%]"
          />

          <div className="absolute inset-y-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {isLoggedIn ? (
              <>
                <MessageOutlined className="mr-4 cursor-pointer text-xl text-white hover:scale-110" />
                <BellOutlined className="mr-2 cursor-pointer text-2xl text-white hover:scale-110" />
                
                <div className="group relative ml-3">
                  <div className="relative flex rounded-full bg-gray-800 text-sm">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 cursor-pointer rounded-full"
                      src={ava}
                      alt=""
                    />
                  </div>

                  {/* User vs Hotel có trang Profile còn Admin có trang Admin */}
                  <div className="absolute right-0 z-10 mt-2 hidden w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none group-hover:block">
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 active:font-bold"
                      href="/profile"
                    >
                      Profile
                    </a>
                    {/* <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 active:font-bold"
                      href="/admin"
                    >
                      Admin
                    </a> */}
                    <button
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-200 active:font-bold"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <Button type="primary" onClick={showLogin}>
                {" "}
                Đăng nhập{" "}
              </Button>
            )}
          </div>

          <LoginModal
            visible={modalLogin}
            onCancel={cancelLoginModal}
            onLogin={() => {
              handleLoginClick();
              cancelLoginModal();
            }}
            onSignup={switchToSignup}
          ></LoginModal>

          <SignupModal
            visible={modalSignup}
            onCancel={cancelSignupModal}
            onLogin={() => {
              handleLoginClick();
              cancelLoginModal();
            }}
            onSignup={switchToLogin}
          ></SignupModal>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
