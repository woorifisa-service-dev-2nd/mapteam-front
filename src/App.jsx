import React, { useState } from 'react';
import NaverBasicMap from './components/map/NaverBasicMap'; // 기본 지도 컴포넌트
import NaverClickableMap from './components/map/NaverClickableMap'; // 클릭 가능한 지도 컴포넌트

const App = () => {
  const [showInfo, setShowInfo] = useState(false); // 정보 표시 상태

  // 클릭 이벤트 핸들러 함수
  const handleMarkerClick = () => {
    setShowInfo(!showInfo); // 정보 표시 상태를 토글합니다.
  };

  return (
    <div>
      <h1>Naver Map Test</h1>
      <NaverBasicMap>
        <NaverClickableMap onMarkerClick={handleMarkerClick} />
        {showInfo && (
          <div className="info-container">
          </div>
        )}
      </NaverBasicMap>
    </div>
  );
};

export default App;
