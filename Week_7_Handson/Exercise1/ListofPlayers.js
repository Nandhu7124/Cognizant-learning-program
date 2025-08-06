import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 95 },
    { name: 'Rohit Sharma', score: 88 },
    { name: 'Shubman Gill', score: 67 },
    { name: 'KL Rahul', score: 75 },
    { name: 'Rishabh Pant', score: 62 },
    { name: 'Hardik Pandya', score: 91 },
    { name: 'Ravindra Jadeja', score: 55 },
    { name: 'Jasprit Bumrah', score: 85 },
    { name: 'Mohammed Siraj', score: 45 },
    { name: 'Yuzvendra Chahal', score: 78 },
    { name: 'Shreyas Iyer', score: 73 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>

      <h3>Players with Score Below 70</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
