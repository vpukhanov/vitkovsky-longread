import { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    function toggleBackgroundClass() {
      if (window.location.pathname === '/') {
        document.documentElement.classList.add('bg-gray')
      } else {
        document.documentElement.classList.remove('bg-gray')
      }
    }
    toggleBackgroundClass()

    Router.events.on('routeChangeComplete', toggleBackgroundClass)
    return () => Router.events.off('routeChangeComplete', toggleBackgroundClass)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
