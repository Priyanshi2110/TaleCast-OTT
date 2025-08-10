import React, { useEffect, useRef, useState } from 'react';
import './TitleCard.css';
import { useNavigate } from 'react-router-dom';

const TitleCard = ({ title = "Popular on TaleCast", category = "now_playing", mediaType = "movie" }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const navigate = useNavigate();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODVjZDU5MGJlYTQ2NzY1Yzc5YTNjYTgxNzczNmE5NCIsIm5iZiI6MTc1NDQ1Mzc4My40NzksInN1YiI6IjY4OTJkNzE3ODMxYmU1YTkyMGI3ZmQ5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vn_2c5KRiMkm6iKaaHY1858-bpd0Rh14uf-n2saeEJs'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/${mediaType}/${category}?language=en-US&page=1`, options);
        const data = await res.json();
        setApiData(data.results || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    const cards = cardsRef.current;
    if (cards) {
      cards.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (cards) {
        cards.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category, mediaType]);

  return (
    <div className='title-card'>
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => navigate(`/player/${mediaType}/${card.id}`)}
          >
            <img
              src={card.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
                : 'https://via.placeholder.com/500x281?text=No+Image'}
              alt={card.original_title || card.original_name || "No Title"}
            />
            <p>{card.original_title || card.original_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
