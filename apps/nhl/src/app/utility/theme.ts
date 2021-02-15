import { createMuiTheme } from '@material-ui/core/styles';

const theme = (darkMode: boolean) => createMuiTheme({
    palette: {
        primary: {

            main: darkMode? '#131314': "#FFFFFF"

        },
        secondary: {
            main: "#D80B11",
        },
        type: darkMode ? "dark" : "light"
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