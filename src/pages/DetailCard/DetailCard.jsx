import { useParams } from "react-router-dom";

const DetailCard= () => {

  const { id } = useParams();
  return <p>test{id}</p>;
}
  



export default DetailCard;