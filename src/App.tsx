import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./routes/root";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
      <Router>
        <div className="main-wrapper">
          <Root />
        </div>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{
          top: '5%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  )
}

export default App
