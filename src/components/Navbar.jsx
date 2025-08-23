import '../style/navbar-module.css';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { navPages } from '../common/data';
import { useEffect, useState } from 'react';
import { RiMenu4Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import bee from '/images/bee.svg';
import ShinyText from '../common/ShinyText';

const Navbar = () => {
  const MotionLink = motion.create(Link);
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

  const renderNavItems = (isSidebar = false) =>
    navPages.map((list, i) =>
      list.label ? (
        <Link
          key={i}
          to={list.path.startsWith('/') ? list.path : `/${list.path}`}
          onClick={isSidebar ? handleSidebar : undefined}
          style={
            isSidebar
              ? {
                color: 'var(--color7)',
                textDecoration: 'none',
                fontSize: '1rem',
              }
              : {}
          }
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={
              !isSidebar
                ? `nav ${location.pathname ===
                  (list.path.startsWith('/') ? list.path : `/${list.path}`)
                  ? 'active-nav'
                  : ''
                }`
                : ''
            }
            style={isSidebar ? { width: '100%' } : {}}
          >
            {list.label}
          </motion.button>
        </Link>
      ) : null
    );

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <MotionLink
          whileTap={{ scale: 0.99 }}
          className='text-nav'
          id='nav-link'
          to='/'
        >
          <motion.p className='nav-name'>
            <ShinyText
              text='VISHAL'
              disabled={false}
              speed={3}
              className=''
            />
          </motion.p>
          <img className='nav-logo' src={bee} alt='vishal viswanath logo' />
        </MotionLink>

        {!isMediaScreen && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            className='sidenav-cancel'
            onClick={handleSidebar}
            aria-label='Toggle Menu'
          >
            <RiMenu4Fill />
          </motion.button>
        )}

        {isMediaScreen && (
          <motion.ul className='nav-ul'>{renderNavItems()}</motion.ul>
        )}

        {!isMediaScreen && sideBar && (
          <motion.div
            className='sideBar'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.1 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ textAlign: 'right', marginBottom: '10px' }}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleSidebar}
                aria-label='Close Menu'
              >
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
              {renderNavItems(true)}
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
