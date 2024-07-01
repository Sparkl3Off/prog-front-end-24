import React, { useEffect, useState } from "react";
import { Router, Route, Link, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Perfil from "./components/Perfil"
/*
Componente Vista: Llamando App
*/
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/Perfil" element={<Perfil/>}/>
    </Routes>
  );
}

export default App;