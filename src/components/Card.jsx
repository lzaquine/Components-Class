import styled from "styled-components";
import CardTop from "./CardTop";
import CardBody from "./CardBody";
import BeerModal from "./BeerModal";
import { useState } from "react"; 

const CardTag = styled.div`
  margin: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: ${({theme}) => theme.color.base};
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 250px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  button {
    padding: 10px;
    background-color: ${({theme}) => theme.color.primary};
    border-radius: 10px;
    box-shadow: none;
    border: none;
    margin: 15px;
    font-weight: bold;
  }
`;

function Card({ beer }) {
  const [isOpen, setIsOpen] = useState(false);

  const getModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  return <>
    <CardTag>
      <CardTop image={beer.image_url} />
      <CardBody beerName={beer.name} />
      <button onClick={() => getModal()}>Check Details</button>
    </CardTag>

    {isOpen && <BeerModal name={beer.name} tagline={beer.tagline} description={beer.description} isOpen={isOpen} onClose={closeModal} />}
  </>;

}

export default Card;
