import { createTheme } from "@mui/material/styles"
import Colors from "./styles/Colors"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#3cd070",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "large" && {
            minHeight: "3.375rem",
            minWidth: "5rem",
            fontSize: "1.25rem",
            lineHeight: "1",
          }),
          ...(ownerState.size === "medium" && {
            minHeight: "3rem",
            minWidth: "4rem",
            fontSize: "1.1rem",
            lineHeight: "1",
          }),
          ...(ownerState.size === "small" && {
            minHeight: "2.5rem",
            minWidth: "3rem",
            fontSize: "1rem",
            lineHeight: "1",
          }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: Colors.crd.green,
              color: Colors.text.white,
              textTransform: "none",
              boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.16)",
              "&:hover": {
                backgroundColor: Colors.state.primaryBtnHover,
              },
              "&:focus": {
                backgroundColor: Colors.crd.green,
                border: `1.5px solid ${Colors.state.borderFocus}`,
              },
              "&:active": {
                backgroundColor: Colors.state.primaryBtnActive,
              },
              "&.MuiButton-contained.Mui-disabled": {
                backgroundColor: Colors.state.primaryBtnDisabled,
                color: Colors.text.light,
              },
            }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "warning" && {
              backgroundColor: Colors.notice.warning,
              color: Colors.text.white,
              textTransform: "none",
              boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.16)",
              "&:hover": {
                backgroundColor: Colors.state.warningBtnHover,
              },
              "&:focus": {
                backgroundColor: Colors.state.warningBtnActive,
                border: `1.5px solid ${Colors.state.borderFocus}`,
              },
              "&:active": {
                backgroundColor: Colors.state.warningBtnActive,
              },
              "&.MuiButton-contained.Mui-disabled": {
                backgroundColor: Colors.state.warningBtnDisabled,
              },
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "primary" && {
              backgroundColor: Colors.text.white,
              boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.16)",
              border: `1px solid ${Colors.crd.green}`,
              color: Colors.crd.green,
              textTransform: "none",
              "&:hover": {
                backgroundColor: Colors.background.background5,
              },
              "&:focus": {
                backgroundColor: Colors.text.white,
                border: `1.5px solid ${Colors.state.borderFocus}`,
              },
              "&:active": {
                backgroundColor: Colors.background.background5,
                border: `1px solid ${Colors.state.primaryBtnHover}`,
              },
            }),
          ...(ownerState.variant === "text" &&
            ownerState.color === "primary" && {
              textDecoration: "underline",
              color: Colors.crd.green,
              textTransform: "none",
              "&:hover": {
                backgroundColor: Colors.background.background5,
                textDecoration: "underline",
              },
              "&:focus": {
                backgroundColor: Colors.text.white,
                border: `1.5px solid ${Colors.state.borderFocus}`,
                textDecoration: "underline",
              },
              "&:active": {
                backgroundColor: Colors.background.background5,
                textDecoration: "underline",
              },
            }),
        }),
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 8,
})

theme.typography.h1 = {
  fontSize: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}

export default theme
