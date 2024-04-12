import type { AppProps } from 'next/app'
import { Layout } from '@/shared/ui/Layout'
import '@/shared/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
