import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

type CardProp = {
  id: number;
  imgUrl: string;
  name: string;
  desc: string;
};

export default function CardProduct(props: CardProp) {
  const { id, imgUrl, name, desc } = props;
  const navigate = useNavigate();
  return (
    <Card
      sx={{ width: "80vw", height: "55vw" }}
      onClick={() => navigate(`/stock/${id}`)}
    >
      <CardMedia sx={{ height: "40vw" }} image={imgUrl} title="" />
      <CardContent sx={{ p: "0" }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 0 }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
