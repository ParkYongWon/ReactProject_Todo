import React from "react";
// import "./style.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";

const Detail = () => {
  const param = useParams();
//   console.log(param);
  const data = useSelector((state) => state.todo.List);
  console.log(data)

  const navigate = useNavigate();

  const find = data.find(t => t.id===Number(param.id))
  console.log(find)

  return (
    <div>

      <StDetailBox>
        
        <div>
            ID: {find.id}
        </div>
        <hr></hr>
        <h2>
            {find.title}
        </h2>
        <hr></hr>
        <div>
              {find.body}
        </div>
        <hr></hr>
        <StButton onClick={() => navigate("/")}> 돌아가기 </StButton>
      </StDetailBox>

    </div>
  );
};

export default Detail;

const StDetailBox = styled.div`
    background-color: rgb(245, 195, 195);
    height: 500px;
    width: 500px;
    margin: 220px auto;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    
`
const StButton = styled.button`
    padding: 6px 12px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    height: 40px;
    background-color: rgb(241, 241, 181);
    cursor: pointer;

`
