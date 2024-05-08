import React, { useState } from 'react';
import data from '../Data';

function SearchComponent({ setCurrentSong, setIsPlaying, audioRef }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = data().filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase()) ||
      item.artist.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = song.audio;
      audioRef.current.play();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map(item => (
          <li key={item.id} onClick={() => playSong(item)}>
            <img src={item.cover} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
