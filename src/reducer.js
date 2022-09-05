//import the action types here from the actionTypes.js to be used in the reducer function

//Complete the reducer function here
const reducer = (state,action) => {
    // console.log(state,action)
    switch (action.type){
        case "LOGIN":
            return {...state,token:action.payload};
        case "EMAIL":
             return {...state,email:state.email+action.payload}
        case "PASSWORD":
             return {...state,password:state.password+action.payload}
        default:
            return state;
    }
};

export { reducer };
