import Image from 'next/image'
import logo from '../shared/assets/logo-preview.svg'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='px-[150px] py-10 bg-white flex flex-col gap-6 items-center'>
      <Image src={logo} alt='plogo' />
      <div className='py-10'>
        <p className='pb-10 text-center'>Change your path: </p>
        <div className='flex gap-2'>
          <Link className='p-3 border-2 border-gray-300 rounded-lg bg-gray-100' href='/characters'>
            Characters
          </Link>
          <Link className='p-3 border-2 border-gray-300 rounded-lg bg-gray-100' href='/episodes'>
            Episodes
          </Link>
          <Link className='p-3 border-2 border-gray-300 rounded-lg bg-gray-100' href='/locations'>
            Locations
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
