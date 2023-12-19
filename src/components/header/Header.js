import { AppBar, Box, Tab, Tabs, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
const MenuItems = ['home', 'about', 'projects', 'contact'];

const Header = () => {
  const [value, setValue] = useState();

  const handleScrollTo = (index) => {
    setValue(index);
    scroll.scrollTo(index * window.innerHeight);
  };

  return (
    <React.Fragment>
      <AppBar
        sx={{
          backgroundColor: 'transparent',
          boxShadow: '0',
          position: 'sticky',
        }}
      >
        <Toolbar
          sx={{
            height: '70px',
            border: '5px solid black',
            borderRadius: '20px',
            marginTop: '15px',
            marginLeft: '25px',
            marginRight: '25px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              color: 'black',
            }}
          >
            <Tabs
              value={value}
              onChange={(e, val) => setValue(val)}
              sx={{ textDecoration: 'none' }}
            >
              {MenuItems.map((item, index) => (
                <Tab
                  sx={{
                    fontFamily: 'monospace',
                    fontStyle: 'italic',
                    fontWeight: '800',
                    letterSpacing: '3px',
                    // textDecoration: 'none',
                    // ':hover': {
                    //   border: '2px solid black',
                    //   borderRadius: '20px',
                    // },
                  }}
                  LinkComponent={Link}
                  to={item === 'home' ? '/' : `/${item}`}
                  label={item}
                  onClick={() => handleScrollTo(index)}
                  key={item}
                />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
