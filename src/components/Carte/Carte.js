import { Card } from "antd";
import React from "react";
import PropTypes from "prop-types";


// const { Meta } = Card;
export const Carte = ({
  width,
  title,
  description,
  color,
  backgroundColor,
  borderColor,
  hoverable,
}) => {
  return (
    <>
      <Card
        hoverable = {hoverable}
        style={{
          width: width,
          color: color,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <h4 style={{color : color}} >{title}</h4>
        <p><a href={description}>{description}</a></p>
      </Card>
    </>
  );
};

Carte.PropTypes = {
  width: PropTypes.number,
  title: PropTypes.number,
  description: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  hoverable: PropTypes.bool,
};
