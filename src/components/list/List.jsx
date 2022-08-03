import React from "react";
import Todo from "../todo/Todo";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import "./style.css";

  



function List() {
  const data = useSelector((state) => state.todo.List);
  // console.log(data)
  // const onDeleteHanlder = (todoId) => {
  //   const newTodos = data.filter((todo) => {
  //     return todo.id !== todoId;
  //   });

    
  // };

  // const onEditHandler = (todoId) => {
  //   const newTodos = data.map((todo) => {
  //     if (todo.id === todoId) {
  //       return {
  //         ...todo,
  //         isDone: !todo.isDone,
  //       };
  //     } else {
  //       return { ...todo };
  //     }
  //   });

    
  // };


  

  return (
    <StListContainer>
      <h2 className="list-title">Working.. 🔥</h2>
      <StListWrapper>
        {data.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                
                // onDeleteHanlder={onDeleteHanlder}
                // onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      <h2 className="list-title">Done..! 🎉</h2>
      <StListWrapper>
        {data.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                
                // onDeleteHanlder={onDeleteHanlder}
                // onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListContainer>
  );
}

export default List;


const StListContainer = styled.div`
  padding: 0 24px;
`

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`