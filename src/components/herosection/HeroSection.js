import { Box, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
import React from 'react';

const HeroSection = () => {
  return (
    <Box
      sx={{
        padding: '40px',
        height: '30rem',
        border: '5px solid black',
        borderRadius: '20px',
        marginTop: '15px',
        marginLeft: '25px',
        marginRight: '25px',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <img src={'/assets/profile.png'} width={400} height={400} alt='png' />
      <Typography sx={{ width: '40%' }}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Hi...<br/>')
              .pauseFor(1000)
              .typeString('I specialize in UI and Frontend Development')
              .pauseFor(1000)
              .deleteChars(43)
              .typeString(
                "I'm passionate about crafting user-friendly websites with a focus on exceptional user experiences."
              )
              .pauseFor(900)
              .deleteAll()
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
    </Box>
  );
};

export default HeroSection;
