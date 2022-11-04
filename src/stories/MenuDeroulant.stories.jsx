import React from 'react';
import './style.css'

import { MenuDeroulant } from '../components/MenuDeroulant/MenuDeroulant';

export default {
  title: "Components-TP1/MenuDeroulant",
  component: MenuDeroulant,
};

const Template = (args) => <MenuDeroulant {...args} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    item1: "Hot-Dog",
    item2: "Poutine",
    item3: "Hamburger",
    placement: "bottomLeft",
};

export const Bottom = Template.bind({});
Bottom.args = {
    item1: "Pizza",
    item2: "Lasagne",
    item3: "Spaghetti",
    placement: "bottom",
};

export const Right = Template.bind({});
Right.args = {
    item1: "Shish Taouk",
    item2: "Shawarma",
    item3: "Falafel",
    placement: "right",
};