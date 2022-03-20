import Image from 'next/image'

import styles from '../styles/HeaderImage.module.css'

type HeaderImageProps = {
  src: StaticImageData
  alt: string
}

const HeaderImage = (props: HeaderImageProps) => {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} placeholder='blur' layout='responsive' />
      <div className={styles.overlay} />
    </div>
  )
}

export default HeaderImage
