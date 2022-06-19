import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";

export default function Header() {
	return (
		<header className="header">
			<div className="header-top">
						<div className="display-flex justify-content-between">
              <div className="header-left display-flex justify-content-between">
                <Logo/>
              </div>
              <div className="header-center">
                <div className="header-nav">
                  <Link to="bizning-jamoa">Bizning jamoa</Link>
                  <Link to="xizmatlar">Xizmatlar</Link>
                  <Link to="biz-haqimizda">Biz Haqimizda</Link>
                </div>
              </div>
              <div className="header-right">
                <Link to="galereya">Galereya</Link>
              </div>
						</div>
			</div>
		</header>
	);
}
