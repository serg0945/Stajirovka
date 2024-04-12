import { getApi } from '@/shared/lib/getApi'
import { GetServerSideProps } from 'next'

// export const getServerSideProps = async () => {
//   const episodes = await getApi('/location')
//   return {
//     props: { episodes },
//   }
// }

const Locations = ({ episodes }: any) => {
  return <div className='flex flex-wrap gap-10 justify-around p-10'>Пипа и Пупа</div>
}

export default Locations
