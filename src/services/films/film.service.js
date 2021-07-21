import axios from 'axios'
// import apiconfig from './../../apiconfig'
/**
 * 获取banner接口
*/
export const getFilmnews = (id) => {
    return new Promise((resolve, reject) => {
      axios.get(`${window.global.BASE_URL}/v1/chili/getfilms?id=${id ?id:''}`, {params:{},headers:{
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
 * 上传excel
*/
export const uploadexcel = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${window.global.BASE_URL}/v1/chili/uploadExcel`, data, {headers:{
      'Accept': 'text/javascript, application/javascript, application/ x-javascript, */*',
      'Content-type': 'multipart/form-data;',
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
 * 实时查询影片 根据内容实时搜索
*/
export const searchfilmsbyname = (data) => {
  return new Promise((resolve, reject) => {
    axios.get(`${window.global.BASE_URL}/v1/chili/searchfilm?filmname=` + data, {headers:{
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
 * 删除指定影片
*/
export const delmanyfilms = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${window.global.BASE_URL}/v1/chili/delfilms`, data ,{headers:{
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
 * 搜索豆瓣影片
*/
export const getdoubanfilm = (data) => {
  return new Promise((resolve, reject) => {
    axios.get(`${window.global.BASE_URL}/v1/chili/searchfilmbydouban?filmname=`+data ,{headers:{
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
 * 保存豆瓣影片
*/
export const savedoubanfilm = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${window.global.BASE_URL}/v1/chili/savefilmbydouban`, data ,{headers:{
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
 * 获取我上传的影片
*/
export const searchmyuploadfilms = (data) => {
  return new Promise((resolve, reject) => {
    axios.get(`${window.global.BASE_URL}/v1/chili/getmyfilms` ,{headers:{
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
 * 获取电影片单
*/
export const getFilmList = (data) => {
  return new Promise((resolve, reject) => {
    axios.get(`${window.global.BASE_URL}/v1/chili/getfilmlist` ,{headers:{
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