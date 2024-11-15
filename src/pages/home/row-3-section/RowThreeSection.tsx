import styles from './RowThreeSection.module.css'
import line from '../../../assets/images/svg/Line 1.svg'
import Steps from '../../../components/steps/Steps'
import CardImg1 from '../../../assets/images/home-image/Frame.png'
import CardImg2 from '../../../assets/images/home-image/Frame (1).png'
import CardImg3 from '../../../assets/images/home-image/Frame (2).png'
import {motion} from 'framer-motion';
import {fadeIn} from '../../../../varient'


const RowThreeSection = () => {
  return (
    <section className={styles.home__row_three_section}>
      <div className={styles.home__row_three_container}>
        <div className={styles.left_section}>
          <div className={styles.steps_section_header_container}>
            <motion.div 
               variants={fadeIn('right',0.2)}
               initial='hidden'
               whileInView={'show'}
               viewport={{once: false, amount: 0.01}}
            className={styles.steps_section_header}>
              <img src={line} alt="" />
              Easy-To-Use
            </motion.div>
            <motion.h2
             variants={fadeIn('left',0.2)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.01}}
            >How do I use HoodHub?</motion.h2>
          </div>
          <motion.div 
           variants={fadeIn('up',0.2)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.01}}
          className={styles.steps_section_components}>
            <Steps 
              title="1. Download HoodHub app and Sign up" 
              description="Create your profile quickly and easily when the 
                app launches."
            />
            <Steps 
              title="2. Find your hood" 
              description="We'll use your address to connect you with your local group."
            />
            <Steps 
              title="3. Jump right in" 
              description="Start posting, chatting, or just say hello to the folks next door."
            />
          </motion.div>
        </div>
        {/* right section container */}
        <div className={styles.right_section_container}>
           {/* <!-- Content for the first box --> */}
          <motion.div 
             variants={fadeIn('right',0.2)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.01}}
          className={styles.stepsBox1}>
            <h3>1</h3>
            <img src={CardImg1} alt="" />
          </motion.div>
          {/* <!-- Content for the second box --> */}
          <motion.div 
             variants={fadeIn('left',0.2)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.01}}
          className={styles.stepsBox2}>
            <h3>2</h3>
            <img src={CardImg2} alt="" />
          </motion.div>
          {/* <!-- Content for the third box --> */}
          <motion.div 
           variants={fadeIn('left',0.2)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.01}}
          className={styles.stepsBox3}>
            <h3>3</h3>
            <img src={CardImg3} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RowThreeSection
