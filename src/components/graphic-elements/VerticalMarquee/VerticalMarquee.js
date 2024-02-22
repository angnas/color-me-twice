//npm install react-fast-marquee --save
import Marquee from "react-fast-marquee";
import "./VerticalMarquee.css";

export default function VerticalMarquee() {
  return (
    <div className="marquee">
      <Marquee direction="down">
        <p>Complementary colors are the colors that sit on opposite sides of the color wheel &nbsp;</p>
      </Marquee>
    </div>
  );
}