import { Footer } from './Footer'
import { Header } from './Header'
import { ReactNode, FC } from 'react'

type LayoutProps = {
  children?: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
