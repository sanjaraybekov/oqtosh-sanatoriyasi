import React from "react";

function LoaderOverlay({ wrapper, color = "#555" }) {
	let fixed = {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: "999",
	};
	return (
		<div
			className="d-block lds-ellipsis mx-auto my-auto"
			style={wrapper ? fixed : null}
		>
			<div style={{ background: color }}></div>
			<div style={{ background: color }}></div>
			<div style={{ background: color }}></div>
			<div style={{ background: color }}></div>
		</div>
	);
}

export default LoaderOverlay;
