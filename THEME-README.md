# 화이트 · 샴페인 청첩장 테마

기존 프로젝트에 덮어쓰고 GitHub에 커밋하면 기존 배포 워크플로로 적용됩니다.
`node_modules`와 `build`는 포함하지 않았습니다.

## 변경 파일
- src/App.tsx: 핑크 꽃잎 배경 효과 제거
- src/App.scss: 화이트·샴페인 테마 색상 정의
- src/white-theme.scss: 사진 프레임, 보태니컬 장식, 여백, 버튼, 달력, 팝업 디자인
- src/component/cover/index.tsx: 영문 상단 문구 및 잎사귀 선 장식
- src/component/calendar/index.tsx: 예식일 원형 표시, 휴일 색상 테마 연결
- src/component/bgm/index.tsx: 음악 버튼을 단색 라인 아이콘으로 정리

사진, 문구, 예식일, 계좌, 연락처, SDK 설정 및 배포 설정은 유지했습니다.

## 실행
```bash
npm ci
npm run dev
```

## 검증
프로덕션 빌드 통과. 데스크톱 및 390px·320px 모바일 프레임으로 화면 확인.
연락처·양측 계좌 팝업, 사진 전체보기(12장) 동작 확인.
지도 API 및 카카오 공유의 실제 서비스 연동은 GitHub Pages 배포 후 확인이 필요합니다.
