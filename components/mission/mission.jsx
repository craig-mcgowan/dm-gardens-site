import styles from './Mission.module.css'
import values from '../../public/values'
import React from 'react'
import { IconContext } from 'react-icons'
import { GiSpade, GiHummingbird, GiSewingNeedle } from 'react-icons/gi'
import {FaRecycle, FaHandshake, FaBusinessTime } from 'react-icons/fa'



export default function Mission(props) {

  return (
    <section>
      <div className={styles.sectionHeader}>Our Process</div>
      {values.map(({ value, icon, blurb }) => {
      const Icon = icon
  
        
        return (
          <div className={styles.valuesContainer}>
            <p>{value}</p>
            <IconContext.Provider value={{ className: styles.serviceIcon }}>
              <Icon />
            </IconContext.Provider>

          </div>
        )
      
      })
    }
    </section>
  )
}