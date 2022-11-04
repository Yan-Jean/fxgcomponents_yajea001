import React from 'react';
import './style.css'

import { Etape } from '../components/Etape/Etape';

export default {
  title: 'Components-TP1/Etape',
  component: Etape
};

const Template = (args) => <Etape {...args} />;

export const Attente = Template.bind({});
Attente.args = {
  current: "1",
  labelPlacement: "vertical",
    title1: "En attente..",
    title2: "Chargement",
    title3: "Terminé!",
    description1: "",
    description2: "",
    description3: ""
};

export const Chargement = Template.bind({});
Chargement.args = {
  current: "2",
  labelPlacement: "vertical",
    title1: "En attente..",
    title2: "Chargement",
    title3: "Terminé!",
    description1: "",
    description2: "",
    description3: ""
};

export const Termine = Template.bind({});
Termine.args = {
  current: "3",
  labelPlacement: "vertical",
    title1: "En attente..",
    title2: "Chargement",
    title3: "Terminé!",
    description1: "",
    description2: "",
    description3: ""
};
