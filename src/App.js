import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyApp from "./MyApp";
import CreateBlog from "./Files/CreateBlog";
import BlogDisplay from "./Files/BlogDisplay";
import EditBlog from "./Files/EditBlog";
import About from "./About/About";
import Contact from "./Contact/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyApp />} />
          <Route path="/write" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<BlogDisplay />} />
          <Route path="/edit/:id" element={<EditBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
