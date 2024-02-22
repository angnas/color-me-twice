//npm install animejs --save
import anime from "animejs";

import "./StaggeringAnimation.css";

function StaggeringAnimation() {
	function handleOnClick() {
		anime({
			targets: ".staggering-grid .el",
			scale: [
				{ value: 0.1, easing: "easeOutSine", duration: 500 },
				{ value: 1, easing: "easeInOutQuad", duration: 1200 },
			],
			delay: anime.stagger(200, { grid: [11, 4], from: "center" }),
		});
		return anime;
	}

	return (
		<>
			<div className="staggeringAnimation" onMouseOver={handleOnClick}>
				<div class="staggering-content staggering-grid" >
					<div class="grid-square">
						<div class="small square el squareOp-10"></div>
						<div class="small square el squareOp-10"></div>
						<div class="small square el squareOp-10"></div>
						<div class="small square el squareOp-10"></div>
						<div class="small square el squareOp-10"></div>
						<div class="small square el squareOp-10"></div>
						<div class="small square el squareOp-25"></div>
						<div class="small square el squareOp-25"></div>
						<div class="small square el squareOp-25"></div>
						<div class="small square el squareOp-25"></div>
						<div class="small square el squareOp-25"></div>
						<div class="small square el squareOp-25"></div>
						<div class="small square el squareOp-45"></div>
						<div class="small square el squareOp-45"></div>
						<div class="small square el squareOp-45"></div>
						<div class="small square el squareOp-45"></div>
						<div class="small square el squareOp-45"></div>
						<div class="small square el squareOp-45"></div>
						<div class="small square el squareOp-75"></div>
						<div class="small square el squareOp-75"></div>
						<div class="small square el squareOp-75"></div>
						<div class="small square el squareOp-75"></div>
						<div class="small square el squareOp-75"></div>
						<div class="small square el squareOp-75"></div>
						<div class="small square el"></div>
						<div class="small square el"></div>
						<div class="small square el"></div>
						<div class="small square el"></div>
						<div class="small square el"></div>
						<div class="small square el"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default StaggeringAnimation;
