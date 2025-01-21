import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function PastEventsCard({ image, title, description }) {
  return (
    <Card className="max-w-sm mx-auto border shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Event Image"
          className="rounded-t-lg object-cover"
        />
        <CardContent className="p-4">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-lg font-bold text-gray-800"
          >
            {title}
          </Typography>
          <Typography variant="body2" className="text-sm text-gray-600">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
