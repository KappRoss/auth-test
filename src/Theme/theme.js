import {createMuiTheme} from '@material-ui/core/styles';
import {yellow} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: yellow[500],
        },
        action: {
            active: 'rgb(255,255,0)',
            activatedOpacity: 1,
        },
    },

});

export default theme;