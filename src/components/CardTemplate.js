import { useState } from "react";
import { Card } from "react-bootstrap";

const CardTemplate = (props) => {
  return (
    <>
      <Card style={props.styles}>
        <Card.Img
          variant="top"
          alt="avtar"
          src={!props.item.image ? "#" : props.item.image}
          style={{ width: "auto", height: "6.5rem" }}
        />
        <Card.Body>
          <Card.Text
            style={{ fontSize: ".8rem" }}
            className="text-center text-capitalize font-weight-bold"
          >
            {props.item.type}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardTemplate;
