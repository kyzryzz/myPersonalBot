const axios = require('axios');
const fetch = require('node-fetch')

exports.chatAI = async(message, prompt) => {
  try {
    const response = await axios.post('https://www.blackbox.ai/api/chat', {
      messages: [
        { id: null, content: prompt, role: 'assistant' },
        { id: null, content: message, role: 'user' }
      ],
      id: null,
      previewToken: null,
      userId: null,
      codeModelMode: true,
      agentMode: {},
      trendingAgentMode: {},
      isMicMode: false,
      isChromeExt: false,
      githubToken: null
    });

    let result = response.data;
    result = result.replace(/\$@\$.+?\$@\$/g, '');

    return result;
  } catch (error) {
    throw error;
  }
}

exports.sdxl = async(text) => {
    try {
        const response = await axios.post('https://shinoa.us.kg/api/image/sdxlAnime', {
            text: text
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

exports.fetchUser = async (content, prompt, user) => {
  function generateRandomUserId() {
    return 'user-' + Math.floor(Math.random() * 10000);
}
    
let userId = generateRandomUserId();
console.log(`Generated User ID: ${userId}`);
    try {
        const response = await axios.post('https://luminai.my.id/', { content, prompt, user });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.gpt3 = async (q) => {
  const url = 'https://api.kyuurzy.tech/api/gpt/gpt3';
  const data = {
    text: q
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'accept': '*/*',
      'api_key': 'free',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }

  const responseData = await response.json();
  return responseData;
}