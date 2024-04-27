import { useApiArrayRequest } from '@/shared/hooks/useApiArrayRequest'
import { getApi } from '@/shared/lib/getApi'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Character, Params } from '@/shared/@types/global'
import Link from 'next/link'
import Image from 'next/image'

export const getServerSideProps = (async ctx => {
  const { episode } = ctx.params as Params
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
  console.log(episode)
  return (
    <div className='px-[150px]'>
      <Link href='/episodes' className="after:content-['←']"></Link>
      <p>Name: {episode.name}</p>
      <p>Episode: {episode.episode}</p>
      <h3>Characters flashing by in this episode:</h3>
      <div className='grid md:grid-cols-5 self-center justify-items-center gap-3 my-4'>
        {characters.data.map(({ image, id, name }: Character) => (
          <div key={id}>
            <p className='text-center overflow-ellipsis overflow-hidden whitespace-nowrap'>{name}</p>
            <Image alt={`img_${name}`} src={image} width={300} height={300} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Episode
