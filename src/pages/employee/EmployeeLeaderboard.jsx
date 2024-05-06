import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './leaderboard.css';
import headerImage from '../../assets/Header.png';
import { RiLogoutBoxLine } from 'react-icons/ri'; // Import the logout icon
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import arrowDown from '../../assets/arrow-down.svg'
import a1 from '../../assets/a1.svg'
import a2 from '../../assets/a2.svg'
import a3 from '../../assets/a3.svg'
import coin from '../../assets/coin.svg'
import bolt from '../../assets/bolt.svg'




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
      <Navbar />
      {/* Use the imported header image */}
      {/* <img src={headerImage} alt="Nav" className='Nav' style={{ width: '100%', display: 'block' }} /> */}
      <div className='py-[130px] bg-[#F2F3F5] min-h-screen'>
        <div className=' w-[90%] mx-auto'>
          {/* <button
            className="ml-6 flex items-center text-black" // Change text-white to text-black
            onClick={handleBack}
          >
            <RiLogoutBoxLine className="mr-2" />
            Back
          </button> */}
          <div className='bg-white py-[53px] px-[26.03px]'>
            <div className='flex items-center gap-x-6'>
              <h3 className='text-[18px] text-black font-medium'>
                Showing:
              </h3>
              <div className='bg-[#e8e8e8] flex items-center gap-x-4 rounded-[10px] py-2 px-3'>
                <p className='text-[16px] text-black font-normal '>Top innovation dashboard</p>
                <div>
                  <img src={arrowDown} alt='icon' />
                </div>
              </div>
            </div>
            <div className='my-8 flex items-center w-3/5 mx-auto  flex-col gap-8'>
              <div className='flex gap-x-2 bg-[#F3F3F3] py-1 px-7 rounded-[15px] shadow items-center justify-center'>
                <div>
                  <img src={a1} alt='icon' className='' />
                </div>
                <div>
                  <p className='text-[19.54px] font-normal'>Rhema Obuefina</p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-1'>
                      <img src={coin} />
                      <p className='text-[12px] font-light'>1,250</p>
                    </div>
                    <div className='flex items-center gap-x-1'>
                      <img src={bolt} />
                      <p className='text-[12px] font-light'>1,250</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className='flex items-center justify-between gap-x-64'>
                <div className='flex flex-shrink-0 gap-x-2 bg-[#F3F3F3] py-1 px-7 rounded-[15px] shadow items-center justify-center'>
                  <div>
                    <img src={a2} alt='icon' className='' />
                  </div>
                  <div>
                    <p className='text-[19.54px] font-normal'>Rhema Obuefina</p>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-x-1'>
                        <img src={coin} />
                        <p className='text-[12px] font-light'>1,250</p>
                      </div>
                      <div className='flex items-center gap-x-1'>
                        <img src={bolt} />
                        <p className='text-[12px] font-light'>1,250</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='flex flex-shrink-0 gap-x-2 bg-[#F3F3F3] py-1 px-7 rounded-[15px] shadow items-center justify-center'>
                  <div>
                    <img src={a3} alt='icon' className='' />
                  </div>
                  <div>
                    <p className='text-[19.54px] font-normal'>Rhema Obuefina</p>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-x-1'>
                        <img src={coin} />
                        <p className='text-[12px] font-light'>1,250</p>
                      </div>
                      <div className='flex items-center gap-x-1'>
                        <img src={bolt} />
                        <p className='text-[12px] font-light'>1,250</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div className="leaderboard-container hidden">
              {!leaderboardData.length > 0 ? (
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


            <table class="bordered-table table-auto w-full   rounded border-separate border-spacing-y-3">
              <thead class="text-left text-[#000]  ">
                <tr>
                  <th class="p-3 text-[22.94px] font-normal ">Username</th>
                  <th class="px-0 text-[22.94px] font-normal text-left ">Rank</th>
                  <th class="p-3 text-[22.94px] font-normal text-center">Coin</th>


                </tr>
              </thead>
              <tbody class="">
                {
                  [1, 2, 3, 4, 5, 6, 7]?.map((el, i) =>
                    <tr class=" border border-[#f2f2f2] rounded text-blck text-[12px] " key={i}>
                      <td class="p-1 w-[50%]">
                        Amaka.Nwanze@Premiumtrustbank.com
                      </td>
                      <td class="text-left w-[25%]">4</td>

                      <td class="p-1 text-center w-[25%]">400</td>






                    </tr>
                  )
                }


              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Leaderboard;
