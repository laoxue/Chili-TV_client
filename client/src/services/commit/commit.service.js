import axios from 'axios'
// import apiconfig from './../../apiconfig'
/**
 * 提交评论
*/
export const postCommit = (data) => {
    return new Promise((resolve, reject) => {
      axios.post('http://172.17.123.154:3000/v1/chili/postcommits',data, {headers:{
        'Accept': 'text/javascript, application/javascript, application/ x-javascript, */*',
        'Authorization': window.localStorage.token
      }}).then(
          (data) => {
            resolve(data)
          }
          ).catch(
            (error) => {
              reject(error.response.data.error)
            }
          )
    })
  }
