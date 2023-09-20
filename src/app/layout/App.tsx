import { useState } from "react";
import Catalog from "../../features/Catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType
    },
  });
  const handleChangeModeDark = () => setDarkMode(!darkMode);
  return (
    //use them
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header darkMode={darkMode} handleChangeModeDark={handleChangeModeDark} />
        <Container >
          <Catalog />
        </Container>
      </ThemeProvider>
    </>

  )
}
export default App;