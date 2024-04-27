import { getApi } from '@/shared/lib/getApi'
import Link from 'next/link'
import { Episode } from '@/shared/@types/global'
import { useEffect, useState } from 'react'
import { Nullable } from '@/shared/@types/global'

const Locations = () => {
  const [episodeData, setEpisodeData] = useState<Nullable<Episode[]>>([])
  const [episodeCount, setEpisodeCount] = useState(18)
  const episodesArrRequest = Array.from({ length: episodeCount }, (_, index) => index + 1)
  useEffect(() => {
    const fetchData = async () => {
      const data = await getApi(`/location/${episodesArrRequest.join(',')}`)
      console.log(data)
      setEpisodeData(data)
    }
    fetchData()
  }, [episodeCount])
  return (
    <div className='px-[150px]'>
      <h1 className='text-2xl pb-2'>Locations</h1>
      <h2>All of the locations that appear in the Rick and Morty franchise.</h2>
      <ul className='flex flex-col gap-4 py-8'>
        {!!episodeData &&
          episodeData.map(({ id, name }: Episode) => (
            <div key={id}>
              <li>
                <Link href={`/locations/${id}`}>{name}</Link>
              </li>
            </div>
          ))}
      </ul>
      <div className='flex justify-center gap-3 mb-4'>
        <button
          onClick={() => setEpisodeCount(count => count + 18)}
          disabled={episodeCount === 126 && true}
          className='p-3 border-2 border-gray-300 rounded-lg bg-gray-100'
        >
          More
        </button>
        <button
          onClick={() => setEpisodeCount(126)}
          disabled={episodeCount === 126 && true}
          className='p-3 border-2 border-gray-300 rounded-lg bg-gray-100'
        >
          Show all
        </button>
      </div>
    </div>
  )
}

export default Locations
