import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layouts from './layout/Layouts';
// import Home from './components/home/Home';
import Aboutme from './components/aboutme/Aboutme';
// import Resume from './components/aboutme/Resume';
import HeroSection from './components/herosection/HeroSection';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      // { path: '/', element: <Home /> },
      { path: 'herosection', element: <HeroSection /> },
      { path: 'about', element: <Aboutme /> },
      // { path: 'resume', element: <Resume /> },
      { path: 'projects', element: <Projects /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
