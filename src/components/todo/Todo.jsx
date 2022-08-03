import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/modules/todo";
import { updateTodo } from "../../redux/modules/todo";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import "./style.css";

function Todo({ todo }) {
  const data = useSelector((state) => state.todo.List);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data);
  return (
    <StTodoContainer>
      <div>

        

        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <StButtonSet>

      <div>
          <StDetailButton
            onClick={() => {
              navigate("/detail/"+todo.id);
            }}
          >
            자세히
          </StDetailButton>
        </div>
        <StTodoDeleteButton
          onClick={() => {
            // console.log("삭제버튼")
            dispatch(deleteTodo(todo.id));
          }}
        >
          삭제하기
        </StTodoDeleteButton>

        <StTodoCompleteButton
          onClick={() => {
            // console.log("수정버튼")
            dispatch(updateTodo(todo.id));
          }}
        >
          {todo.isDone ? "취소" : "완료"}
        </StTodoCompleteButton>
      </StButtonSet>
    </StTodoContainer>
  );
}

export default Todo;


const StTodoContainer = styled.div`
  width: 270px;
  /* height: 150px; */
  border: 4px solid rgb(2, 19, 19);
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`

const StButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`

// const StButton = styled.div`
//   border:none;
//   width: 50%;
//   height: 40px;
//   border-radius: 8px;
//   cursor: pointer;
// `

const StTodoDeleteButton = styled.button`
  border: 2px solid red;
  background-color: #fff;
  /* border:none; */
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
`

const StTodoCompleteButton = styled.button`
  border: 2px solid green;
  background-color: #fff;
  /* border:none; */
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
`

const StDetailButton = styled.button`
  border: 2px solid #c4e47b;
  background-color: #ffffff;
  /* border:none; */
  width: 60px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
`