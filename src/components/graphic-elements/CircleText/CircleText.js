import "./CircleText.css";

function CircleText() {
	//"Razzle Dazzle Camouflage: Where Contrasts Meets Invisibility!"
	return (
		<div className="wrapper">
			{/* <img className="img" src="./razzle dazzle.webp"></img> */}
			<svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<path
					className="svg__circle"
					id="circlePath"
					d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
				/>
				<text
					fontSize={"6"}
					className="text"
					style={{
						fontFamily: "var(--ff-rubic)",
						fill: "var(--clr-accent)",
						transition: "fill 1s ease-in-out 1s",
					}}
				>
					<textPath href="#circlePath">
					Color is a form of non-verbal communication.
					</textPath>
				</text>
			</svg>
		</div>
	);
}

export default CircleText;
