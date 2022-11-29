import React from "react";
import Nav from "./router/Nav";
import About from "./router/About";
import Blog from "./router/Blog";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./router/Home";
import Chat from "./router/Chat";
import Count from "./router/Count";
import Swipper from "./router/Swipper";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hi Abdulvahob</h1>
        <Nav />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/chart" element={<Chat/>}/>
            <Route path="/count" element={<Count/>}/>
            <Route path="/swipper" element={<Swipper/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
