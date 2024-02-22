import { motion } from "framer-motion";
import "./Circle.css";
import { useRef } from "react";
import { useFollowPointer } from "./UseFollowPointer.js";

function FollowCircle() {
	const ref = useRef(null);
	const { x, y } = useFollowPointer(ref);
	return (
		<div className="flex">
			<div className="circle">
				<motion.div
					ref={ref}
					className="box"
					animate={{ x, y }}
					transition={{
						type: "spring",
						damping: 3,
						stiffness: 50,
						restDelta: 0.001,
					}}
				/>
			</div>
		</div>
	);
}
export default FollowCircle;
