import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english"><span className="section-kicker">LOCATION</span>오시는 길</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용 시
            <br />
            2호선, 5호선, 중앙선, 분당선
            <br />→ <b>왕십리역 9번 출구</b> (도보 3분 거리, 직진)
            <br />
            <br />
            5호선
            <br />→ <b>행당역 3번 출구</b> (도보 3분 거리, 직진)
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            <b>무학여고</b> 하차
            <br />
            - 지선(초록): 2016, 4211
            <br />
            - 간선(파랑): 110A, 141, 145, 148, 241, 421, 463
            <br />
            - 마을버스: 02, 03, 08
            <br />
            - 공항버스: 6010 (인천)
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>[레노스블랑쉬]</b> 검색
            <br />
            <br />
            - 하객 주차: <b>2시간 무료</b>
            <br />
            (로비에 비치된 주차권에 <b>도장 확인</b>을 꼭 받아 주세요)
          </div>
        </div>
      </LazyDiv>
    </>
  )
}