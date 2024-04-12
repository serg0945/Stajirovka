import { getApi } from '@/shared/lib/getApi'
import { useRouter } from 'next/router'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Character } from '../../shared/types/global'

export const getStaticProps = async () => {
  const data = await getApi(`/character`)
  return {
    props: { characters: data },
  }
  // }) satisfies GetStaticProps<{ characters: Character }>
}

const Characters = ({ characters }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const currentPath = router.asPath
  return (
    <>
      <div className='flex flex-wrap gap-10 justify-around p-10'>
        {characters.results.map(({ name, id, image }: Character) => (
          <a key={id} className='w-[10vw]' onClick={() => router.push(`${currentPath}/${id}`)}>
            <p className='text-center overflow-ellipsis overflow-hidden whitespace-nowrap'>{name}</p>
            <img src={image}></img>
          </a>
        ))}
      </div>
    </>
  )
}

export default Characters
