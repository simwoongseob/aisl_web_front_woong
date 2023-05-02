// import {
//   GET_NOTICE,
//   GET_AD,
//   ECCL_CONDITIONS,
//   ECCL_PIPP,
//   ECCL_RULE
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

// // 에끌 이용약관
// export function getConditions() {
//   const request = axios ({
//     method: 'POST',
//     url: process.env.REACT_APP_A_ECCL_CONDITIONS,
//     header: {
//       "Content-Type":"application/x-www-form-urlencoded"
//     },
//   }).then(response=>{
//     console.log("에끌 이용약관 reponse: ",response.data)
//     sessionStorage.setItem('@Condition', JSON.stringify(response.data))
//     return response.data
//   }).catch(err=>{
//       console.log("에끌 이용약관 에러", err)
//       return false
//   })

//   return{
//       type: ECCL_CONDITIONS,
//       payload: request
//   }
// }

// // 에끌 개인정보처리
// export function getPipp() {
//   const request = axios ({
//     method: 'POST',
//     url: process.env.REACT_APP_A_ECCL_PIPP,
//     header: {
//       "Content-Type":"application/x-www-form-urlencoded"
//     },
//   }).then(response=>{
//     console.log("개인정보처리방침 reponse: ",response.data)
//     sessionStorage.setItem('@Pipp', JSON.stringify(response.data))
//       return response.data
//   }).catch(err=>{
//       console.log("에끌 개인정보처리 에러", err)
//       return false
//   })

//   return{
//       type: ECCL_PIPP,
//       payload: request
//   }
// }

// // 에끌 커뮤니티 이용규칙
// export function getRule() {
//   const request = axios ({
//     method: 'POST',
//     url: process.env.REACT_APP_A_ECCL_RULE,
//     header: {
//       "Content-Type":"application/x-www-form-urlencoded"
//     },
//   }).then(response=>{
//     console.log("커뮤니티 이용규칙 reponse: ",response.data)
//     sessionStorage.setItem('@Rule', JSON.stringify(response.data))
//       return response.data
//   }).catch(err=>{
//       console.log("에끌 커뮤니티 이용규칙 에러", err)
//       return false
//   })

//   return{
//       type: ECCL_RULE,
//       payload: request
//   }
// }
