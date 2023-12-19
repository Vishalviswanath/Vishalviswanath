import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutme = () => {
  const navigate = useNavigate();
  return (
    <Box
      component={'div'}
      sx={{
        border: '5px solid black',
        borderRadius: '30px',
        marginTop: '15px',
        marginLeft: '25px',
        marginRight: '25px',
        padding: '30px',
      }}
    >
      <Typography
        variant='h4'
        sx={{
          marginBottom: '20px',
          textDecoration: 'underline',
          textUnderlineOffset: '10px',
          fontFamily: 'sans-serif',
        }}
      >
        About
      </Typography>
      <Typography component='article' color='text.secondary'>
        <p>
          Allow me to introduce myself. I am a front-end/UI developer with
          extensive experience in ReactJS. Throughout my career, I have honed my
          skills and expertise in creating visually appealing and user-friendly
          interfaces using this powerful JavaScript library.
        </p>
        <br />
        <p>
          With a deep understanding of ReactJS, I have successfully developed
          and implemented various projects, leveraging its capabilities to
          deliver seamless and responsive web applications. My proficiency in
          building interactive user interfaces has allowed me to enhance the
          overall user experience and engagement.
        </p>
        <br />
        <p>
          I have a strong grasp of modern web development principles, including
          HTML5, CSS3, JavaScript, and responsive design. By staying up-to-date
          with the latest industry trends and best practices, I ensure that the
          websites I create are not only visually appealing but also optimized
          for performance across different devices and browsers.
        </p>
        <br />
        <p>
          In addition to my technical skills, I am highly collaborative and
          possess excellent problem-solving abilities. Working closely with
          cross-functional teams, I strive to understand project requirements
          thoroughly and translate them into efficient code that meets both
          functional and aesthetic objectives.
        </p>
        <br />
        <p>
          Overall, my experience as a front-end/UI developer specializing in
          ReactJS enables me to create dynamic interfaces that elevate user
          experiences while maintaining clean code standards.
        </p>
      </Typography>
      <Button onClick={() => navigate('/resume')}>Resume</Button>
    </Box>
  );
};

export default Aboutme;
