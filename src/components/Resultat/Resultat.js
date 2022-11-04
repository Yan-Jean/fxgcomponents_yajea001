import { Button as ButtonAntd, Result as ResultAntd} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

export const Resultats = ({status, title, subTitle, type, key}) => {
    return (<>
        <ResultAntd
            status={status}
            title={title}
            subTitle={subTitle}
            extra={[
                <ButtonAntd type={type} key={key}></ButtonAntd>
            ]}
            />
    </>);
}

Resultats.propTypes = {
    status: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    type: PropTypes.string,
    key: PropTypes.string
};

/*
export const Resultats = ({status1, title, subTitle, type, key1, key2}) => {
    return (<>
        <ResultAntd
            status={status1}
            title={title}
            subTitle={subTitle}
            extra={[
                <ButtonAntd type={type} key={key1}></ButtonAntd>,
                <ButtonAntd key={key2}></ButtonAntd>,
            ]}
            />
    </>);
}


Resultats.propTypes = {
    status1: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    type: PropTypes.string,
    key1: PropTypes.string,
    key2: PropTypes.string
};
*/