import "./ColorBox.css";
// AlphaPicker BlockPicker ChromePicker CirclePicker CompactPicker GithubPicker HuePicker MaterialPicker PhotoshopPicker SketchPicker SliderPicker SwatchesPicker TwitterPicker
import { CirclePicker } from "react-color";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useState } from "react";
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
			<motion.div
			animate = {{
				x: isAnimating ?  "5rem" : "-5rem",
				rotate: isAnimating ?  180 : 0
			}}
			whileHover={{
				scale: 1.5
			}}
			transition = {{
				type: "spring",
				stiffness: 60
			}}
			onClick={() => setIsAnimating(!isAnimating)}
			>
			<CirclePicker className="color-box__picker"
			 color={color} onChange={handleOnChange} />

			</motion.div>
			
		
		</div>
	);
}

export default ColorBox;
