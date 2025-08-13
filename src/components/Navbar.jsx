import '../style/navbar-module.css';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { navPages } from '../common/data';
import { useEffect, useState } from 'react';
import { RiMenu4Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import bee from '/images/bee.svg';


const Navbar = () => {
  const MotionLink = motion(Link);
  const [isMediaScreen, setIsMediaScreen] = useState(window.innerWidth >= 620);
  const [sideBar, setSideBar] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleResize = () => {
      setIsMediaScreen(window.innerWidth >= 620);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSidebar = () => {
    setSideBar((prev) => !prev);
  };

  return (
    <>
      <motion.nav>
        <MotionLink
          whileTap={{ scale: 0.99 }}
          className='text-nav'
          id='nav-link'
          to={'/'}
        >
          <motion.p className='nav-name'>vishal</motion.p>
          <img className='nav-logo' src={bee} alt='vishal viswanath' />
        </MotionLink>

        {!isMediaScreen && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            className='sidenav-cancel'
            onClick={handleSidebar}
          >
            <RiMenu4Fill />
          </motion.button>
        )}

        {isMediaScreen && (
          <motion.ul className='nav-ul'>
            {/* {navPages.map((list, i) =>
              list.label ? (
                <Link key={i} to={list.path}>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    layoutId='underline'
                    className='nav'
                  >
                    {list.label}
                  </motion.button>
                </Link>
              ) : null
            )} */}{navPages.map((list, i) =>
              list.label ? (
                <Link key={i} to={list.path}>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    layoutId='underline'
                    className={`nav ${location.pathname === `/${list.path}` ? 'active-nav' : ''}`}
                  >
                    {list.label}
                  </motion.button>
                </Link>
              ) : null
            )}

          </motion.ul>
        )}

        {!isMediaScreen && sideBar && (
          <motion.div className='sideBar'>
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <motion.button whileTap={{ scale: 0.9 }} onClick={handleSidebar}>
                <IoClose size={20} />
              </motion.button>
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: '0px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              {navPages.map((list, i) =>
                list.label ? (
                  <Link
                    key={i}
                    onClick={handleSidebar}
                    to={list.path}
                    style={{
                      color: 'var(--color7)',
                      textDecoration: 'none',
                      fontSize: '1rem',
                    }}
                  >
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      style={{
                        width: '100%',
                      }}
                    >
                      {list.label}
                    </motion.button>
                  </Link>
                ) : null
              )}
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
