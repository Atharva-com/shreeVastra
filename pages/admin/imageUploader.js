import React from 'react'
import FullLayout from '../../src/layouts/full/FullLayout';
import { ThemeProvider } from "@mui/material/styles";
import { baselightTheme } from "../../src/theme/DefaultColors";

const ImageUploader = () => {
    const theme = baselightTheme;
    return (
      <ThemeProvider theme={theme}>
        <FullLayout>
          All Products 
        </FullLayout>
      </ThemeProvider>
    )
}

export default ImageUploader