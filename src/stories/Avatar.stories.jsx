import React from 'react';
import './style.css'

import { Avatars } from '../components/Avatar/Avatar';

export default {
  title: 'Components-TP1/Avatar',
  component: Avatars
};

const Template = (args) => <Avatars {...args} />;

export const Petit = Template.bind({});
Petit.args = {
    alt: "Roger",
    src: "assets/img/Roger.jpg",
    width: 24,
    height: 24
};

export const Moyen = Template.bind({});
Moyen.args = {
    alt: "Roger",
    src: "assets/img/Roger.jpg",
    width: 48,
    height: 48
};

export const Grand = Template.bind({});
Grand.args = {
    alt: "Roger",
    src: "assets/img/Roger.jpg",
    width: 64,
    height: 64
};


