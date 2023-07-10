## bloggy

---

블로그 프로젝트

### 기능 명세서

---

**구현 완료 시 체크**

- [x] 회원가입, 로그인 (유효성 검증, 토큰 전략)
  <details>
  <summary>더보기</summary>
  
  1. **회원가입 및 로그인 시 react-hook-form과 yup을 통해 유효성 검증 후 폼 제출**
     - ![회원가입](https://github.com/planit-works/front-end/assets/88307030/8e49d405-f596-49e2-a5f3-c1be164347aa)
     - 모달 창 띄워진 후 뒷배경 스크롤 바 숨김 처리
       
  2. **로그인 후 액세스, 리프레시 토큰 발행**
     - ![로그인](https://github.com/planit-works/front-end/assets/88307030/54032d85-32bc-420c-86ef-b7db1997e892)
     - Axios Interceptors를 이용하여 토큰 처리에 대한 미들웨어 추가
     - 액세스 토큰은 내부 변수로 저장, 리프레시 토큰은 쿠키로 감싼 후 httpOnly 설정을 추가하여 관리

</details>

- [ ] 썸네일, 블로그 이미지 관리
  <details>
  <summary>더보기</summary>
  
  1. **AWS S3에 이미지 등록 후 CloudFront를 통해 캐싱 처리**
     - Lambda를 이용해 쿼리 파라미터 추가 시 원본 이미지 사이즈 수정 처리

</details>

- [ ] 전체 게시글, 블로그 내 게시글 검색
    <details>
  <summary>더보기</summary>
  
  1. **최신, 인기순에 따른 게시글 렌더링**
     - react-query를 이용하여 무한 스크롤 구현
     - 데이터 양에 따라 스크롤 바 생성 여부 변동 -> 유동적으로 footer가 페이지 최하단에 위치

</details>

- [ ] 유저, 게시글 좋아요 (알람)
- [ ] 게시글, 태그 CRUD
- [ ] 댓글, 대댓글
