import { useApiArrayRequest } from '@/shared/hooks/useApiArrayRequest'
import { getApi } from '@/shared/lib/getApi'
import { GetServerSideProps, GetStaticPaths, GetStaticProps, InferGetServerSidePropsType } from 'next'
import { Character, Params } from '@/shared/@types/global'
import Link from 'next/link'
import Image from 'next/image'

export const getStaticPaths = (async () => {
  const locations = await getApi(`/location`)
  const paths = locations.results.map((location: any) => {
    return {
      params: {
        location: `${location.id}`,
      },
    }
  })
  return {
    paths,
    fallback: true,
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async context => {
  const { location } = context.params as Params
  const data = await getApi(`/location/${location}`)
  return {
    props: { location: data },
  }
}) satisfies GetStaticProps<{ location: any }>

const Episode = ({ location }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const characters = useApiArrayRequest(location.residents)
  console.log(location)
  return (
    <div className='px-[150px]'>
      <Link href='/locations' className="after:content-['←'] pl-2"></Link>
      <div className='pl-2 pb-5'>
        <p>Name: {location.name}</p>
        <p>Episode: {location.episode}</p>
        <h3>Characters who were last discovered at this location:</h3>
      </div>
      <div className='grid md:grid-cols-5 self-center justify-items-center gap-3 mb-4'>
        {characters.data.map(({ image, id, name }: Character) => (
          <div key={id}>
            <p className='text-center overflow-ellipsis overflow-hidden whitespace-nowrap'>{name}</p>
            <Image width={300} height={300} src={image} alt={`img_${name}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Episode
