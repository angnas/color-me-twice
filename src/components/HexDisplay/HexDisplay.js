import "./HexDisplay.css";
import { useContext, useRef } from "react";
import { Context } from "../../ContextProvider";
import Domino from "../graphic-elements/Domino/Domino";

function HexDisplay(props) {
	const { primaryColor, accentColor } = useContext(Context);
	const leftCurl = "{";
	const rightCurl = "}";

	return (
		<div className={props.className}>
			<h1 className="hex-text">
				{props.className === "primary-hex-display" ? primaryColor : accentColor}
			</h1>
			<div className="hex-domino">
				<Domino
					backgroundColor={
						props.className === "primary-hex-display" ? accentColor : primaryColor
					}
				/>
			</div>
			<p>.result {leftCurl} </p>
			<p>
				&nbsp;&nbsp;&nbsp;background-color:{" "}
				{props.className === "primary-hex-display" ? primaryColor : accentColor};{" "}
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;color:{" "}
				{props.className === "primary-hex-display" ? accentColor : primaryColor};
			</p>
			<p>{rightCurl}</p>
		</div>
	);
}

export default HexDisplay;
