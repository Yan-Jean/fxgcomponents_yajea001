import React from 'react';
import './style.css'

import { Alerte } from '../components/Alerte/Alerte';

export default {
  title: 'Components-TP1/Alerte',
  component: Alerte
};

//const Template = (args) => <Alerte {...args} />;

export const Succes = Template.bind({});
Succes.args = {
  message: "Vous avez réussi à créer votre alerte!!!",
  type: "success"
};

export const Avertissement = Template.bind({});
Avertissement.args = {
  message: "Avertissement!",
  type: "warning"
};

export const Erreur = Template.bind({});
Erreur.args = {
  message: "Erreur!",
  type: "error"
};
