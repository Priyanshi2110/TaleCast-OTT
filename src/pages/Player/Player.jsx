import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import TaleCast_spinner from '../../assets/netflix_spinner.gif'
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [videoKey, setVideoKey] = useState(null);
  const[loading,setLoading]=useState(true);
  const [overview, setOverview] = useState("");
  const[description,setdescription] =useState(false);

  // Detect media type from query params or path
  const mediaType = new URLSearchParams(location.search).get("mediaType") || "movie";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODVjZDU5MGJlYTQ2NzY1Yzc5YTNjYTgxNzczNmE5NCIsIm5iZiI6MTc1NDQ1Mzc4My40NzksInN1YiI6IjY4OTJkNzE3ODMxYmU1YTkyMGI3ZmQ5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vn_2c5KRiMkm6iKaaHY1858-bpd0Rh14uf-n2saeEJs", // Replace this with your real TMDB token
    },
  };


  useEffect(() => { 
    const fetchVideo = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${id}/videos?language=en-US`,
          options
        );
        const data = await res.json();
        console.log(data);

        const trailer = data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );

        setVideoKey(trailer?.key);
        const detailRes = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`,
          options
        );
        const detailData = await detailRes.json();
        setOverview(detailData.overview || "No description available.");

      } catch (err) {
        console.error("Failed to fetch trailer:", err);
      }finally{
        setLoading(false);
      }
    };
    fetchVideo();


  }, [id, mediaType]);

  return (
    loading?<div className="login_spinner">
          <img src={TaleCast_spinner} alt="" />
        </div>:
    <div className="player">
      <img
        src={back_arrow_icon}
        onClick={() => navigate(-1)}
        className="back-button"
        alt="Back"
      />

      <div
        className="video-container"
        onMouseEnter={() => setdescription(true)}
        onMouseLeave={() => setdescription(false)}
      >


      {videoKey ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          title="Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <p style={{ color: "white", textAlign: "center" }}>Trailer not available</p>
      )}

       {description && (
          <div className="tooltip">
            {overview}
          </div>
        )}
      </div>

    </div>

  );
};

export default Player;
