import Link from 'next/link'
import Logo from '@/shared/assets/logo.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Header = () => {
  const { asPath } = useRouter()
  return (
    <div className='flex items-center px-[150px] p-2 justify-between border-gray-200 border-b-2 mb-4'>
      <Link href='/'>
        <Image src={Logo} alt='slogo'></Image>
      </Link>
      <div className='flex gap-5'>
        <Link
          href='/characters'
          onClick={e => asPath === '/characters' && e.preventDefault()}
          className={asPath === '/characters' ? 'text-gray-300 cursor-not-allowed' : ''}
        >
          Characters
        </Link>
        <Link
          href='/locations'
          className={asPath === '/locations' ? 'text-gray-300 cursor-not-allowed' : ''}
          onClick={e => asPath === '/locations' && e.preventDefault()}
        >
          Locations
        </Link>
        <Link
          href='/episodes'
          className={asPath === '/episodes' ? 'text-gray-300 cursor-not-allowed' : ''}
          onClick={e => asPath === '/episodes' && e.preventDefault()}
        >
          Episodes
        </Link>
      </div>
    </div>
  )
}
