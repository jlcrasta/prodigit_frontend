import React from "react";
import updatePwd from "../Services/updatePwd";

export default function UpdatePwd(props) {
  function handleChangePwd(e) {
    e.preventDefault();
    const obj = {
      oldPwd: e.target[0].value,
      newPwd: e.target[1].value,
    };
    updatePwd(obj);
    props.setWebState(1);
  }
  return (
    <dialog
      style={{ zIndex: "100" }}
      className="border-0 rounded"
      id="updatePwd"
    >
      <p
        className="text-center d-block ms-auto"
        style={{ width: "20px", cursor: "pointer" }}
        onClick={() => document.getElementById("updatePwd").close()}
      >
        X
      </p>

      <form onSubmit={(e) => handleChangePwd(e)}>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Old Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>

        <button className="btn d-block mx-auto bg-warning" type={"submit"}>
          Update Password
        </button>
      </form>
    </dialog>
  );
}
