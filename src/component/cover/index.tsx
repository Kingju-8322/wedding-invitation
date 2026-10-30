import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

/**
 * 초대장의 메인 커버 섹션입니다.
 * 예식 일시, 신랑/신부 이름, 장소를 표시합니다.
 *
 * @returns {JSX.Element} 커버 섹션
 */
export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <div className="cover-eyebrow">WE ARE GETTING MARRIED</div>
      {/* 상단 날짜 표시 */}
      <div className="wedding-date">
        {WEDDING_DATE.format("YYYY")}
        <div className="divider" />
        {WEDDING_DATE.format("MM")}
        <div className="divider" />
        {WEDDING_DATE.format("DD")}
      </div>
      {/* 요일 표시 (영어) */}
      <div className="wedding-day-of-week">
        {DAY_OF_WEEK[WEDDING_DATE.day()]}
      </div>
      {/* 커버 이미지 */}
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="신랑 신부 웨딩 사진" />
      </div>
      {/* 종이 청첩장의 압인 장식을 닮은 보태니컬 라인 */}
      <svg className="botanical" viewBox="0 0 120 46" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 37C36 38 49 30 60 12C71 30 84 38 108 37" />
          <path d="M30 35C19 33 20 24 20 24C29 24 33 28 30 35ZM42 31C32 29 33 19 33 19C42 20 46 24 42 31ZM52 22C44 18 48 9 48 9C56 13 57 17 52 22ZM90 35C101 33 100 24 100 24C91 24 87 28 90 35ZM78 31C88 29 87 19 87 19C78 20 74 24 78 31ZM68 22C76 18 72 9 72 9C64 13 63 17 68 22Z" />
        </g>
      </svg>
      <div className="subtitle">Together, always</div>
      {/* 이름 표시 */}
      <div className="names">
        {GROOM_FULLNAME}
        <div className="divider" />
        {BRIDE_FULLNAME}
      </div>
      {/* 예식 정보 (포맷팅된 날짜 및 장소) */}
      <div className="info">{WEDDING_DATE.format(WEDDING_DATE_FORMAT)}</div>
      <div className="info">{LOCATION}</div>
    </LazyDiv>
  )
}
