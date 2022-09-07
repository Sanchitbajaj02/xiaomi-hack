import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Order from './Pages/Order';
import Login from './Pages/Login';
import App from './App';
const Router = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<App />}/>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="login" element={<Login />}/>
        <Route path="order" element={<Order />}/>
    </Routes>
    </>
  )
}

export default Router