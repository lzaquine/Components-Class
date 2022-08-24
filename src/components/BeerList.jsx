import {toast, ToastContainer} from "react-toastify"
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const ListTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  `;

function BeerList() {
  const [beers, setBeers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const getBeers = async () => {
    try {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      setBeers(response.data);

      toast.success("Got Beers!", {
        position: "top-center",
        autoClose: 2000,
        closeButton: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        closeButton: true,
        closeOnClick: true,
        pauseOnHover: true,
      })
      setErrorMessage(error.response.data.message);
    }
  }

  useEffect(() => {
    getBeers();
  } , []);

  return <ListTag>
    <ToastContainer />
    {
      beers ? (
        beers.map((beer) => <Card beer={beer}/>)
      ) : (
        <p>{errorMessage}</p>
      )}
  </ListTag>;
}

export default BeerList;
