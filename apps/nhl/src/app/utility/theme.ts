import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {

            main: '#131314 ',

        },
        secondary: {
            main: '#D80B11',
        },
    },
    spacing: factor => `${factor}rem`,
    overrides: {
        MuiSwitch: {

            root: {
                color: "green"
            }

        }
    }
});

export default theme;