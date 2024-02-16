import React from "react";
import { Route, Routes,  } from "react-router-dom";
import { Home } from "./Pages";

import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>404 notFound</div>}/>
      </Routes>
    </>
  );
};

export default App;
