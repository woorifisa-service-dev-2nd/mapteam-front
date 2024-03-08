import React, { useEffect } from 'react';

const NaverBasicMap = ({ children }) => {


    useEffect(() => {

        const script = document.createElement('script');

        document.body.appendChild(script);

        script.onload = () => {
            const mapOptions = {
                center: new window.naver.maps.LatLng(37.3595704, 127.105399), // 지도의 중심 좌표 설정
                zoom: 10 // 확대 수준 설정
            };

            const map = new window.naver.maps.Map('map', mapOptions);
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="map" style={{ width: '100%', height: '900px' }}>
            {children}
        </div>
    );
};

export default NaverBasicMap;
