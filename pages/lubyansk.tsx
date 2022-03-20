import { NextPage } from 'next'
import Head from 'next/head'

import { PROJECT_NAME } from '../lib/const'
import HeaderImage from '../lib/header-image'
import Map from '../lib/map'
import styles from '../styles/Home.module.css'

const Lubyansk: NextPage = () => {
  return (
    <div>
      <Head>
        <title>д. Лубянск, 1931 г | {PROJECT_NAME}</title>
      </Head>
      <div className={styles.textContainer}>
        <main className={styles.innerTextContainer}>
          <h1 className='title'>Лубянск</h1>
          <h2 className='subtitle'>1931</h2>
        </main>
      </div>
    </div>
  )
}

export default Lubyansk
