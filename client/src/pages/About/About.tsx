import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box py={8}>
        <Typography variant="h3" component="h2" gutterBottom>
          Sobre mí
        </Typography>
        <Typography variant="body1" paragraph>
          [Tu descripción personal aquí]
        </Typography>
      </Box>
    </Container>
  );
};

export default About; 