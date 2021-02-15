import styled from 'styled-components';
import { AppBar, GridList} from '@material-ui/core';
import Container from '@material-ui/core/Container';


const MainContainerStyled = styled(Container)`
     @media screen and (max-width: 680px), screen and (max-height: 680px) {
        padding: 10px;
    }
`;

const AppBarStyled = styled(AppBar)`
    position: sticky;
`;

const GridListStyled = styled(GridList)`

`;

export {
    AppBarStyled,
    MainContainerStyled,
    GridListStyled
};