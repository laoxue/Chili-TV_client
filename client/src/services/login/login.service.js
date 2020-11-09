import axios from 'axios'
// import apiconfig from './../../apiconfig'
/**
 * 登录接口
*/
export const login = (data) => {
    return new Promise((resolve, reject) => {
      axios.post('http://172.18.34.17:3000/v1/chili/login', data).then(
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
 * 注册接口
*/
export const design = (data) => {
    return new Promise((resolve, reject) => {
      axios.post('http://172.18.34.17:3000/v1/chili/register', data).then(
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
  // 获取用户信息
  export const getinfo = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://172.18.34.17:3000/v1/chili/userinfo', {params:{},headers:{
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
  // 更新
  export const updateinfo = (data) => {
    return new Promise((resolve, reject) => {
      axios.post('http://172.18.34.17:3000/v1/chili/updateinfo', data, {headers:{
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
    // 上传图片
    export const uploadimage = (data) => {
      return new Promise((resolve, reject) => {
        axios.post('http://172.18.34.17:3000/v1/chili/uploadheader', data, {headers:{
          'Accept': 'text/javascript, application/javascript, application/ x-javascript, */*',
          'Content-type': 'multipart/form-data;',
          'Authorization': window.localStorage.token
        }}).then(
            (data) => {
              resolve(data)
            }
            ).catch(
              (error) => {
                alert(error)
                reject(error.response.data.error)
              }
            )
      })
    }