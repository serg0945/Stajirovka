import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_MAIN_URL_API

export const getApi = async (chapter: string) => {
  try {
    const response = await axios.get(chapter)
    console.log(response.data)
    return response.data
  } catch (err) {
    throw err
  }
}
