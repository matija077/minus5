import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
        // Purple and green play nicely together.
        main: '#131314 ',
        },
        secondary: {
        // This is green.A700 as hex.
        main: '#a20338',
        },
    },
});

export default theme;