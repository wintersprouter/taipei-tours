import axios from 'axios'
const cors = 'https://cors-wei-anywhere.herokuapp.com/'
const url = 'https://www.travel.taipei/open-api/'

export const apiHelper = axios.create({
  baseURL: `${cors}${url}`
})
