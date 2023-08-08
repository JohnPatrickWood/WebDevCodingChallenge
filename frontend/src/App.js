import React  from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import SKUDetails from "./Pages/SKUDetails";

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="sku/:sku/" element={<SKUDetails />} />
            </Routes>
        </>
    );
}
