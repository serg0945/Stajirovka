import { useState, useEffect } from 'react'
import { getApi } from '@/shared/lib/getApi'

export const useApiArrayRequest = (urls: Array<string>) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const axiosData = async () => {
      try {
        const responses = urls.map(url => getApi(url))
        const responsesData: any = await Promise.all(responses)
        setData(responsesData)
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        throw err
      }
    }
    axiosData()
  }, [urls])
  return { data, isLoading }
}
