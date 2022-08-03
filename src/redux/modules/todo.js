// // src/modules/counter.js

// // 초기 상태값
// const initialState = {
//     number: 0,
//   };
  
//   // 리듀서
//   const todo = (state = initialState, action) => {
//     switch (action.type) {
//       default:
//         return state;
//     }
//   };
  
//   // 모듈파일에서는 리듀서를 export default 한다.
//   export default todo;


//   // widgets.js

// // Actions
// const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'todo/CREATE';
const UPDATE = 'todo/UPDATE';
const DELETE = 'todo/DELETE';


const initialState = {
  List:[
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]
}
// // Action Creators
// export function loadWidgets() {
// return { type: LOAD };
// }

export function createTodo(todo) {
  // console.log("액션빔")
return { type: CREATE, todo: todo };
}

export function deleteTodo(todo_id) {
  // console.log("지울 버킷 인덱스")
return { type: DELETE, todo_id };
}

export function updateTodo(todo_id) {
return { type: UPDATE, todo_id };
}

// Reducer
function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "todo/CREATE":{
      // console.log("값 바꿀꺼얌")
      const new_todo_list = [...state.List, action.todo];
      // console.log(new_todo_list)
      return {...state, List : new_todo_list};
    }
    case "todo/DELETE":{
      console.log(state, action)
      const new_todo_list = state.List.filter((l, idx) => {
        return parseInt(action.todo_id) !== l.id
      })
        return {List: new_todo_list};
    }
    case "todo/UPDATE":{
      const new_todo_list = state.List.map((l) => {
        // console.log(typeof(l.id))
        if (action.todo_id === l.id) {
          return {
            ...l,
            isDone: !l.isDone,
          } 
        }else {
          return {...l}
        }
      })
      return {List: new_todo_list}
    }

    default:
     return state;
}
}



// export function updateWidget(widget) {
// return { type: UPDATE, widget };
// }



// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }


export default reducer