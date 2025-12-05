import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { MouseSparkle } from '../components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MouseSparkle />
      <Component {...pageProps} />
    </>
  )
}

