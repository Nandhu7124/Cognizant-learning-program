import React from 'react';

const IndianPlayers = () => {
  const teamPlayers = ['Kohli', 'Rohit', 'Gill', 'Pant', 'Jadeja', 'Bumrah'];

  const evenTeam = teamPlayers.filter((_, index) => index % 2 === 0);
  const oddTeam = teamPlayers.filter((_, index) => index % 2 !== 0);

  const T20players = ['Surya', 'Ishan', 'Samson'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Shaw'];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Even Team Players:</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Odd Team Players:</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged T20 & Ranji Trophy Players:</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
