import Link from 'next/link'
import styles from '../styles/Marker.module.css'

type MarkerProps = {
  location: string
  top: number
  left: number
  active?: boolean
}

const Marker = ({ location, top, left, active }: MarkerProps) => {
  return (
    <Link href={`/${location}`}>
      <a
        className={styles.marker}
        data-active={active}
        style={{
          top: `${top}%`,
          left: `${left}%`,
        }}
      />
    </Link>
  )
}

export default Marker
