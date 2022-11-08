import { Alert as AlerteAntd} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

export const Alerte = ({message, type}) => {
    return (<><AlerteAntd message={message} type={type} /></>);
}

Alerte.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
};