import { getApi } from '@/shared/lib/getApi'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Character, Nullable } from '@/shared/@types/global'
import Image from 'next/image'

const Characters = () => {
  const router = useRouter()
  const currentPath = router.asPath
  const [charactersData, setCharactersData] = useState<Nullable<Character[]>>([])
  const [charactersCount, setCharactersCount] = useState(16)
  const charactersArrRequest = Array.from({ length: charactersCount }, (_, index) => index + 1)
  useEffect(() => {
    const fetchData = async () => {
      const data = await getApi(`/character/${charactersArrRequest.join(',')}`)
      console.log(data)
      setCharactersData(data)
    }
    fetchData()
  }, [charactersCount])
  return (
    <div className='px-[150px]'>
      <h1 className='text-2xl pb-2'>Characters</h1>
      <h2>All of the characters that appear in the Rick and Morty franchise.</h2>
      <div className='grid md:grid-cols-8 gap-10 py-8 self-center justify-items-center'>
        {!!charactersData &&
          charactersData.map(({ name, id, image }: Character) => (
            <Link href={`${currentPath}/${id}`} className='w-[8vw]'>
              <p className='text-center overflow-ellipsis overflow-hidden whitespace-nowrap'>{name}</p>
              <Image alt={`img_${name}`} src={image} width={150} height={150}></Image>
            </Link>
          ))}
      </div>
      <div className='flex justify-center gap-3 mb-4'>
        <button
          className='p-3 border-2 border-gray-300 rounded-lg bg-gray-100'
          onClick={() => setCharactersCount(count => count + 16)}
          disabled={charactersCount === 826 && true}
        >
          More
        </button>
        <button
          onClick={() => setCharactersCount(826)}
          disabled={charactersCount === 826 && true}
          className='p-3 border-2 border-gray-300 rounded-lg bg-gray-100'
        >
          Show all
        </button>
      </div>
    </div>
  )
}

export default Characters
