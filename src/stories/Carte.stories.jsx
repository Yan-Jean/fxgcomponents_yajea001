import React from "react";
import "./style.css";

import { Carte } from "../components/Carte/Carte";

export default {
  title: "Components-TP1/Carte",
  component: Carte,
};

const Template = (args) => <Carte {...args} />;
const title =  "European cool girl";
const link = "www.tinder.com";

export const Default = Template.bind({});
Default.args = {
  width: 250,
  title: title,
  description: link,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  width: 250,
  color: "white",
  title: title,
  description: link,
  backgroundColor: "black",
  borderColor: "black",
};

export const Hoverable = Template.bind({});
Hoverable.args = {
  width: 250,
  title: title,
  description: link,
  hoverable: true
};
