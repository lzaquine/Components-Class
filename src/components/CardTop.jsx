import styled from "styled-components";

const CardTopTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;

  img {
    max-width: 200px;
    max-height: 200px;
  }
`;

function CardTop({ image }) {
  return <CardTopTag>
    <img src={image} alt="beer" />
  </CardTopTag>;
}

export default CardTop;
