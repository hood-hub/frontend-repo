import styles from './RowFourSection.module.css'
import waitlistImg1 from '../../../assets/images/home-image/Introduction.png'
import waitlistImg2 from '../../../assets/images/home-image/Introduction (1).png'
import waitlistImg3 from '../../../assets/images/home-image/Introduction (2).png'
import waitlistImg4 from '../../../assets/images/svg/variations-standing.svg'
import PrimaryButton from '../../../components/button/primary-button/PrimaryButton'
import {motion} from 'framer-motion';
import {fadeIn} from '../../../../varient'


const RowFourSection = () => {
  return (
    <section className={styles.home__row_four_section}>
      <div className={styles.home__row_four_container}>
        <motion.div 
          variants={fadeIn('down',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.01}}
        className={styles.row_four_top}>
          <div className={styles.row_four_topText_right}>
            <h3>Join the HoodHub Waitlist</h3>
          </div>
          <div className={styles.row_four_topText_left}>
            <p>
              Join our waitlist now and be the first
              <span>to</span>
              <span>know when HoodHub is ready</span>
              <span>to connect your community.</span>
              <span className={styles.waitlist_button}>
                <PrimaryButton
                  placeholder="Join waitlist"
                  onClick={() => (window.location.href = "/#waitlist")}
                  className={styles.waitlist_button_wrapper}
                />
             </span>
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('up',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.01}}
         className={styles.row_four_bottom}>
          <img src={waitlistImg1} className={styles.row_four_img1} alt="" />
          <img src={waitlistImg2} className={styles.row_four_img2} alt="" />
          <img src={waitlistImg3} className={styles.row_four_img3} alt="" />
          <img src={waitlistImg4} className={styles.row_four_img4} alt="" />
        </motion.div>
      </div>
    </section>
      
  )
}

export default RowFourSection
