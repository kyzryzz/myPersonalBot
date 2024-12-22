const axios = require("axios")

exports.cekUser = async (url) => {
	return await axios(url).catch(_ => null)
}

exports.sendNgl = async (name, text) => {
    const baseURL = `https://ngl.link/${name}`
    const puki = await baseURL(name)
	return await axios({
        puki,
		method: 'post',
		data: new URLSearchParams({ question: text })
	}).catch(console.log)
}