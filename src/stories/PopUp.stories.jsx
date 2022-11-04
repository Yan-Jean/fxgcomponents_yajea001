import React from "react";
import "./style.css";
import {PopUp} from "../components/PopUp/PopUp";

export default {
    title: "Components-TP1/PopUp",
    component: PopUp,
};

const Template = (args) => <PopUp {...args}/>;

export const Basic = Template.bind({});
Basic.args = {
    title: "Basic modal",
   
};

export const Centered = Template.bind({});
Centered.args = {
    title: "Centered modal",
    centered: true,
   
};

export const Warning = Template.bind({});
Warning.args = {
    danger: true,
}