import { useParams } from 'react-router-dom';
import { pages } from '../common/data';
import '../style/Index-module.css';
import { motion } from 'framer-motion';
import DotGrid from '../common/DotGrid';

const Index = () => {
  const { path } = useParams();

  const page = path
    ? pages.find((page) => page.path === path)
    : pages.find((page) => page.path === '/');

  if (path && !page) {
    return (
      <section className='not-found'>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </section>
    );
  }

  return (
    <section className='main-index'>
      <div className='content-wrapper'>

        <h1 className='page-label'>{page.label}</h1>
        <section className='page-description'>
          {Array.isArray(page.description) ? (
            page.description.map((list, i) => (
              <motion.div key={i} style={{ height: "100%" }}>{list}</motion.div>
            ))
          ) : (
            <motion.div>

              {page.description}
            </motion.div>)}
        </section>

      </div>
    </section>
  );
};

export default Index;
