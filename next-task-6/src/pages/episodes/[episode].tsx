import { useApiArrayRequest } from '@/shared/hooks/useApiArrayRequest'
import { getApi } from '@/shared/lib/getApi'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Character, Params } from '../../shared/types/global'
import Link from 'next/link'

export const getServerSideProps = (async context => {
  console.log(context)
  const { episode } = context.params as Params
  const data = await getApi(`/episode/${episode}`)
  const charactersProp = data.characters
  return {
    props: {
      episode: data,
      charactersProp,
    },
  }
}) satisfies GetServerSideProps<{ episode: Character }>

const Episode = ({ episode, charactersProp }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const characters = useApiArrayRequest(charactersProp)
  console.log(characters)
  return (
    <div className='px-[150px] py-8'>
      <Link href='/episodes' className="after:content-['←']"></Link>
      <p>{episode.name}</p>
      <p>{episode.episode}</p>
      <h3>Персонажи, промелькающие в этом эпизоде:</h3>
      <div className='flex flex-wrap gap-5 justify-between'>
        {characters.data.map(({ image, id, name }: Character) => (
          <div key={id}>
            <img src={image} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Episode
