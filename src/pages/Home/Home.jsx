import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/Mirzapur.webp';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCard from '../../components/TitleCard/TitleCard';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />

      <div className="hero">
        <img src={hero_banner} alt="Mirzapur Banner" className='banner-img' />
        <div className="hero-caption">
          <h1>Mirzapur</h1>
          <p>The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur. His son, Munna, is an unworthy, power-hungry heir who will stop at nothing to inherit his father’s legacy. An incident at a wedding procession forces him to cross paths with Ramakant Pandit, an upstanding lawyer, and his sons, Guddu and Bablu.</p>
          <div className="hero-btn">
            <button className='btn'><img src={play_icon} alt="Play Icon" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="Info Icon" />More Info</button>
          </div>
        </div>
      </div>

      <div className="more-cards">
        <TitleCard title="Popular on TaleCast" category="popular" mediaType="tv" />
        <TitleCard title="Blockbuster Movies" category="now_playing" mediaType="movie" />
        <TitleCard title="Only on TaleCast" category="airing_today" mediaType="tv" />
        <TitleCard title="Top Rated" category="top_rated" mediaType="movie" />
        <TitleCard title="Upcoming Movies" category="upcoming" mediaType="movie" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
