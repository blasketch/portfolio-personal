import { Container, Typography, Box, Grid } from '@mui/material';

const Projects = () => {
  return (
    <Container>
      <Box py={8}>
        <Typography variant="h3" component="h2" gutterBottom>
          Mis Proyectos
        </Typography>
        <Grid container spacing={4}>
          {/* Aquí irán tus proyectos */}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects; 