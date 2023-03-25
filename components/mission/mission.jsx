import styles from './Mission.module.css'
import values from '../../public/values'
import { GiSpade, GiHummingbird, GiSewingNeedle } from 'react-icons/gi'
import {FaRecycle, FaHandshake, FaBusinessTime } from 'react-icons/fa'



export default function Mission(props) {
  // const iconsArr = [
  //   { iconComp: GiHummingbird, name: "GiHummingBird" },
  //   { iconComp: GiSpade, name: "GiSpade" },
  //   { iconComp: FaHandshake, name: "FaHandshake" },
  //   { iconComp: GiSewingNeedle, name: "GiSewingNeedle" },
  //   { iconComp: FaBusinessTime, name: "FaBusinessTime" },
  // ];

  return (
    <section>
      <div className={styles.sectionHeader}>Our Process</div>
      {values.map(({ value, icon, blurb }) => {

        
        return (
          <>
            <p>{value}</p>
            {/* <Icon/> */}
          </>
        )
      
      })
    }
    </section>
  )
}