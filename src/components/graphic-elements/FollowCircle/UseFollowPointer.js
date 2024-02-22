import { useState, useRef, useEffect } from "react";
import FollowCircle from "./FollowCircle";
export function useFollowPointer(ref) {
    const [point, setPoint] = useState({ x: 0, y: 0 });
    useEffect(() => {
      if (!ref.current) return;
      const handlePointerMove = ({ clientX, clientY }) => {
        const element = ref.current;
        const circle = element.parentElement; // Assuming Circle is the parent element
        const x = Math.max(0, Math.min(clientX - circle.offsetLeft - element.offsetWidth / 2, circle.offsetWidth - element.offsetWidth));
      const y = Math.max(0, Math.min(clientY - circle.offsetTop - element.offsetHeight / 2, circle.offsetHeight - element.offsetHeight));
        setPoint({ x, y });
      };
      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [ref]);
    return point;
  }









