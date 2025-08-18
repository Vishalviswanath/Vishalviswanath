import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import Aboutme from '../pages/Aboutme';
import LandingPage from '../pages/LandingPage';
import Contactme from '../pages/Contactme';

export const navPages = [
  { path: '/', label: '', description: <LandingPage /> },
  { path: 'aboutme', label: 'About', description: <Aboutme /> },
  {
    path: 'projects',
    label: 'Projects',
    description: ['My Projects', "Here's a list of my projects."],
  },
  { path: 'contactme', label: 'Contact', description: <Contactme /> },
  // { path: 'techbee', label: 'TechBee' },
];

export const pages = [
  {
    label: '',
    path: '/',
    description: <LandingPage />,
  },
  {
    label: 'about',
    path: 'aboutme',
    description: <Aboutme />,
  },
  {
    label: 'projects',
    path: 'projects',
    description: ['My Projects', "Here's a list of my projects."],
  },
  {
    label: 'contact',
    path: 'contactme',
    description: <Contactme />,
  },
  {
    label: 'techbee',
    path: 'techbee',
    description: ['Contact Me', 'You can contact me here.'],
  },
];
