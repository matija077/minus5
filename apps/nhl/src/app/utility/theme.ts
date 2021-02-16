import { createMuiTheme } from '@material-ui/core/styles';

const theme = (darkMode: boolean) => createMuiTheme({
    palette: {
        primary: {

            main: "#FFFFFF"

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

// some of the colors used by material fin dark mode
const darkModeColors = {
    darkGrey: "#303030",
    lightGrey: "#424242",
    white: "#FFFFFF"
}

export {
    darkModeColors
}

export default theme;