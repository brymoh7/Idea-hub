import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './leaderboard.css';
import headerImage from '../../assets/Header.png';
import { RiLogoutBoxLine } from 'react-icons/ri'; // Import the logout icon
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = () => {
    fetch('http://192.168.207.18:1230/api/Employee/GetGeneralLeaderboard')
      .then(response => response.json())
      .then(data => {
        if (data.isSuccessful) {
          setLeaderboardData(data.responseValue);
        } else {
          console.error('Error fetching leaderboard data:', data.responseMessage);
        }
      })
      .catch(error => console.error('Error fetching leaderboard data:', error));
  };

  const handleBack = () => {
    navigate('/employee');
  };

  return (
    <div>
      {/* Use the imported header image */}
      <img src={headerImage} alt="Nav" className='Nav' style={{ width: '100%', display: 'block' }} />
      <button
        className="ml-6 flex items-center text-black" // Change text-white to text-black
        onClick={handleBack}
      >
        <RiLogoutBoxLine className="mr-2" />
        Back
      </button>
      <div className="leaderboard-container">
        {leaderboardData.length > 0 ? (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>Staff Name</TableCell>
                    <TableCell>Staff Email</TableCell>
                    <TableCell>Staff Group</TableCell>
                    <TableCell>Total Coins</TableCell>
                    <TableCell>Likes Count</TableCell>
                    <TableCell>Comments Count</TableCell>
                    <TableCell>Dislikes Count</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leaderboardData.map((item, index) => (
                    <TableRow key={item.LeaderboardId}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.StaffName}</TableCell>
                      <TableCell>{item.StaffEmail}</TableCell>
                      <TableCell>{item.SfaffGroup}</TableCell>
                      <TableCell>{item.TotalCoins}</TableCell>
                      <TableCell>{item.LikesCount}</TableCell>
                      <TableCell>{item.CommentsCount}</TableCell>
                      <TableCell>{item.DisLikesCount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
