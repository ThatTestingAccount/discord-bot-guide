import React, { Component } from "react";
// import "../stylesheets/App.css";

class MainFooter extends Component {
	render() {
		return (
			<div>
				<div class="footer-build">
					<p className="basic-link-branding">
						&copy;
						<a
							href="https://github.com/DeepWebDevelopers"
							className="basic-link"
							target="blank"
						>
							DeepWebDevelopers
						</a>
					</p>
				</div>
			</div>
		);
	}
}

export default MainFooter;
