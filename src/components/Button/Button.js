import React, { useContext, useState } from "react";
import { Context } from "../../ContextProvider";
import chroma from "chroma-js";
import "./Button.css";
function Button() {
	const [buttonText, setButtonText] = useState("START");
	const [currentSection, setCurrentSection] = useState(1);
	const { mixColors, setMixColors, primaryColor, setColor, accentColor, resetToggles } = useContext(Context);
	const handleOnClick = () => {
		const header = document.querySelector(".header");
		// Scroll to the next section
		setCurrentSection((prevSection) => {
			const nextSection = (prevSection % 3) + 1;
			/* Cyclical section index is used when you want to
  cycle through a set of elements or sections in a loop.*/
			const section = document.getElementById(`section${nextSection}`);


			if (section) {
				section.scrollIntoView({ behavior: "smooth" });
				if (nextSection === 1) {
					setButtonText("START");
					setColor("#FFFFFF");
					resetToggles();
					const timeoutId = setTimeout(() => {
						setMixColors({ one: "#000000", two: "#FFFFFF" });
					}, 1000);
					return nextSection;
					
				} else if (nextSection === 2) {
					setButtonText("MIX");
					header.style.top = `-${header.getBoundingClientRect().height}px`;
					
				} else if (nextSection === 3) {
					setButtonText("RESTART");
					header.style.top = "0px";
					setColor(chroma.mix(mixColors.one, mixColors.two).hex());
				}
				return nextSection;
			}
			return prevSection; // Return the current section if the next section doesn't exist
		});
	};
	
	
	return (
		<button onClick={handleOnClick} className="main-button">
			{buttonText}
		</button>
	);
}
export default Button;
