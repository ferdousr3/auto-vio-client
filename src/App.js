import Header from "./components/share/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/share/Footer/Footer";
import AddItems from "./pages/AddItems/AddItems";
import ManageItems from "./pages/ManageItems/ManageItems";
import MyItems from "./pages/MyItems/MyItems";
import Blogs from "./pages/Blogs/Blogs";
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register/Register";
import RequireAuth from './components/RequireAuth/RequireAuth'
import UpdateItem from "./pages/UpdateItem/UpdateItem";
import DataSpinner from "./components/share/DataSpinner/DataSpinner";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import DigitalService from "./pages/DigitalServices/DigitalService";
import AllItems from "./pages/AllItems/AllItems";
import DeliveryItem from "./pages/Delivery/Delivery";

function App() {
  return (
    <>
      <Header />
      <DataSpinner>
        <main className=" mx-auto main-height pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/digitalservice" element={<DigitalService />} />
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/updateitem/:id" element={<UpdateItem />} /> */}

            <Route
              path="/manageitems"
              element={
                <RequireAuth>
                  <ManageItems />
                </RequireAuth>
              }
            >
              <Route path="updateitem/:id" element={<UpdateItem />} />
              <Route path="myitems" element={<MyItems />} />
              <Route path="delivery/:id" element={<DeliveryItem/>} />
              <Route path="allitems" element={<AllItems/>} />
              <Route path="additems" element={<AddItems />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </DataSpinner>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
