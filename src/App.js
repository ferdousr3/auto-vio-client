import Header from "./components/share/Header/Header";
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

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto main-height pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/additems" element={<AddItems />} />
          <Route path="/manageitems" element={<ManageItems />} />
          <Route path="/myitems" element={<MyItems />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
