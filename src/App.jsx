import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import Sidebar from "./components/Sidebar";
import Map from "./pages/Map";
import Sample1 from "./pages/Sample1";
import Sample2 from "./pages/Sample2";
import NaverBasicMap from './components/map/NaverBasicMap'; // 기본 지도 컴포넌트
import NaverClickableMap from './components/map/NaverClickableMap'; // 클릭 가능한 지도 컴포넌트


export default function App() {



  // 클릭 이벤트 핸들러 함수


  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/sample1" element={<Sample1 />} />
          <Route path="/sample2" element={<Sample2 />} />
        </Routes>
      </BrowserRouter>

    </div >
  );
}