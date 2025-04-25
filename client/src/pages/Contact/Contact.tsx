import { Container, Typography, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Box py={8}>
        <Typography variant="h3" component="h2" gutterBottom>
          Contacto
        </Typography>
        {/* Aquí irá tu formulario de contacto */}
      </Box>
    </Container>
  );
};

export default Contact; 