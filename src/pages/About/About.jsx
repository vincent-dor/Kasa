import Banner from "../../components/Banner/Banner";
import CollapseText from "../../components/CollapseText/CollapseText";
import image from "../../assets/images/about-background.png";

export default function About() {
  return (
    <div>
      <Banner imageUrl={image}  showText={false} className="brightness" />
      <CollapseText />
    </div>
  );
}
