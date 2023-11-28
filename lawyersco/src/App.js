import styles from "./App.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import HeroSection from './Components/HeroSection/HeroSection';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <HeroSection/>
    </ThemeProvider>
  );
}

export default App;
