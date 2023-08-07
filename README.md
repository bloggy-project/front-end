## bloggy

### 📚 서비스 소개

1. 블로그 사이트 제작 프로젝트입니다.
2. 기획부터 배포까지의 개발 사이클 전 과정에 참여하는 것을 목표로 합니다.  
   ex ) 도메인 등록, SSL 인증서 발급, AWS 구축, CI/CD 적용 등

**URL** : https://bloggy.kro.kr/

**기술 스택** : <div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/zustand-7F2B7B?style=for-the-badge&logo=zustand&logoColor=white">
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white">
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">
<img src="https://img.shields.io/badge/React Hook Form-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=white">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
<img src="https://img.shields.io/badge/github actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">
<img src="https://img.shields.io/badge/amazone aws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">

</div>

### ✅ 기능 명세서

---

**구현 완료 시 체크**

- [x] 회원가입, 로그인 (유효성 검증, 토큰 전략)
  <details>
  <summary>더보기</summary>

  1. **회원가입 및 로그인 시 react-hook-form과 yup을 통해 유효성 검증 후 폼 제출**
     ![회원가입](https://github.com/planit-works/front-end/assets/88307030/8e49d405-f596-49e2-a5f3-c1be164347aa)
     - 모달 창 띄워진 후 뒷배경 스크롤 바 숨김 처리
  2. **로그인 후 액세스, 리프레시 토큰 발행**
     ![로그인](https://github.com/planit-works/front-end/assets/88307030/54032d85-32bc-420c-86ef-b7db1997e892)
     - Axios Interceptors를 이용하여 토큰 처리에 대한 미들웨어 추가
     - 액세스 토큰은 내부 변수로 저장, 리프레시 토큰은 쿠키로 감싼 후 httpOnly 설정을 추가하여 관리

</details>

- [x] 유저 정보 관리
  <details>
  <summary>더보기</summary>

  1. **유저 정보 수정**
     ![유저정보-수정](https://github.com/planit-works/front-end/assets/88307030/4909af2a-d807-488c-a030-a5d3e5a89db8)
     - 정보 수정 api 요청 시 수정할 내용 사전 업데이트(렌더링) 후 api요청 (optimistic update)
     - 수정할 썸네일 파일에 대한 유효성 검증

</details>

- [x] 썸네일, 블로그 이미지 관리
  <details>
  <summary>더보기</summary>

  1. **PreSignedUrl 발급 후 클라이언트 단에서 S3에 이미지 파일 업로드**
  2. **AWS S3에 등록된 이미지는 CloudFront를 통해 캐싱 처리**
     - Lambda를 이용해 cdn url에 쿼리 파라미터 추가 시 원본 이미지 사이즈 최적화

</details>

</details>

- [x] 포스트 업로드
  <details>
  <summary>더보기</summary>

  1. **toast ui editor 라이브러리 적용 및 마이그레이션**
  ![포스트-이미지-업로드](https://github.com/planit-works/front-end/assets/88307030/2ab9fba3-5b31-490f-93a4-808c4a7b5847)
     - 기존 이미지 업로드 방식 base64 -> url 형식으로 변환
     - 업로드 파일에 대한 유효성 검증
  2. **포스트 업로드 전 미리보기용 정보 설정**
  ![포스트 미리보기 설정](https://github.com/planit-works/front-end/assets/88307030/56edafd4-9c02-4804-8a96-56a92e031d0f)


  1. **PreSignedUrl 발급 후 클라이언트 단에서 S3에 이미지 파일 업로드**
  2. **AWS S3에 등록된 이미지는 CloudFront를 통해 캐싱 처리**
     - Lambda를 이용해 cdn url에 쿼리 파라미터 추가 시 원본 이미지 사이즈 최적화

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
