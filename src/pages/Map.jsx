import React, { useState } from "react";
import NaverBasicMap from "../components/map/NaverBasicMap";
import NaverClickableMap from "../components/map/NaverClickableMap";


function Map() {
    const [showInfo, setShowInfo] = useState(false); // 정보 표시 상태

    const handleMarkerClick = () => {
        setShowInfo(!showInfo); // 정보 표시 상태를 토글합니다.
    };

    return (
        <div>
            <NaverBasicMap>
                {/* <NaverClickableMap onMarkerClick={handleMarkerClick} />
                {showInfo && (
                    <div className="info-container">
                    
                    </div>
                )} */}
            </NaverBasicMap>
        </div>
    );
}

export default Map;