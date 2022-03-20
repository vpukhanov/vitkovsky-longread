import Image from 'next/image'

import styles from '../styles/Map.module.css'
import { MARKERS } from './const'
import Marker from './marker'

import map from './resources/map.jpg'

type MapProps = {
  activeMarker: string
}

const Map = ({ activeMarker }: MapProps) => {
  return (
    <section className={styles.map}>
      <Image
        src={map}
        placeholder='blur'
        layout='responsive'
        alt='Навигационная карта'
      />
      <div className={styles.markers}>
        {MARKERS.map(marker => (
          <Marker
            {...marker}
            active={marker.location === activeMarker}
            key={marker.location}
          />
        ))}
      </div>
    </section>
  )
}

export default Map
