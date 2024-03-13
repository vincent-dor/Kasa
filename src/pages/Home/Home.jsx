import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import logementsData from "../../data/logements.json";
import image from "../../assets/images/background-banner.png";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(logementsData);
  }, []);

  return (
    <>
      <Banner imageUrl={image}  showText={true} />
      <div className="cards-container">
        {data.map((logement, id) => (
          <div key={id}>
            <Link to={`/detailcard/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
