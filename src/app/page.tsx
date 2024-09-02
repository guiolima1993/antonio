import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Chance from '../components/Chance'
import HistorySection from '../components/HistorySection';

const Home: NextPage = () => {
  return (
    <>
      <div className="container">
        <Hero />
      </div>
      <Chance />  
      <HistorySection />
    </>
  );
};

export default Home;
