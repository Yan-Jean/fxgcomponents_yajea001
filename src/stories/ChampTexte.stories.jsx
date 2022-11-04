import React from 'react';
import './style.css'

import { ChampTexte } from '../components/ChampTexte/ChampTexte';

export default {
  title: 'Components-TP1/ChampTexte',
  component: ChampTexte
};

const Template = (args) => <ChampTexte {...args} />;

export const Contour = Template.bind({});
Contour.args = {
    label: "Nom",
    color: "primary",
    defaultValue: "",
    helperText: ""
};

export const Attention = Template.bind({});
Attention.args = {
    label: "Nom",
    variant: "standard",
    color: "warning",
    defaultValue: "123",
    helperText: "Attention!!"
};

export const Succes = Template.bind({});
Succes.args = {
    label: "Nom",
    variant: "filled",
    color: "success",
    defaultValue: "Pierre-Luc",
    helperText: ""
};

