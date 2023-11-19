import React from "react";
import MessageInput from "./message";
import logo from "./Assets/RettiwtLogo.png";
import ChatRoom from "./Pages/ChatRoom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";


function App() {
  return (
    <Router>
      <Link to="/">
        <svg width="300" height="80">
          <image href={logo} height="80" width="300" />
        </svg>
      </Link>
      <Link to="/ChatRoom">ChatRoom</Link>
      <MessageInput />
      <Routes>
        <Route path="/ChatRoom" element={<ChatRoom />} />
      </Routes>
    </Router>
    
  );
}

export default App;
