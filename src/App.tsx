import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./routes/root";


function App() {


  return (
    <>
      <Router>
        <div className="main-wrapper">
          <Root />
        </div>
      </Router>

    </>
  )
}

export default App
