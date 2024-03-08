import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import Sidebar from "./components/Sidebar";
import Sample1 from "./pages/Sample1";
import Sample2 from "./pages/Sample2";
import NaverBasicMap from './pages/NaverBasicMap'; // 기본 지도 컴포넌트
import NaverClickableMap from './components/map/NaverClickableMap';


export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={
            <NaverBasicMap >
              <NaverClickableMap />
            </NaverBasicMap>
          } />
          <Route path="/sample1" element={<Sample1 />} />
          <Route path="/sample2" element={<Sample2 />} />
        </Routes>
      </BrowserRouter>

    </div >
  );
}