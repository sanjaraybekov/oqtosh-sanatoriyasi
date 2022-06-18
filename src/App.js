import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainView from "./views";

function App() {
	return (
		<BrowserRouter>
			<MainView />
		</BrowserRouter>
	);
}
function mapDispatchToProps(state) {
	return { isLogin: state.isLogin };
}
export default connect(mapDispatchToProps, null)(App);
