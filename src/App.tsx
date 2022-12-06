import React from 'react';
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { Create } from "./pages/Create";
import { Advanced } from "./pages/Advanced";
import { Simple } from "./pages/Simple";
import { Navbar } from "./Navbar";

function App() {

    return (
        <>
        <Navbar/>

            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/simple" element={<Simple />} />
                    <Route path="/advanced" element={<Advanced />} />
            </Routes>

        </>
    );
}

export default App;
