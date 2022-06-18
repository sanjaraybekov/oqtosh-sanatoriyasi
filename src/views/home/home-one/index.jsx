import React from "react";
import HomeTopSection from "../components/blocks/HomeTopSection";

export default function HomePageDefaul() {
	function toTop() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}

	return (
		<>
			<div className="home-page main">
				<button className="btn scroll-to-top" onClick={toTop}>
					<img src="/assets/images/up-arrow.png" alt="top" />
				</button>
				<div className="home-top">
					<HomeTopSection />
				</div>
			</div>
		</>
	);
}
