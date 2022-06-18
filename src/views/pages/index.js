import React from "react";
import { Route, Switch } from "react-router-dom";
import Notfound from "./NotFound";

export default function PagesRoute() {
	return (
		<Switch>
			<Route path="/pages/NotFound" component={Notfound} />
			<Route component={Notfound} />
		</Switch>
	);
}