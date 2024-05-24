import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/home/Home";
import Test from "./pages/test/Test";
import Navbar from "./navs/NavBar";
import Profile from "./pages/Profile";
import HotelList from "./pages/HotelList";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="profile" element={<Profile />} />
            <Route path="hotelList" element={<HotelList />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#21272a",
            color: "white",
          },
          duration: 2000,
        }}
      />
    </>
  );
}

export default App;
