import React, { useEffect, useState } from 'react';

const NaverClickableMap = ({onMarkerClick}, {children}) => {
    const [map, setMap] = useState(null);
    const [infowindow, setInfowindow] = useState(null);

    useEffect(() => {
        const HOME_PATH = window.HOME_PATH || '.';
        const cityhall = new window.naver.maps.LatLng(37.5666805, 126.9784147);
        const mapInstance = new window.naver.maps.Map('map', {
            center: cityhall.destinationPoint(0, 500),
            zoom: 15
        });

        const marker = new window.naver.maps.Marker({
            map: mapInstance,
            position: cityhall
        });

        const contentString = [
            '<div class="iw_inner">',
            '   <h3>서울특별시청</h3>',
            '   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />',
            '       <img src="' + HOME_PATH + '/img/example/hi-seoul.jpg" width="55" height="55" alt="서울시청" class="thumb" /><br />',
            '       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />',
            '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
            '   </p>',
            '</div>'
        ].join('');

        const infoWindowInstance = new window.naver.maps.InfoWindow({
            content: contentString
        });

        window.naver.maps.Event.addListener(marker, "click", function () {
            if (infoWindowInstance.getMap()) {
                infoWindowInstance.close();
            } else {
                infoWindowInstance.open(mapInstance, marker);
            }
        });

        setMap(mapInstance);
        setInfowindow(infoWindowInstance);
    }, []);

    return (
        <div id="map" style={{ width: '100%', height: '400px' }}>
            {children}
        </div>
    );
};

export default NaverClickableMap;
