import styled from 'styled-components';
import { AppBar, GridList} from '@material-ui/core';


const MainContainerStyled = styled.main`
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