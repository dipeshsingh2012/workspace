import React from 'react';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
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
  CssBaseline 
} from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon, Dashboard as DashboardIcon } from '@mui/icons-material';

const drawerWidth = 240;

const DashboardLayout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
              <ListItemButton component={Link} to="/">
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/about">
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

const Home: React.FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h1 className="text-2xl font-bold text-slate-800 mb-4">Dashboard Overview</h1>
    <p className="mb-6 text-slate-600">Welcome to your admin panel. This layout combines MUI structure with Tailwind styling.</p>
    <Button variant="contained" className="bg-blue-600 hover:bg-blue-700">
      Action Button
    </Button>
  </div>
);

const About: React.FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <h1 className="text-2xl font-bold text-slate-800">About Workspace</h1>
    <p className="mt-4 text-slate-600">This is a micro-frontend remote application running on React 19.</p>
  </div>
);

interface AppProps {
  basename?: string;
}

export function App({ basename = '/' }: AppProps) {
  const router = React.useMemo(() => createBrowserRouter([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
      ],
    },
  ], { basename }), [basename]);

  return (
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  );
}

export default App;
