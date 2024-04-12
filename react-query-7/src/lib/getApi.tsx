axios.defaults.baseURL = import.meta.env.VITE_MAIN_URL
import axios from 'axios'

export const getApi = async (urlSectionsParam: string) => {
  const { data } = await axios(`${urlSectionsParam}`)
  return data
}
