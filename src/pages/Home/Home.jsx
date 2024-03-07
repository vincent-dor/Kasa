import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import logementsData from "../../data/logements.json";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(logementsData);
  }, []);

  return (
    <>
      <Banner />
      <div className="cards-container">
        {data.map((logement, id) => (
          <div key={id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
