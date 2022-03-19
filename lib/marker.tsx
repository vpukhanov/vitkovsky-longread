import styles from '../styles/Marker.module.css'

type MarkerProps = {
  location: string
  top: number
  left: number
  active?: boolean
}

const Marker = ({ location, top, left, active }: MarkerProps) => {
  return (
    <button
      className={styles.marker}
      style={{
        top: `${top}%`,
        left: `${left}%`,
        backgroundColor: active ? 'orange' : 'gray',
      }}
      disabled={!active}
    />
  )
}

export default Marker
