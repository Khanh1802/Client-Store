import { useState } from "react";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
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
          <Outlet />
        </Container>
      </ThemeProvider>
    </>

  )
}
export default App;