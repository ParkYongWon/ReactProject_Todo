import './App.css';
import TodoList from "./pages/TodoList"
import Detail from "./pages/Detail"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
  
  <div>

    <Routes>
       <Route path="/" element={<TodoList/>} />
       <Route path="/detail/:id" element={<Detail/>} />
    </Routes>
     
      

    

   
      
    
      
    

  </div>
  
  
    
    
     

     
  );
}

export default App;
