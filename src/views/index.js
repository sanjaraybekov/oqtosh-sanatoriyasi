import React from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../components/features/loaders/Loader";
import LoaderOverlay from "../components/features/loaders/LoaderOverlay";
import Layout from "../components/layout/Layout";
import market from "../config/market";
import Home from "./home";
import NotFound from "./pages";
import BizHaqimizda from "./pages/BizHaqimizda";
import BizningJamoa from "./pages/BizningJamoa";
import Galereya from "./pages/Galereya";
import Narxlar from "./pages/Narxlar";
import Shifokorlar from "./pages/Shifokorlar";
import Tabiat from "./pages/Tabiati";
import Test from "./pages/Test";
import Tibbiyot from "./pages/Tibbiyot";
import Xizmatlar from "./pages/Xizmatlar";
import Yotoqxonalar from "./pages/Yotoqxinalar";

export default function AppRoot() {
	return (
		<React.Suspense
			fallback={
				market.config.loader ? (
					<Loader />
				) : (
					<LoaderOverlay wrapper={true} />
				)
			}
		>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/test" component={Test}></Route>
					<Route
						path="/biz-haqimizda"
						component={BizHaqimizda}
					></Route>
					<Route path="/xizmatlar" component={Xizmatlar}></Route>
					<Route
						path="/bizning-jamoa"
						component={BizningJamoa}
					></Route>
					<Route path="/narxlar" component={Narxlar}></Route>
					<Route path="/shifokorlar" component={Shifokorlar}></Route>
					<Route path="/tibbiyot" component={Tibbiyot}></Route>
					<Route
						path="/yotoqxonalar"
						component={Yotoqxonalar}
					></Route>
					<Route path="/tabiat" component={Tabiat}></Route>
					<Route path="/galereya" component={Galereya}></Route>
					<Route component={NotFound}></Route>
				</Switch>
			</Layout>
		</React.Suspense>
	);
}
