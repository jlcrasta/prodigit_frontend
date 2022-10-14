import { useState } from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [webState, setWebState] = useState(1);

  if (webState === 1) {
    return (
      <div>
        <Login setWebState={setWebState} />
      </div>
    );
  }

  if (webState === 2) {
    return (
      <div>
        <Dashboard setWebState={setWebState}/>
      </div>
    );
  }
}

export default App;
