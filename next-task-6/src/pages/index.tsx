import LogoPreview from '@/shared/assets/logo-preview.svg'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const HomePage = () => {
  const sectionValue = ['characters', 'locations', 'episodes']
  let [sectionCounter, setSectionCounter] = useState(0)
  let section = sectionValue[sectionCounter]
  const handleCount = (count: number) => {
    setSectionCounter(sectionCounter < 2 && sectionCounter > -1 ? sectionCounter + count : 0)
    return sectionCounter
  }
  return (
    <div className='px-[150px] py-6 bg-white'>
      <Image src={LogoPreview} alt='logo-preview'></Image>
      {/* <button className="after:content-['<']" onClick={() => handleCount(-1)}></button> */}
      <Link href={section}>{section}</Link>
      <button className="after:content-['>']" onClick={() => handleCount(1)}></button>
      <p>{sectionCounter}</p>
    </div>
  )
}

export default HomePage
