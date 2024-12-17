import React from "react";
import "./Card.scss";

interface CardProps {
  title: string;
  description: string;
  thumbnail?: string;
}

const Card: React.FC<CardProps> = ({ title, description, thumbnail }) => {
  return (
    <div className="card">
      <img
        src={thumbnail || "default-thumbnail.jpg"}
        alt={title}
        className="card-thumbnail"
      />
      <div className="card-content">
        <h3>{title}</h3>
      </div>
      <div className="card-caption">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
