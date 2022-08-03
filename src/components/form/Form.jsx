import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {createTodo} from "../../redux/modules/todo"
import styled from "styled-components";
// import "./style.css";



let number = 3;
function Form() {
  
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const dispatch = useDispatch();
  

  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;


    // setTodos([...todos, { ...todo, id: number }]);
    
    

    dispatch(createTodo({...todo, id: number}));
    setTodo(initialState);
    number++;
    
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
}

export default Form;


const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`
const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`

const StAddButton = styled.button`

  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`