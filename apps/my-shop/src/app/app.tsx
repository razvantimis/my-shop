import { ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import CartPage from './pages/CartPage';
import ConfirmationPaymentPage from "./pages/ConfirmationPaymentPage";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <Switch>
          <PrivateRoute path="/cart" component={CartPage} />
          <PrivateRoute path="/confirm-payment" component={ConfirmationPaymentPage} />
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
