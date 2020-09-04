import React from "react";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import { MovieForm } from "./components/MovieForm";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/Login" component={LoginForm} />
          <Route path="/Register" component={RegisterForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/Customers" component={Customers} />
          <Route path="/Rentals" component={Rentals} />
          <Route path="/NotFound" component={NotFound} />
          <Route from="/" exact to="/movies" />
          <Redirect to="/NotFound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
