import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const YoutubePlayer = ({ embedId, isAutoplay, isPlaying, onStop }) => {
  const [autoPlay, setAutoPlay] = useState(isAutoplay ? 1 : 0);
  const lowestQuality = 'tiny';

  useEffect(() => {
    setAutoPlay(isPlaying ? 1 : 0);
  }, [isPlaying]);

  const srcUrl = `https://www.youtube.com/embed/${embedId}?autoplay=${autoPlay}&vq=${lowestQuality}`;

  const handleStop = () => {
    setAutoPlay(0);
    onStop();
  };

  return (
    <div>
      <iframe
        width="0"
        height="0"
        src={srcUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <button className="stopButton" onClick={handleStop}>Stop</button>
    </div>
  );
};

YoutubePlayer.propTypes = {
  embedId: PropTypes.string.isRequired,
  isAutoplay: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onStop: PropTypes.func.isRequired
};

export default YoutubePlayer;
