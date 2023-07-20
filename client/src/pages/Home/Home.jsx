import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Contact from '../../components/Contact/Contact';
import Slider from '../../components/Slider/Slider'
import './Home.scss';
import Categories from '../../components/Categories/Categories';

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  );
};

export default Home;