import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import Latest from "./pages/Latest";
import Navbar from "./components/Navbar";
import "./style.css";

export default function App() {
    return (
        <BrowserRouter>
          <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/upcoming" element={<Upcoming />} />
                <Route path="/latest" element={<Latest />} />
            </Routes>
        </BrowserRouter>
    );
}
