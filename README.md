# 식스샵 프론트개발자 채용 과제

- [과제 안내 링크](https://www.notion.so/sixshop/af7f8a9586b648e6ba92a8c24ff0ef66)
- 과제 제출 기한은 과제 메일 발송일로부터 7일 후 자정 12시까지 입니다. 기한을 꼭 지켜주세요.

---

## 가설

---

1. 무한 스크롤의 뒤로가기 시 데이터가 유지되지 않음

   - react-query의 기본 기능으로 [scroll restoration](https://tanstack.com/query/v4/docs/guides/scroll-restoration)이 존재
   - 하지만 확인 결과 뒤로가기 시 데이터가 유지되지 않고 스크롤 또한 유지되지 않음
   - react-query devtool을 통해 확인한 결과 query들이 캐싱되지 않고 사라지고 있음
   - 추측. MSW 사용으로 인해 동작하지 않음
