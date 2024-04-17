import { createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: blue[900],
        },
        secondary: {
            main: grey[900],
        }
    }
});

export default theme;