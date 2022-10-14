import React, { useState } from "react";
import Register from "../Component/Register";
import Signin from "../Component/Signin";

function Login(props) {
  const [page, updatePage] = useState(2);
  if (page === 1) {
    return (
      <div>
        <Register updatePage={updatePage} />
      </div>
    );
  }

  if (page === 2) {
    return (
      <div>
        <Signin updatePage={updatePage} setWebState={props.setWebState} />
      </div>
    );
  }
}

export default Login;
