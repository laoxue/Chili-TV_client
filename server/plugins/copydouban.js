const https = require('https');
const cheerio = require('cheerio')

let getCode = (name) => {
  return new Promise((resolve, reject) => {
    https.get(`https://m.douban.com/search/?query=${
      encodeURIComponent(name)}`,(res)=> {
    let html = ''
    res.on('data',(chunk) => {
        html+=chunk
    })
  
    res.on('end',() => {
      const $ = cheerio.load(html)
      const filmcode = $('.search_results_subjects > li > a').attr('href')
      const filmscore = $('.rating-stars').next().html()
      let film = {
        filmcode,
        filmscore
      }
      resolve(film)
    })
    })
  })
  .then(async (url) => {
    return new Promise((resolve, reject) => {
      https.get('https://m.douban.com'+url.filmcode ,(res)=> {
      let html = ''
      res.on('data',(chunk) => {
         html+=chunk
      })
    
      res.on('end',() => {
        const $ = cheerio.load(html)
        let job = {}
        job.title = $('.sub-info > div > .sub-title').text()
        job.desc =  $('.card > .subject-intro > div > p').text()
        job.updatedate = $('.sub-info > div > .sub-meta').text().split('/')[3]
        job.dbscore = url.filmscore
        job.imageurl = 'https://images.weserv.nl/?url=' + $('.sub-info > a > img').attr('src')
        resolve(job)
      })
      })
    })
  })
  .catch((err) =>{
     console.log(err)
  })
}

module.exports = getCode
