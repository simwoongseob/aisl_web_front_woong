// import {
//   GET_NOTICE,
//   GET_AD,
// } from '../types';

// import axios from 'axios';

// // 공지사항
// export function getNotice() {
//   const request = axios ({
//     method: 'POST',
//     url: process.env.REACT_APP_A_GET_NOTICE,
//     header: {
//       "Content-Type":"application/x-www-form-urlencoded"
//     },
//     data: {
//     }
//   }).then(response=>{
//       return response.data
//   }).catch(err=>{
//       console.log("공지사항 에러", err)
//       return false
//   })

//   return{
//       type: GET_NOTICE,
//       payload: request
//   }
// }

// // 광고
// export function getAD() {
//   console.log("광고 가져오기 액션")
//   const request = axios ({
//     method: 'POST',
//     url: process.env.REACT_APP_A_GET_AD,
//     header: {
//       "Content-Type":"application/x-www-form-urlencoded"
//     },
//     data: {
//     }
//   }).then(response=>{
//       return response.data
//   }).catch(err=>{
//       console.log("광고 에러", err)
//       return false
//   })

//   return{
//       type: GET_AD,
//       payload: request
//   }
// }
