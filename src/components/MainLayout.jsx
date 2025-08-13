import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { FcLike } from 'react-icons/fc';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <p
        className='footer'
        style={{
          padding: '6px',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        Developed With <FcLike size={'20px'} />
      </p>
    </>
  );
};

export default MainLayout;
