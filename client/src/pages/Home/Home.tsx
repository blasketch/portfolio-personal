import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Bienvenido a mi Portfolio
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Desarrollador Web Full Stack
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 