import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const adetail = () => {
    navigate(`/detail/${props.id}`);
  };
  const { id, name, imagen } = props;
  return (
  <div key={id }>
    <h1>nombre:{name}</h1>
    <img src={imagen} alt={name} />
  </div>);
};
export default Card;
