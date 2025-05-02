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
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        background: darkMode 
          ? 'linear-gradient(90deg, #1a237e 0%, #311b92 100%)'
          : 'linear-gradient(90deg, #3f51b5 0%, #673ab7 100%)',
        color: 'white'
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 2, margin: '0 auto' }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: darkMode 
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease',
                  color: '#FFD700'
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
          sx={{ 
            ml: 2,
            '&:hover': {
              backgroundColor: darkMode 
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(255, 255, 255, 0.2)'
            }
          }}
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
