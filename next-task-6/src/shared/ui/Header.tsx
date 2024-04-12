import Link from 'next/link'
import Logo from '@/shared/assets/logo.svg'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className='flex items-center px-[150px] p-2 justify-between'>
      <Image src={Logo} alt='logo'></Image>
      <div className='flex gap-2'>
        <Link href='/characters'>Characters</Link>
        <Link href='/locations'>Locations</Link>
        <Link href='/episodes'>Episodes</Link>
      </div>
    </div>
  )
}
