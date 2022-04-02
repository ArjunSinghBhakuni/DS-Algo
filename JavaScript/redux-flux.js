// const incCounterAction={type:"INC_COUNTER",payload:10};
// const addTodoAction={type:"INC_COUNTER",payload:{id:1,title:"Learn Redux",status:false}};
// const updateTodoAction={type:"INC_COUNTER",payload:{id:3,title:"Learn React Redux",status:false}};

class Store{
    constructor(reducer,init){
        this.reducer=reducer;
        this.state=init
    }
    getState(){
        return this.state
    }
    dispatch(action){
        this.state=this.reducer(this.state,action)
    }
}

const reducer=(state,action)=>{
    if(action.type=="INC_COUNTER"){
        return {...state,count:state.count+action.payload}
    }
    if (action.type == "DEC_COUNTER") {
      return { ...state, count: state.count - action.payload };
    }
    return state;
}

const init={count:10};

const store=new Store(reducer,init)


console.log(store.getState())

store.dispatch({ type: "INC_COUNTER", payload: 10 });
console.log(store.getState())
store.dispatch({ type: "DEC_COUNTER", payload: 5 });
console.log(store.getState())
