import React from 'react';
import './style.css'

import { Resultats } from '../components/Resultat/Resultat';

export default {
  title: 'Components-TP1/Resultat',
  component: Resultats
};

const Template = (args) => <Resultats {...args} />;

export const Succes = Template.bind({});
Succes.args = {
    status:"success",
    title: "Votre achat a été complété avec succès!",
    subTitle: "Numéro de commande : 1234567890",
    type: "primary",
    key: "console"
};

export const Probleme = Template.bind({});
Probleme.args = {
    status:"warning",
    title: "Il y a eu un problème avec votre commande!",
    subTitle: "Numéro de commande : 1234567890",
    type: "primary",
    key: "console"
};

export const Erreur = Template.bind({});
Erreur.args = {
    status:"error",
    title: "Erreur!",
    subTitle: "Numéro de commande : 1234567890",
    type: "primary",
    key: "console"
};

