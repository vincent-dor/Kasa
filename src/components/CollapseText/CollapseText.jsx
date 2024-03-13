import React from "react";
import Collapse from "../../components/Collapse/Collapse";

const CollapseText = () => {
  return (
    <div>
      <Collapse title="Fiabilité" content={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrements vérifiées par nos équipes. </p>} />
      <Collapse title="Respect" content={<p>La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} />
      <Collapse title="Service" content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} />
      <Collapse
        title="Sécurité"
        content={
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les stantdards sont
            bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        }
      />
    </div>
  );
};

export default CollapseText;
