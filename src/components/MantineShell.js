//Using Matine UI to build out frontend.
//Docs: https://mantine.dev/core/app-shell/
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from '../pages/Profile'
import Wallet from '../pages/Wallet'
import Notifications from '../pages/Notifications'
import Discover from '../pages/Discover'
import Home from '../pages/Home'
import Messages from '../pages/Messages'
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import ThemeButton from '../components/ThemeButton'

export default function MantineShell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <ThemeButton/>
        
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text sx={{
        fontSize: 18,

        '&:hover': {
          backgroundColor: '#eee',
        },

        '@media (max-width: 755px)': {
          fontSize: 14,
        },
      }}>DeSo ReactJS Social App Template</Text>
        
          </div>
        </Header>
      }
    >
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
    </AppShell>
  );
}