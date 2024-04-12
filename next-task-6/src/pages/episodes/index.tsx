import { getApi } from '@/shared/lib/getApi'
import Link from 'next/link'
import { Episode } from '../../shared/types/global'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps = (async () => {
  const episodes = await getApi('/episode')
  return {
    props: { episodes },
  }
}) satisfies GetStaticProps<{ episodes: Episode }>

const Episodes = ({ episodes }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='px-[150px] py-8'>
      <h1>Список эпизодов:</h1>
      <ul className='flex flex-col gap-4'>
        {episodes.results.map(({ id, name }: Episode) => (
          <div key={id}>
            <li>
              <Link href={`/episodes/${id}`}>{name}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Episodes
