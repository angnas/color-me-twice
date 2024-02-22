import { useEffect } from "react";
const useDisableTouchScroll = () => {
	useEffect(() => {
		const preventTouchScroll = (e) => {
			e.preventDefault();
		};
		document.addEventListener("touchmove", preventTouchScroll, {
			passive: false,
		});
		return () => {
			document.removeEventListener("touchmove", preventTouchScroll);
		};
	}, []);
};
export default useDisableTouchScroll;
