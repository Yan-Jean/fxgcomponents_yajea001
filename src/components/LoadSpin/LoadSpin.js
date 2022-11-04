import { Space, Spin } from "antd";
import React from "react";
import PropTypes from "prop-types";

export const LoadSpin = ({ size }) => {
  return <Spin size={size} />;
};

LoadSpin.PropTypes = {
    size: PropTypes.string
}
