import React, { useEffect } from "react";
import signIn from "../Services/signIn";

function Signin(props) {
  function handleSign(e) {
    e.preventDefault();
    const obj = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    signIn(obj, props.setWebState);
  }

useEffect(()=>{
  if(localStorage.getItem("token")){
    props.setWebState(2);
  }
})

  return (
    <div
      className="d-block mx-auto my-5 border rounded p-4"
      style={{ width: "400px" }}
    >
      <h2 className="text-center fs-3 fw-bold">Login</h2>

      <form onSubmit={(e) => handleSign(e)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="enter email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="password"
            required
          />
        </div>

        <button className="btn btn-success d-block mx-auto" type={"submit"}>
          Login
        </button>
      </form>

      <p
        style={{ color: "blue", cursor: "pointer", width: "50px" }}
        className="d-block mx-auto mt-4"
        onClick={() => {
          props.updatePage(1);
        }}
      >
        Register
      </p>
    </div>
  );
}

export default Signin;
