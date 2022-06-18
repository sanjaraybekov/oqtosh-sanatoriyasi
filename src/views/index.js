import React from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../components/features/loaders/Loader";
import LoaderOverlay from "../components/features/loaders/LoaderOverlay";
import Layout from "../components/layout/Layout";
import market from "../config/market";
import Home from "./home";
import NotFound from "./pages";
import Test from "./pages/Test";

export default function AppRoot() {
  return (
    <React.Suspense
      fallback={
        market.config.loader ? <Loader /> : <LoaderOverlay wrapper={true} />
      }
    >
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </React.Suspense>
  );
}
