import React from "react";
import { Logo } from "../Logo";
export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<div className="logo-title">
								<Logo />
								<p>
									U erga boring va  <br />
									tog'liklar, yashil tabiat va malakali 
                  <br />	shifokorlar yordamida davolaning va
									dam oling!
								</p>
							</div>
							<span>Copyright OQTOSH | 2022</span>
						</div>
						<div className="col-6">
							<div className="row">
								<div className="col-6">
									<h3 className="menu-title">
										Biz bilan bog'lanish
									</h3>
								</div>
								<div className="col-6">
									<h3 className="menu-title">
										Biz ijtimoiy tarmoqlarda
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
