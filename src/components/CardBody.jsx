import styled from "styled-components";

const CardBodyTag = styled.div`
  padding: 2px, 16px;
  margin: 15px;
`;

function CardBody({beerName}) {
  return <CardBodyTag>
  <hr />
  <h4>{beerName}</h4>
  </CardBodyTag>
}

export default CardBody;
