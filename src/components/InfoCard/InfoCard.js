import React from "react";
import { Card, CardContent } from "@material-ui/core";
import "./InfoCard.css";

const InfoCard = ({ title, cases, total }) => {
  return (
    <Card className="info-card">
      <CardContent>
        <h1>{title}</h1>
        <h2>{cases}</h2>
        <h3>Total Cases : {total}</h3>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
