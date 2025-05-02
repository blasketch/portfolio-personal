import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Desarrollador Web Full Stack & Data Scientist";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const pixelVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const name = "Adrian Blasco Lozano";
  const nameArray = name.split('');

  return (
    <Container maxWidth="lg" sx={{ bgcolor: 'background.default' }}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          py: 4,
          bgcolor: 'background.default',
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: 0.5,
          bgcolor: 'background.default',
        }}>
          {nameArray.map((letter, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={pixelVariants}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: 'monospace',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#3f51b5',
                textShadow: '2px 2px 0px #673ab7',
                transform: 'scale(1)',
                display: 'inline-block',
                backgroundColor: 'transparent',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              fontFamily: 'monospace',
              color: 'text.primary',
              minHeight: '2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.default',
            }}
          >
            {text}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              style={{ marginLeft: '4px' }}
            >
              |
            </motion.span>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              textAlign: 'center',
              maxWidth: '600px',
              color: 'text.primary',
              bgcolor: 'background.default',
            }}
          >
            Transformando datos en soluciones innovadoras
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home; 