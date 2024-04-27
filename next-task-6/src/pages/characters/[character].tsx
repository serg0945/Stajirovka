import { getApi } from '@/shared/lib/getApi'
import { Params } from '@/shared/@types/global'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

type CharacterType = {
  name: string
  id: number
  image: string
}

export const getStaticPaths = (async () => {
  const characters = await getApi(`/character`)
  const paths = characters.results.map((character: CharacterType) => {
    return {
      params: {
        character: `${character.id}`,
      },
    }
  })
  return {
    paths,
    fallback: true,
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async context => {
  const { character } = context.params as Params
  const data = await getApi(`/character/${character}`)
  return {
    props: { character: data },
  }
}) satisfies GetStaticProps<{ character: CharacterType }>

const Character = ({ character }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter()
  console.log(character)
  return (
    <div className='px-[150px]'>
      {isFallback && <p>Loading...</p>}
      <Link href='/characters' className="after:content-['←'] text-xl"></Link>
      <ul key={character.id}>
        <li>Name: {character.name}</li>
        <img className='py-3' src={character.image} />
        <li>Species: {character.species}</li>
        <li>Status: {character.status}</li>
        <li>Gender: {character.gender}</li>
        <li>Origin: {character.origin.name}</li>
        <li>Last known location: {character.location.name}</li>
        {/* <li>Episodes: {character.episode[0]}</li> */}
      </ul>
    </div>
  )
}

export default Character
