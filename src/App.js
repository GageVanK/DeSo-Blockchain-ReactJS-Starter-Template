import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Wallet from './pages/Wallet'
import Notifications from './pages/Notifications'
import Discover from './pages/Discover'
import Home from './pages/Home'
import Messages from './pages/Messages'

function App() {
  return (
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
  );
}

export default App;
