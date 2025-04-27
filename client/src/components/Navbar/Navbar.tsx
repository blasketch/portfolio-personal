import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material'; // Iconos para modo oscuro y claro

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const navItems = [
    { title: 'Inicio', path: '/' },
    { title: 'Sobre mí', path: '/about' },
    { title: 'Proyectos', path: '/projects' },
    { title: 'Contacto', path: '/contact' }
  ];

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 2, margin: '0 auto' }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              {item.title}
            </Button>
          ))}
        </Box>
        
        {/* Botón para cambiar entre modo claro y oscuro */}
        <IconButton 
          color="inherit" 
          onClick={() => setDarkMode(!darkMode)} 
          sx={{ ml: 2 }}
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
