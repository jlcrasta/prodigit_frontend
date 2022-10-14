import React, { useState } from "react";
import register from "../Services/register";

function Register(props) {
  const [pwd, setPwd] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      mobile: e.target[2].value,
      password: pwd,
    };

    //props.updatePage(2)
    register(data, props.updatePage);
  }

  function handleCheckPwd(e) {
    let newPwd = e.target.value;
    if (newPwd !== pwd) {
      document.getElementById("passwordWarn").style.display = "inline-block";
    } else {
      document.getElementById("passwordWarn").style.display = "none";
    }
  }

  return (
    <div
      className="d-block mx-auto mt-2 border rounded p-4"
      style={{ width: "400px" }}
    >
      <h2 className="text-center fs-3 fw-bold">Register</h2>

      <form onSubmit={(e) => handleRegister(e)}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="enter name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email address"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile
          </label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            placeholder="mobile number"
            required
            minLength={10}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Enter Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="password"
            required
            defaultValue={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="repwd" className="form-label">
            Re-enter Password
          </label>
          <input
            type="password"
            className="form-control"
            id="repwd"
            placeholder="re-enter password"
            required
            onChange={(e) => handleCheckPwd(e)}
          />
          <small style={{ color: "red", display: "none" }} id="passwordWarn">
            Password should match
          </small>
        </div>

        <button className="btn btn-success d-block mx-auto" type={"submit"}>
          Register
        </button>
      </form>

      <p
        style={{ color: "blue", cursor: "pointer", width: "50px" }}
        className="d-block mx-auto mt-4"
        onClick={() => {
          props.updatePage(2);
        }}
      >
        Sign in
      </p>
    </div>
  );
}

export default Register;
