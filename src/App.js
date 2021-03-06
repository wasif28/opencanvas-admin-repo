/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import useEagerConnect from './hooks/useEagerConnect'
import AdminLayout from "layouts/Admin.js";
import Login from "components/login/Login";

function App() {
  useEagerConnect();
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/adminlogin" render={(props) => <Login {...props} />} />
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect to="/adminlogin" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
