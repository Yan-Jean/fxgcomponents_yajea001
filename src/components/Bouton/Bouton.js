import { Button } from "antd";
import React from "react";
import PropTypes from "prop-types";

export const Bouton = ({
  type,
  shape,
  color,
  height,
  width,
  borderColor,
  text1,
  text2,
}) => {
  return (
    <>
      <Button
        type={type}
        shape={shape}
        style={{
          backgroundColor: color,
          height: height,
          width: width,
          borderColor: borderColor,
        }}
      >
        {text1}
        <br />
        {text2}
      </Button>
    </>
  );
};

Bouton.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
