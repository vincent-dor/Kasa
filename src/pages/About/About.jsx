import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import image from "../../assets/images/about-background.png";
import aboutText from "../../data/aboutText.json";

const About = () => {
  return (
    <div>
      <Banner imageUrl={image} showText={false} className="brightness" />
      {aboutText.map((about, id) => (
        <Collapse key={id} title={about.title} description={about.description} />
      ))}
    </div>
  );
};

export default About;
