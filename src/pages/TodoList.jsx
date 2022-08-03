
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";
// import { useSelector } from "react-redux";

const TodoList = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "리액트 공부하기",
  //     body: "리액트 기초를 공부해봅시다.",
  //     isDone: false,
  //   },
  //   {
  //     id: 2,
  //     title: "리액트 공부하기",
  //     body: "리액트 기초를 공부해봅시다.",
  //     isDone: true,
  //   },
  // ]);
  

  // const data = useSelector((state) => state.todo.List);
  // console.log(data)

  return (
    <Layout>
      <Header />
      <Form  />
      <List  />
    </Layout>
  );
};

export default TodoList;
