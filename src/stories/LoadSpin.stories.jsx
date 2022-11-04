import React from "react";
import "./style.css";

import { LoadSpin } from "../components/LoadSpin/LoadSpin";

export default {
    title: "Components-TP1/LoadSpin"
}

const Template = (args) => <LoadSpin {...args}/>;


export const Small = Template.bind({});
Small.args = {
    size: "small"
};

export const Medium = Template.bind({});
Medium.args = {
    
};

export const Large = Template.bind({});
Large.args = {
    size: "large"
};