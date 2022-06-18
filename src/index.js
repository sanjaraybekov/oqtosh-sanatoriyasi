import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//STYLES
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/app.scss";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
// import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { SignInReducer } from "./reducers/signInReducer";

const store = createStore(
	SignInReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
