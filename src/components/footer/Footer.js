import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1D1D1D',
        color: 'white',
        border: '5px solid #1D1D1D',
        borderRadius: '20px',
        marginTop: '15px',
        marginBottom: '15px',
        marginLeft: '25px',
        marginRight: '25px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h6'>{'<OnlyCode/>'}</Typography>
    </Box>
  );
};

export default Footer;
