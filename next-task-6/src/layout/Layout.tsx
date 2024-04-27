import { ButtonScrollLayout } from '@/shared/ui'
import { Header } from './Header'
import { ReactNode, FC } from 'react'

type LayoutProps = {
  children?: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <ButtonScrollLayout coordinate={0} />
      {children}
    </>
  )
}
