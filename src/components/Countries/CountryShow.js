import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";

import "./CountryShow.css";
import axios from "axios";

const CountryShow = (props) => {
  const [showCountry, setShowCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const paramsCountryName = useParams();

  // grab params
  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v3.1/name/${paramsCountryName.name}?fullText=true`
      )
      .then((resp) => {
        // console.log(resp.data[0])
        setShowCountry(resp.data[0]);
        setIsLoading(false);
      })
      .catch((resp) => {
        console.log(resp);
      });
  }, []);



  return (
    <>
      {isLoading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          mt={4}
          mb={4}
        >
          <LoadingButton loading variant="text" />
        </Box>
      ) : (
        <Container maxWidth="xl">
          <Box mt={3} mb={3}>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              component={Link}
              to="/"
            >
              back
            </Button>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            mt={4}
            mb={4}
          >
            <img className="country_show__flag" src={showCountry.flags.png} />
            <Box>
              <Typography variant="h6">{showCountry.name.common}</Typography>
              <Typography variant="body1">
                <strong>Native Name:</strong> {showCountry.name.native}
              </Typography>
              <Typography variant="body1">
                <strong>Population:</strong>{" "}
                {showCountry.population.toLocaleString()}
              </Typography>
              <Typography variant="body1">
                <strong>Region:</strong> {showCountry.region}
              </Typography>
              <Typography variant="body1">
                <strong>Sub Region:</strong> {showCountry.subregion}
              </Typography>
              <Typography variant="body1">
                <strong>Capital:</strong> {showCountry.capital}
              </Typography>
              <Typography variant="body1">
                <strong>Top Level Domain:</strong> {showCountry.tld}
              </Typography>
              <Typography variant="body1">
                <strong>Currencies:</strong>{} 
              </Typography>
              <Typography variant="body1">
                <strong>Languages:</strong>
              </Typography>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default CountryShow;
