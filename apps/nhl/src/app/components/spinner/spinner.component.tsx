import React from 'react';

import { CircularProgressStyled, SpinnerContainerStyles } from './spinner.styles';

type SpinnerPropsType = {

}

function Spinner(props: SpinnerPropsType) {
    return (
        <SpinnerContainerStyles>
            <CircularProgressStyled
                style={{}}
            ></CircularProgressStyled>
        </SpinnerContainerStyles>
    );

}

export default Spinner;