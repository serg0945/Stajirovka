import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_MAIN_URL_API

export const getApi = async (chapter: string) => {
  try {
    const { data } = await axios.get(chapter)
    return data
  } catch (err) {
    throw new Error(`Something fail. ${err}`)
  }
}
