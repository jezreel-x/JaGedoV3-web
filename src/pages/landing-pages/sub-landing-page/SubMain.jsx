import { useEffect } from 'react';


import Navbar from'./Navbar';
import Home from'./Home';
import About from'./About';
import Story from './Story';
import Values from './Values';
import OurTeam from './OurTeam';
import Footer from './Footer';

const SubPage = () => {

  // start from top when navigated here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="story">
        <Story />
      </div>
      <div id="values">
        <Values />
      </div>
      <div id="ourteam">
        <OurTeam />
      </div>
       <Footer />
    </div>
  );
};

export default SubPage;