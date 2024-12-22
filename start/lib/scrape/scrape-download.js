const axios = require("axios")
const cheerio = require("cheerio");
const formData = require("form-data");

exports.tiktok = async (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const params = new URLSearchParams();
      params.set("url", url);
      params.set("hd", "1");

      const response = await axios({
        method: "POST",
        url: "https://tikwm.com/api/",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Cookie: "current_language=en",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
        },
        data: params
      });

      const responseData = response.data;
      resolve(responseData);
    } catch (error) {
      reject(error);
    }
  });
}

exports.igdl = async (url) => {
  return new Promise(async (resolve, reject) => {
    const urlParams = new URLSearchParams(Object.entries({
      url: url,
      host: "instagram"
    }));
    await axios.request({
      method: "POST",
      baseURL: "https://saveinsta.io/core/ajax.php",
      data: urlParams,
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        cookie: "PHPSESSID=rmer1p00mtkqv64ai0pa429d4o",
        "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    }).then(response => {
      const $ = cheerio.load(response.data);
      const mediaUrls = $("div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom").map((i, element) => {
        return "https://saveinsta.io/" + $(element).find("div.col-md-8.mx-auto > a").attr("href");
      }).get();
      const result = {
        status: 200,
        media: mediaUrls
      };
      resolve(result);
    }).catch(error => {
      console.log(error);
      throw {
        status: 400,
        message: "error"
      };
    });
  });
}

exports.ytdlkyuu = async (q) => {
  try {
    const response = await axios.post('https://api.kyuurzy.tech/api/download/ytdl', {
      text: q
    }, {
      headers: {
        'accept': '*/*',
        'api_key': 'free',
        'Content-Type': 'application/json'
      }
    });
    
    return response.data
  } catch (error) {
    console.error('Error:', error);
  }
}

exports.spotifydl = async (q) => {
  try {
    const response = await axios.post('https://api.kyuurzy.tech/api/download/spotifydl', {
      text: q
    }, {
      headers: {
        'accept': '*/*',
        'api_key': 'free',
        'Content-Type': 'application/json'
      }
    });

     return response.data
  } catch (error) {
    console.error(error);
  }
}