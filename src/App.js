import { useEffect, useReducer } from "react";
import "./App.css";
import { initialState } from "./initialState";
import { reducer } from "./reducer";
import axios from "axios"
// import { handelLogin,handelPassword,handelEmail } from "./actionCreators";

function App() {
  //use the useReducer function here; import the reducer function and initial state variable here.
  const [reducerState, dispatch] = useReducer(reducer,initialState);
  console.log(reducerState)

  const handelLogin=(event)=>{
    event.preventDefault()
    let email=reducerState.email
    let password=reducerState.password
    let res=axios.post('https://reqres.in/api/login', {
      email: email,
      password: password
    })
    .then(function (response) {
      dispatch({type:"LOGIN",payload:response.data.token});
    })
    .catch(function (error) {
      console.log(error);
    });
  }
const handelEmail=(e)=>{
  let email=e.target.value
  dispatch({type:"EMAIL",payload:email})
}
const handelPassword=(e)=>{
let password=e.target.value
  dispatch({type:"PASSWORD",payload:password})
}


//   const handelLogin=(event)=>{
    
//     getData()
//   }
// useEffect(()=>{
 
// },[])



  return (
    <div className="main-app">
      <div className="login-wrapper">
        <div style={{ textAlign: "center" }}>
          <h1>LOGIN</h1>
          <div className="welcome-text">
            Welcome to the RCT-211 E1 Evaluation
          </div>
          {/* if the user is authenticated as per the reducerState, THEN ONLY show div with the token data, OTHERWISE show the Incorrect Credentials div */}
          <div data-cy="token">Token:</div>
          <div data-cy="incorrect-credentials" style={{ color: "red" }}>
            Incorrect Credentials
          </div>
        </div>
        <form>
          <div className="email-wrapper">
            <label>Email</label>
            <input data-cy="email" onChange={handelEmail} type="email" name="email" value={reducerState.email} />
          </div>
          <div className="password-wrapper">
            <label>Password</label>
            <input data-cy="password" onChange={handelPassword} type="password" name="password" value={reducerState.password} />
          </div>
          <div className="submit-button-wrapper">
            <button data-cy="submit-button" type="submit" onSubmit={handelLogin}>
              LOGIN
            </button>
          </div>
        </form>
        <div className="social-media-icons">
          <img src="/facebook.png" alt="facebook-icon" />
          <img src="/instagram.png" alt="facebook-icon" />
          <img src="/linkedin.png" alt="facebook-icon" />
          <img src="/twitter.png" alt="facebook-icon" />
          <img src="/github.png" alt="facebook-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;




// https://github.com/masai-course/Pradeep_fw18_0075/tree/master/unit-4/sprint-1/optional/varun/rct-211-b19-e1-boilerplate