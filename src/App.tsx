import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/home/Home";
import Navbar from "./navs/NavBar";
import Profile from "./pages/Profile";
import HotelDetail from "./pages/detailHotel";
import Payment from "./pages/Payment";
import HotelList from "./pages/HotelList";
import Admin from "./pages/Admin";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="hoteldetail" element={<HotelDetail />} />
            <Route path="payment" element={<Payment />} />
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
    </UserContext.Provider>
  );
}

export default App;
