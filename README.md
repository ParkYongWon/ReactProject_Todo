# 🚗 My Todo List

----

> ## 컴포넌트 구조  



![구조구조](https://user-images.githubusercontent.com/108280991/182717571-7e650436-0a30-45a2-b598-da116899c3f8.PNG)




---

<br/>

> ## 기술 구현

- *Router*
    - DetailPage
- *Redux*
    - Create Todo
    - Update Todo
    - Delete Todo
- *style*
    - styled-components
- *useState*


---
<br/>  

``` 
- Form 컴포넌트
useState를 이용해 onChange 값을 받습니다.
event.preventDefault를 이용해 제목, 내용 중 빈칸이 있으면 등록하지 못하게 합니다.
useDispatch를 이용해 리덕스 Action에 보내줍니다.
```

```
- List 컴포넌트
Working과 Done을 구분 짓는 div들을 생성
```

```
- Todo 컴포넌트
useSelector를 이용해 Form에서 받은 값의 필요한 요소를 꺼내 todo 박스를 만듭니다.
useNavigate를 이용해 DetailPage로 이동할 수 있게 합니다.
useDispatch를 이용해 삭제 버튼과 수정,취소 버튼을 만듭니다.
```

```
- Detail 컴포넌트
useSelector를 이용해 받아온 값으로 제목, 내용, ID값을 표출합니다.
useNavigate를 이용해 돌아가기 버튼을 만듭니다.
useParams를 이용해 파라미터 값을 가져와 todo의 ID값과 일치하는 todo를 보여줍니다.
```




&nbsp;



