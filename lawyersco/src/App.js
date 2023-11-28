import styles from "./App.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import HeroSection from './Components/HeroSection/HeroSection';
import IntroSection from "./Components/IntroSection/IntroSection";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <HeroSection/>
      <IntroSection/>
    </ThemeProvider>
  );
}

export default App;
