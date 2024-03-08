import React, { useEffect } from 'react';

const NaverMap = () => {
    useEffect(() => {
        // 1. 새로운 <script> 요소를 생성
        const script = document.createElement('script');

        // 2. 생성한 <script> 요소의 src 속성에 Naver 지도 API 스크립트의 URL을 할당
        script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=키값';

        // 3. 스크립트가 비동기적으로 로드되도록 설정
        script.async = true;

        // 4. <script> 요소를 <body> 요소에 추가
        document.body.appendChild(script);

        // 5. 스크립트가 로드된 후 실행되는 콜백 함수를 정의
        script.onload = () => {
            // 6. 지도의 옵션을 설정
            const mapOptions = {
                center: new window.naver.maps.LatLng(37.3595704, 127.105399), // 지도의 중심 좌표 설정
                zoom: 10 // 확대 수준 설정
            };

            // 7. Naver 지도 API를 사용하여 실제 지도 객체를 생성
            const map = new window.naver.maps.Map('map', mapOptions);
        };

        // 8. 컴포넌트가 언마운트될 때 스크립트 요소를 제거하는 클린업 함수를 반환W
        return () => {
            document.body.removeChild(script);
        };
    }, []); // 9. 의존성 배열이 빈 배열이므로, useEffect는 컴포넌트가 마운트될 때 한 번만 실행

    // 10. 지도를 표시할 <div> 요소를 반환
    return (
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
    );
};

export default NaverMap;
