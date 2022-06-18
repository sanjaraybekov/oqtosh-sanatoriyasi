import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";

export default function Header() {
	return (
		<header className="header">
			<div className="header-top">
				<div className="container">
					<div className="row">
						<div className="col-12 display-flex justify-content-between">
              <div className="header-left display-flex justify-content-between">
                <Logo/>
              </div>
              <div className="header-center">
                <div className="header-nav">
                  <Link to="#">Equipment</Link>
                  <Link to="#">About Us</Link>
                  <Link to="#">Blog</Link>
                </div>
              </div>
              <div className="header-right">
                <Link to="#">Gallery</Link>
              </div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
