import styles from './Mission.module.css'
import values from '../../public/values'
import React from 'react'
import { IconContext } from 'react-icons'


export default function Mission(props) {

  return (
    <section>
      <div className={styles.sectionHeader}>Our Process</div>
      <div className={styles.valuesContainer}>
        {values.map(({ value, icon, blurb },i) => {
        const Icon = icon
        
          return (
            <div className={styles.valueCard} key={i}>
              <p className={styles.valueLabel}>{value}</p>
              <IconContext.Provider value={{ className: styles.serviceIcon }}>
                <Icon />
              </IconContext.Provider>
            </div>
          )
        
        })
            }
      </div>
    </section>
  )
}