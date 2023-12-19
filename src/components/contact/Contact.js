import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = () => {
  return (
    <Box
      sx={{
        border: '5px solid black',
        borderRadius: '20px',
        marginTop: '15px',
        marginLeft: '25px',
        marginRight: '25px',
        padding: '30px',
      }}
    >
      <Typography variant='h4'>Contact Details</Typography>
      <Typography variant='caption'>
        You can reach out to me through the following platforms. Please feel
        free to send a message!
      </Typography>
      <Box sx={{ textDecoration: 'none', margin: '20px' }}>
        <Button href='https://github.com/Vishalviswanath' target='_blank'>
          <GitHubIcon />
        </Button>
        <Button
          href='https://www.linkedin.com/in/vishal12viswanath/'
          target='_blank'
        >
          <LinkedInIcon />
        </Button>
        <Button
          href='https://mail.google.com/mail/u/0/#inbox?compose=vishal12viswanath@gmail.com'
          target='_blank'
        >
          <EmailIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
