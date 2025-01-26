import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import FlashNews from "./components/FlashNews";
import HeroSection from "./components/HeroSection";
import KeyLinks from "./components/KeyLinks";
import LatestNews from "./components/LatestNews";
import Navbar from "./components/Navbar";
import { grey } from "@mui/material/colors";
import Footer from "./components/Footer";
function App() {
  const theme = createTheme({
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            main: grey[50],
          },
          background: {
            default: grey[900],
            paper: grey[900],
          },
        },
      },
      light: {
        palette: {
          primary: {
            main: grey[900],
          },
          background: {
            default: grey[50],
            paper: grey[50],
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className=" relative">
        <HeroSection />
        <Navbar />
        <FlashNews />
        <KeyLinks />
        <LatestNews />
        {/* <Map /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
