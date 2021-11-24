import React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CountryCard = (props) => {
  const onClickCountryHandler = () => {
    props.onClickHandler(props.country)
  }

  return (
    <Box>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea onClick={onClickCountryHandler} component={Link} to={`/${props.country.name.common}`}>
          <CardMedia
            component="img"
            height="140"
            image={`${props.country.flags.png}`}
            alt="flag"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <strong>{props.country.name.common}</strong>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <strong>Population:</strong> {props.country.population.toLocaleString()}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <strong>Region:</strong> {props.country.region}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <strong>Capital:</strong> {props.country.capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
};

export default CountryCard;