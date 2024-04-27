import { FC, useEffect, useState } from 'react'

type ButtonScrollLayoutType = {
  coordinate: number
}

export const ButtonScrollLayout: FC<ButtonScrollLayoutType> = ({ coordinate }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: coordinate,
      behavior: 'smooth',
    })
  }

  return (
    <button onClick={scrollToTop} className={`fixed bottom-5 right-5 ${isVisible ? 'visible' : 'hidden'} text-xl`}>
      ↑
    </button>
  )
}
