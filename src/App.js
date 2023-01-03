
import MantineShell from './components/MantineShell'
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider} from '@mantine/core';

function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }

  return (
  <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
  <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
    <MantineShell>
    </MantineShell>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
