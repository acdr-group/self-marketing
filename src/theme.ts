import {createTheme} from "@mui/material";

export const customTheme = createTheme({
    typography: {
        fontFamily: "var(--default-fontFamily)",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    textTransform: "none",
                    fontSize: "var(--font-normal)",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "var(--space-3)"
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                root: {
                    borderRadius: "var(--space-3)",
                }
            }
        }
    },

    "palette": {
        "primary": {
            "50": "#ede7f6",
            "100": "#d1c4e9",
            "200": "#b39ddb",
            "300": "#9575cd",
            "400": "#7e57c2",
            "500": "#673ab7",
            "600": "#5e35b1",
            "700": "#512da8",
            "800": "#4527a0",
            "900": "#311b92"
        }
    },

});