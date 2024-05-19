import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/home/Home";
import Test from "./pages/test/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="test" element={<Test />} />
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
