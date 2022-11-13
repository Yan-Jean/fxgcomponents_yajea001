import React from 'react';
import './style.css'

import { Bouton } from '../components/Bouton/Bouton';

export default {
  title: 'Components-TP1/Bouton',
  component: Bouton
};

const Template = (args) => <Bouton {...args} />;

export const Start = Template.bind({});
Start.args = {
  type: "primary",
  shape: "circle",
  text1: "START",
  color: "green",
  borderColor:"black",
  height: 45,
  width: 50
};

export const Eject = Template.bind({});
Eject.args = {
  type: "default",
  shape: "default",
  text1: "EJECT",
  color: "red",
  borderColor:"black",
};

export const Destroy = Template.bind({});
Destroy.args = {
  type: "danger",
  shape: "circle",
  text1: "AUTO", 
  text2: "DESTROY", 
  color: "red",
  borderColor:"black",
  height: 80,
  width: 80,
};

export const Patate = Template.bind({});
Patate.args = {
  type: "danger",
  shape: "circle",
  text1: "Patati", 
  text2: "Patata", 
  color: "red",
  borderColor:"black",
  height: 80,
  width: 80,
};

