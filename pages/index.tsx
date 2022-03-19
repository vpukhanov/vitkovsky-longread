import type { NextPage } from 'next'
import Head from 'next/head'

import Map from '../lib/map'
import { PROJECT_NAME } from '../lib/const'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Начало | {PROJECT_NAME}</title>
      </Head>

      <div className={styles.textContainer}>
        <main className={styles.innerTextContainer}>
          <h1 className='title'>{PROJECT_NAME}</h1>
          <p>
            Mauris dapibus velit at lobortis consectetur. Ut commodo molestie
            ante blandit ultricies. Suspendisse sed aliquet sapien, non
            dignissim neque. Donec vehicula euismod cursus. Donec tincidunt
            purus ut leo scelerisque egestas. Proin tristique nisi ac accumsan
            pellentesque. Nam condimentum dolor in dictum condimentum. Integer
            tellus urna, lacinia quis feugiat at, convallis sed enim. Fusce
            tortor augue, blandit in condimentum quis, bibendum nec lectus.
          </p>
          <p>
            Praesent eget lobortis nunc, at dapibus ante. Fusce non varius leo.
            Curabitur porta vulputate semper. Mauris in ligula sed neque
            scelerisque venenatis. Aenean scelerisque, mi aliquet commodo
            ultrices, dolor nibh fermentum nisl, quis imperdiet nisi massa eu
            est. Nam aliquet placerat turpis vel tincidunt. Integer porta diam
            vel libero sagittis interdum. Proin molestie odio vitae velit
            molestie, id varius tortor placerat. Vestibulum consequat fringilla
            odio. Nunc mollis consectetur diam at porta.
          </p>
          <p>
            Vivamus non neque non erat convallis tempor eget eu arcu. Nulla
            malesuada fermentum eleifend. Phasellus fringilla elementum leo, ut
            scelerisque arcu egestas sed. Donec sit amet sollicitudin lorem, id
            aliquet magna. Nunc facilisis mauris ornare maximus venenatis. Donec
            vitae bibendum leo. Vestibulum placerat lacus in viverra pharetra.
            Aliquam efficitur ultrices lorem, sed bibendum risus gravida et.
          </p>
        </main>
      </div>

      <div className={styles.mapContainer}>
        <Map />
      </div>
    </div>
  )
}

export default Home
