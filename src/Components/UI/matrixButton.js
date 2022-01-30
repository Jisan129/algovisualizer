import React from "react";
import "./style.css"

export default class UnitButton extends React.Component {
	render() {
		console.log("button")
		return (
			<div className="Button">
				<button>
					Click Me
				</button>
			</div>
		)
	}
}