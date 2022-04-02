// const incCounterAction={type:"INC_COUNTER",payload:10};
// const addTodoAction={type:"INC_COUNTER",payload:{id:1,title:"Learn Redux",status:false}};
// const updateTodoAction={type:"INC_COUNTER",payload:{id:3,title:"Learn React Redux",status:false}};

class Store {
  constructor(reducer, init) {
    this.reducer = reducer;
    this.state = init;
  }
  getState() {
    return this.state;
  }
  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

const reducer = (state, action) => {
  if (action.type == "ADD_TODO") {
    return { ...state, todo: [...state.todo , action.payload] };
  }
 
  return state;
};

const init = { todo:[]};

const store = new Store(reducer, init);

console.log(store.getState());

store.dispatch({ type: "ADD_TODO", payload: {title:"Learn Redux",status:false} });
console.log(store.getState());
store.dispatch({ type: "ADD_TODO", payload: {title:"Learn Reaact Redux",status:false} });
console.log(store.getState());

