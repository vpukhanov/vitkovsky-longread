import Image from 'next/image'

import styles from '../styles/HeaderImage.module.css'

type HeaderImageProps = {
  src: string
  width: number
  height: number
  alt: string
}

const HeaderImage = (props: HeaderImageProps) => {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} layout='responsive' />
      <div className={styles.overlay} />
    </div>
  )
}

export default HeaderImage
