import styled from 'styled-components';
import { styled as materialStyled } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const CircularProgressStyled = materialStyled(CircularProgress)({
    position: 'absolute',
    left: '25%',
    bottom: '25%',
    width: '50%',
    height: '50%',
});

const SpinnerContainerStyles = styled.article`
    position: absolute;
    left: 25%;
    bottom: 25%;
    width: 50%;
    height: 50%;

`;


export {
    CircularProgressStyled,
    SpinnerContainerStyles
};