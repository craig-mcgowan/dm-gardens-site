import styles from './Mission.module.css'
import values from '../../public/values'
import React from 'react'
import { IconContext } from 'react-icons'
import ContactForm from '../ContactForm'


export default function Mission(props) {

  return (
    <section>
      <div className={styles.sectionHeader}>Our Process</div>
      <div className={styles.valuesContainer}>
        {values.map(({ value, icon, blurb }) => {
        const Icon = icon
        
          return (
            <div className={styles.valueCard}>
              <p>{value}</p>
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