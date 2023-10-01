import { useEffect, useState } from "react";
import Header from "./Header";
import { CircularProgress, Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import agent from "../api/agent";
function App() {
  const [loading, setLoading] = useState(true);
  const { setBasket } = useStoreContext();
  useEffect(() => {
    const buyerId = getCookie("buyerId")
    if (buyerId) {
      agent.Basket.basket()
        .then(basket => setBasket(basket))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [setBasket])
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType
    },
  });
  const handleChangeModeDark = () => setDarkMode(!darkMode);

  if (loading) {
    <CircularProgress />
  }

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