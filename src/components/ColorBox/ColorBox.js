import "./ColorBox.css";
// AlphaPicker BlockPicker ChromePicker CirclePicker CompactPicker GithubPicker HuePicker MaterialPicker PhotoshopPicker SketchPicker SliderPicker SwatchesPicker TwitterPicker
import { CirclePicker } from "react-color";
import { useContext } from "react";
// same as in app, importing our context 
import { Context } from "../../ContextProvider";


function ColorBox(props) {
	// saying we want to use our setMixColors function and mixColors varieble from context
	const {  mixColors, setMixColors } = useContext(Context);

	// api needs a color varieble so we just make one empty
	const color = "";


	function handleOnChange(color) {
		props.color === mixColors.one
			? setMixColors({ ...mixColors, one: color.hex })
			: setMixColors({ ...mixColors, two: color.hex });
			//  If prop.color === mixColors.one (default black) then change the one operator, else change the two 
	}

	return (
		// prop.color default value white and black
		<div className="color-box" style={{ backgroundColor: props.color }}>
			<CirclePicker className="color-box__picker" color={color} onChange={handleOnChange} />
		</div>
	);
}

export default ColorBox;
