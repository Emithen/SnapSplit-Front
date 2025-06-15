# SnapSplit : 정산 & 사진 관리 서비스

## 멤버

|<img src="https://github.com/jsomnium.png" width="250" height="250"/>|<img src="https://avatars.githubusercontent.com/u/124485699?v=4.png" width="250" height="250"/>|<img  src="https://avatars.githubusercontent.com/u/42036131?v=4.png" width="250" height="250"/> |
|:---:|:---:|:---:|
|[지수](https://github.com/jsomnium)|[재영](https://github.com/answodud)|[은정](https://github.com/enjung)|
| 기획, 프론트 | 기획, 백엔드 | 기획, 백엔드 |

# 프론트엔드
## 폴더 구조
- **Feature-based structure**
  - app/ → 라우팅 전용
  - features/ → 기능별로 컴포넌트/로직 모아놓는 구조
  - shared/ → 전역에서 공통으로 사용하는 것만 모아놓음
    - components → 공통 컴포넌트들 (페이지 2개 이상에서 사용 되는 것들)
    - types → 공통 컴포넌트에 쓰이는 ui 타입 등
    - constanst → apiPath, routePath와 같은 정적 요소들
  - lib/ → 외부 API, 설정, 전역 store 등 범용 모듈
## 기술 스택
- react
- next.js
- type script
- tanstack query
- tailwind css
