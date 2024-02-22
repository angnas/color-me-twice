import { IoIosColorPalette } from "react-icons/io";
import { TbDroplet } from "react-icons/tb";
import { TbDropletFilled } from "react-icons/tb";
import "./Header.css";
import { motion } from "framer-motion"

function Header() {
	return (
        <header className="header">
            <motion.div className="logos"
            drag
            dragConstraints={{
                right: 0,
                left: -5,
                top: 3,
                bottom:3
            }}
            >
                <TbDroplet className="logo" />
                <TbDropletFilled className="logo" />
            </motion.div>
            <p>COLOR ME TWICE</p>
        </header>
    );
}


export default Header;
