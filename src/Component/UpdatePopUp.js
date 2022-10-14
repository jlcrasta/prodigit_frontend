import React from "react";
import updateDetails from "../Services/updateDetails";

function updatePopUp(props) {
  function handleUpdate(e) {
    e.preventDefault();

    const obj = {
      mobile: e.target[0].value,
      email: e.target[1].value,
    };

    updateDetails(obj, props.setNumber, props.setEmail);
    document.getElementById("updateDetails").close();
  }
  return (
    <dialog
      style={{ zIndex: "100" }}
      className="border-0 rounded"
      id="updateDetails"
    >
      <p
        className="text-center d-block ms-auto"
        style={{ width: "20px", cursor: "pointer" }}
        onClick={() => document.getElementById("updateDetails").close()}
      >
        X
      </p>

      <form onSubmit={(e) => handleUpdate(e)}>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="number"
            defaultValue={props.number}
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
            defaultValue={props.email}
            required
          />
        </div>

        <button className="btn btn-danger d-block mx-auto" type={"submit"}>
          Update
        </button>
      </form>
    </dialog>
  );
}

export default updatePopUp;
