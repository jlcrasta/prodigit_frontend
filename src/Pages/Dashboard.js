import React, { useState, useEffect } from "react";
import UpdatePopUp from "../Component/UpdatePopUp";
import UpdatePwd from "../Component/UpdatePwd";
import fetchDetails from "../Services/fetchData";

function Dashboard(props) {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"))
      props.setWebState(1);
    } else {
      fetchDetails(setName, setNumber, setEmail);
    }
  }, []);

  return (
    <div>
      <UpdatePopUp
        number={number}
        email={email}
        setNumber={setNumber}
        setEmail={setEmail}
      />
      <UpdatePwd setWebState={props.setWebState} />

      <h2 className="text-center fs-3 fw-bold p-2 mt-5">Dashboard</h2>

      <div className="card mx-auto p-3" style={{ width: "30rem" }}>
        <h5 className="card-title text-center">{name}</h5>

        <p className="text-center">
          Mobile number : <span>{number}</span>
        </p>

        <p className="text-center">
          Email Address : <span>{email}</span>
        </p>

        <div className="d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => document.getElementById("updateDetails").showModal()}
          >
            Update Details
          </button>

          <button
            className="btn btn-warning"
            onClick={() => document.getElementById("updatePwd").showModal()}
          >
            Change password
          </button>
        </div>
      </div>

      <button
        className="btn btn-danger d-block mx-auto mt-3"
        onClick={() => {
          localStorage.clear();
          props.setWebState(1);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
