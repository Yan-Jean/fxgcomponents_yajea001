import { Steps as EtapeAntd} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';


export const Etape = ({current, labelPlacement, title1, title2, title3,description1 ,description2 ,description3 }) => {
    const { Step } = EtapeAntd;
    return (<>
        <EtapeAntd current={current} labelPlacement={labelPlacement}>
            <Step title={title1} description={description1} />
            <Step title={title2} description={description2} />
            <Step title={title3} description={description3} />
        </EtapeAntd>
    </>);
}


Etape.propTypes = {
    current: PropTypes.string,
    labelPlacement: PropTypes.string,
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
    description1: PropTypes.string,
    description2: PropTypes.string,
    description3: PropTypes.string
};
