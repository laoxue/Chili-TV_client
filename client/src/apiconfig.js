class ApiConfig {
    /**
     * @param {string} apiName api名称
     */
    constructor () {
      this.resStatus = -1
      this.baseURL = 'http://localhost:3000/'
  
      // 此函数只用于PUT, POST, PATCH方法请求
      // 按数组顺序执行函数,返回值作为下一个函数的输入值qidaStyHisApiConfig
      // 最后一个函数必须返回值的类型是:[string, ArrayBuffer, Stream]
      this.transformRequest = [data => {
        // 请求之前对参数再一次封装
        return window.JSON.stringify(data)
      }]
  
      // 处理接口返回数据在then/catch之前执行动作
      // 参数 data[string]类型
      this.transformResponse = [data => {
        // 返回出去之前必须是json对象
        if (data) {
          // 身份验证
          if (this.resStatus === 401) {
            ApiConfig.checkLogin(data)
            // return
          }
          try {
            data = window.JSON.parse(data)
          } catch (e) {
            // console.warn(e)
          }
        }
        return data
      }]
  
      // 设置resolve和reject判定标准
      this.validateStatus = status => {
        this.resStatus = status
        return status >= 200 && status < 300 // default
      }
  
      this.headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      }
      // 请求地址参数末尾添加随机数
      this.params = {
        random: Math.random()
      }
    }
  
    setBaseURL (url) {
      this.baseURL = url
    }
  }
  const apiconfig = new ApiConfig()
  export {apiconfig}