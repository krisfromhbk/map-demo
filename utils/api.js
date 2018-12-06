import axios from 'axios'

const apiCall = (url, method, ...args) => new Promise((resolve, reject) => {
  axios({
    url: url,
    method: method,
    data: args[0],
    baseURL: 'https://wtf.rocketparty.app:443/'
  })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(new Error(error))
    })
})

export { apiCall }
