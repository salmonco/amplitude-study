# Amplitude 실습

- 월 10만원까지 무료
- 구글 애널리틱스랑 같이 사용하면 좋음
- 사용자가 기능을 쓰는지 안 쓰는지?
- 유저 아이디 설정 안하면 amplitude가 알아서 추정함
    - 우리가 굳이 커스텀한 유저 아이디값을 보내줄 필요가 없음
- [app.amplitude.com](http://app.amplitude.com) 대시보드
- Organization Setting에서 멤버 추가
- User Look-Up 탭에서 사용자 활동 확인
- Create new > Segmentation에서 시각화 지표 확인
    - Any Active Event: DAU, MAU 측정
- Create new > Funnel에서 사용자의 journey 보기
    - 사용자 액션이 어디서 시작했는지에 따라 액션 유도
- Create new > Journeys
    - Start Session 후에 어디로 가는지, 사용자의 행동 패턴을 한눈에 볼 수 있음
- Create new > Retention
    - 사용자가 얼마나 재방문하는지, 얼마나 재구매하는지 측정
    - 구매 액션을 시작으로 다시 구매 액션
- 개발 도중에 amplitude 코드 추가
    - onClick 할 때마다 track 이벤트 설정하는 거 잊으면 안 됨
***
# Updates!

This new version contains an integration with redux-toolkit instead of redux and it's witch Typescript :)

# Next.js Ecommerce

This repo contains a work in progress Ecommerce responsive made with Next.js, Redux, Redux-persist, Hooks, SCSS and BEM. If you like it please give it a star :)
## Design

[This](https://www.xdguru.com/free-xd-ecommerce-ui-kit-by-iceo/) is the design of the project.

## Available pages

- Home page: /
- Products page: /products
- Product single page: /product/1
- Cart page: /cart
- Login page: /login
- Register page: /register
- 404 page: /page-not-found

## Screenshots

![Next Ecommerce screenshot](https://lucaspulliese.com/wp-content/uploads/2020/09/ecommerce-1.jpg)

![Next Ecommerce screenshot](https://lucaspulliese.com/wp-content/uploads/2020/09/ecommerce-2.jpg)

## Next TO-DO

- [X] Checkout page
- [ ] Add Facebook login
- [ ] Add Google login
- [ ] Add Proptypes on components
- [ ] Use CSS variables instead of static colors
