import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Urgent from "./pages/lists/Urgent";
import Daily from "./pages/lists/Daily"
import Casual from "./pages/lists/Casual"
import total from "./total.css"


function TodoList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="urgent" element={<Urgent />} />
          <Route path="daily" element={<Daily />} />
          <Route path="casual" element={<Casual />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default TodoList;

//<Route path="pathName" element={<funcName />} />
