import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Wallet from './pages/Wallet'
import Notifications from './pages/Notifications'
import Discover from './pages/Discover'
import Home from './pages/Home'
import Messages from './pages/Messages'
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
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/messages" element={ <Messages /> } />
        <Route path="/notifications" element={ <Notifications /> } />
        <Route path="/discover" element={ <Discover /> } />
        <Route path="/wallet" element={ <Wallet/> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
    </MantineShell>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
