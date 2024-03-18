import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import logementsData from "../../data/logements.json";

const DetailCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logementsData.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/error");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div>
      <Slideshow slides={logement.pictures} />
      <div className="information">
        <div className="information__container">
          <h1 className="title">{logement.title}</h1>
          <h2 className="title__location">{logement.location}</h2>
          <div className="tags">
            {logement.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className="ratingHost">
          <Rating rating={logement.rating} />
          <Host hostName={logement.host.name} hostPic={logement.host.picture} />
        </div>
      </div>

      <div className="collapse__detailrow">
        <Collapse title="Description" description={logement.description} detailCardClassName="collapse__detail" />
        <Collapse title="Equipements" description={logement.equipments} className="equipment" detailCardClassName="collapse__detail" />
      </div>
    </div>
  );
};

export default DetailCard;
