import React from "react"
import Cover from './TemplateComponents/Cover'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import User from "views/ListUsers/UserList";
import DetalleRegistered from "views/ListUsers/DetalleRegister";
import DetalleWaitList from "views/ListUsers/DetalleWaitList";
import NewUser from "views/NewUsers/NewUser";

import Login from "views/Login/Login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/user/:index" element={<User />} />
        <Route path="/detalle-registered" element={<DetalleRegistered />} />
        <Route path="/detalle-wait-list" element={<DetalleWaitList />} />

        <Route path="/login" element={<Login />} />
        <Route path="/new-user" element={<NewUser />} />
       
      </Routes>
    </BrowserRouter>
  );
}
