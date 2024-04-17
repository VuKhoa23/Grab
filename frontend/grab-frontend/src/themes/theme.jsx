import { createTheme } from "@mui/material";
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