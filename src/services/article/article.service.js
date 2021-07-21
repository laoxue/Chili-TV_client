import axios from 'axios'
// import apiconfig from './../../apiconfig'
/**
 * 获取banner接口
*/
export const getBanner = () => {
    return new Promise((resolve, reject) => {
      axios.get(`${window.global.BASE_URL}/v1/chili/getindexbanner`, {params:{},headers:{
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
/**
 * 获取banner接口
*/
export const getInfos = (data) => {
  return new Promise((resolve, reject) => {
    axios.get(`${window.global.BASE_URL}/v1/chili/getarticles?id=`+data.id, {params:{},headers:{
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