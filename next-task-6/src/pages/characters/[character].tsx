import { getApi } from '@/shared/lib/getApi'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'

export const getStaticPaths = (async () => {
  const characters = await getApi(`/character`)
  const paths = characters.results.map((character: any) => {
    return {
      params: {
        character: `${character.id}`,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context: any) => {
  const { character } = context.params
  const data = await getApi(`/character/${character}`)
  return {
    props: { character: data },
  }
}) satisfies GetStaticProps

const Character = ({ character }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Link href='/characters' className="after:content-['←']"></Link>
      <ul key={character.id}>
        <li>{character.name}</li>
        <img src={character.image} />
      </ul>
    </>
  )
}

export default Character
