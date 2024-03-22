import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SongData from '../Songs.json';
import YoutubePlayer from './YoutubePlayer';

const colors = ['#a33737', '#812d6f', '#337a39', '#345d92', '#9b791d'];
const songsPerPage = 3;

const SongList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const currentPage = parseInt(params.get('page')) || 1;

  const startIndex = (currentPage - 1) * songsPerPage;
  const endIndex = startIndex + songsPerPage;
  const currentSongs = Object.values(SongData).slice(startIndex, endIndex);

  const totalPages = Math.ceil(Object.keys(SongData).length / songsPerPage);

  const [playingSong, setPlayingSong] = useState(null);

  const playSong = (songId) => {
    if (playingSong) {
      setPlayingSong(null);
    }

    setPlayingSong(songId);
  };

  const stopSong = () => {
    setPlayingSong(null);
  };

  return (
    <div>
      <div style={{ marginBottom: '100px' }}>
        {currentSongs.map((song, index) => (
          <div key={index} className="webComponent-2" style={{ backgroundColor: colors[index % colors.length] }}>
            <div className="webComponent-inside-container">
              <div className="spinning-vinyl-container">
                <div className="vinyl-disc" />
              </div>
              <img src={song.songCover} alt={song.songTitle} className="webComponent-image" />
              <h2>{song.songTitle}</h2>
              <p>{playingSong === song.songId ? 'Playing' : 'Stopped'}</p>
              <button className="playButton" onClick={() => playSong(song.songId)}>Play</button>
              <YoutubePlayer
                embedId={song.songId}
                isPlaying={playingSong === song.songId}
                isAutoplay={false}
                onStop={stopSong}
              />
            </div>
          </div>
        ))}
      </div>
      <div className='pagination-container' style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '999' }}>
        <Link to={`?page=${currentPage > 1 ? currentPage - 1 : 1}`} className="layoutButton" disabled={currentPage === 1}>Previous</Link>
        <Link to={`?page=${currentPage < totalPages ? currentPage + 1 : totalPages}`} className="layoutButton" disabled={currentPage === totalPages}>Next</Link>
      </div>
    </div>
  );
};

export default SongList;
