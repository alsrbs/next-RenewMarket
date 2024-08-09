import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface KakaoMapProps {
  latitude: number;
  longitude: number;
  setCustomValue?: (id: string, value: number) => void;
  detailPage?: boolean;
}

const KakaoMap = ({
  latitude,
  longitude,
  setCustomValue,
  detailPage = false
}: KakaoMapProps) => {
  const [isLoading, setIsLoading] = useState(true);  // 로딩 상태 관리

  useEffect(() => {
    // 지도가 처음 로드되거나, 좌표가 변경될 때 로딩 상태로 변경
    setIsLoading(true);
  }, [latitude, longitude]);

  const handleClick = (mouseEvent: kakao.maps.event.MouseEvent) => {
    if (detailPage) return;

    setCustomValue!('latitude', mouseEvent.latLng.getLat());
    setCustomValue!('longitude', mouseEvent.latLng.getLng());    
  };

  return (
    <div style={{ position: 'relative', width: "100%", height: "360px" }}>
      {isLoading && (
        <div style={{
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: '#f0f0f0'
        }}>
          {/* 로딩 중에 표시할 컴포넌트 (스피너 또는 플레이스홀더) */}
          <span>Loading...</span>
        </div>
      )}
      <Map
        center={{ lat: latitude, lng: longitude }}
        style={{ width: "100%", height: "360px" }}
        onClick={(_, mouseEvent) => handleClick(mouseEvent)}
        onTileLoaded={() => setIsLoading(false)} // 타일이 모두 로드되었을 때 로딩 상태 해제
      >
        <MapMarker position={{ lat: latitude, lng: longitude }} />
      </Map>
    </div>
  );
};

export default KakaoMap;
