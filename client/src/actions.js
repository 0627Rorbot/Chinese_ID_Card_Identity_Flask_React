import { postImage, processApi } from './api/api';


export const createImage = async (image) => {
  try {
    const {data} = await postImage(image)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}  
export const process = async (image_name) => {
  try {
    const { data } = await processApi(image_name)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}  