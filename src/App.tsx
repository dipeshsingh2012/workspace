import { FC } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './index.css';
import { 
  Button, 
  StyledEngineProvider, 
  Box, 
  Drawer, 
  AppBar, 
  Toolbar, 
  List, 
  Typography, 
  Divider, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  CssBaseline,
  createTheme,
  ThemeProvider,
  Theme
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';

// Create a theme with a component prefix to avoid class name collisions with the Host
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class'
  }
});

const drawerWidth = 240;

const DashboardLayout: FC<{ basename: string }> = ({ basename }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme: Theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar className="bg-blue-700">
          <DashboardIcon sx={{ mr: 2 }} />
          <Typography variant="h6" noWrap component="div">
            Workspace Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={basename || '/'}>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={`${basename}/about`.replace(/\/+/g, '/') || '/about'}>
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: '100vh', bgcolor: '#f8fafc' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

const Home: FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h1 className="text-2xl font-bold text-slate-800 mb-4">Dashboard Overview</h1>
    <p className="mb-6 text-slate-600">Welcome to your admin panel. This layout combines MUI structure with Tailwind styling.</p>
    <Button variant="contained" className="bg-blue-600 hover:bg-blue-700">
      Action Button
    </Button>
  </div>
);

const About: FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h1 className="text-2xl font-bold text-slate-800">About Workspace</h1>
    <p className="mt-4 text-slate-600">This is a micro-frontend remote application running on React 19.</p>
  </div>
);

interface AppProps {
  basename?: string;
}

function App({ basename = '' }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<DashboardLayout basename={basename} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
