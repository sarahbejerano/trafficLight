import React, { useState } from "react";
import ReactDOM from "react-dom"; //quiero saber mas sobre ReactDOM cuando se utiliza y cuando no
import "bootstrap";
import "../styles/index.scss";

//create your first component
const trafficLight = () => {
	const [color, setColor] = useState("off");
	let redLight = "bg-danger";
	let yellowLight = "bg-warning";
	let greenLight = "bg-success";
	let off = "bg-dark";

	return (
		<div className={trafficLightBox}>
			<div className={redLight} onClick={() => setColor("redLight")}>
				{color == "yellow" || color == "greenLight" ? (
					<div className={off}>off</div>
				) : (
					<div className={redLight}>on</div>
				)}
			</div>
			<div className={yellowLight}></div>;
			<div className={greenLight}></div>;
		</div>
	);
};

export default trafficLight;
