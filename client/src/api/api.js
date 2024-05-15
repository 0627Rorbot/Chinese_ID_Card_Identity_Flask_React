import axios from 'axios'

const url = 'http://localhost:5000/image'

export const postImage = (newImage) => axios.post(url, newImage)
export const processApi = (image_name) => axios.get(`${url}?image_name=${image_name}`)