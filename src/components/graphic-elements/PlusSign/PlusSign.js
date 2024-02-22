import "./PlusSign.css";
import { useContext } from "react";
import { Context } from "../../../ContextProvider";

function PlusSign() {
	const { mixColors } = useContext(Context);

	return (
		<div className="plus">
			<div className="x" style={{ backgroundColor: mixColors.two }}></div>
			<div className="y" style={{ backgroundColor: mixColors.two }}></div>
			<div className="y" style={{ backgroundColor: mixColors.one }}></div>
			<div className="x" style={{ backgroundColor: mixColors.one }}></div>
		</div>
	);
}

export default PlusSign;
