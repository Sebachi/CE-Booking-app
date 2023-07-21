import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({prop}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={prop.image}
          alt={prop.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {prop.name}
          <br />
          <span>{prop.rating}⭐</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>{prop.pricepernight}</span>
            <span> {prop.idCategory} </span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}