/**
 * This code uses following libraries: 
 * @mui/material.
 */
import { 
  createTheme, 
  ThemeOptions, 
  Palette 
} from "@mui/material"
import { palette } from "./palette"

interface IPalette extends Palette {
  neutral: {
    main: string,
    darker: string,
    contrastText: string
  },
  custom: {
    green: string,
    red: string,
    grey: string,
    lightGrey: string
    lightBlue: string,
    lightGreen: string
  }
}

interface IThemeOptions extends ThemeOptions {
  palette: IPalette;
}

export const theme = createTheme({
  palette: {
    neutral: {
      main: "#C9CCD1",
      darker: "#656669",
      contrastText: "#000000"
    },
    custom: {
      green: palette.green,
      red: palette.red,
      grey: palette.grey,
      lightGrey: palette.lightGrey,
      lightBlue: palette.lightBlue,
      lightGreen: palette.lightGreen,
    }
  },
} as IThemeOptions)
