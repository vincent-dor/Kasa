import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Caroussel from "../../components/Caroussel/Caroussel";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
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
      <Caroussel slides={logement.pictures} />
      <p>{logement.title}</p>
      <p>{logement.location}</p>
      <div className="tags-container">
							{logement.tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>

      <Collapse title="Description" description={logement.description} />
      <Collapse title="Equipements" description={logement.equipments} />
    </div>
  );
};

export default DetailCard;
