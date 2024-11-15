import styles from './RowTwoSection.module.css';
import line from '../../../assets/images/svg/Line 1.svg';
import box1Card1 from '../../../assets/images/home-image/Stickers V32.svg';
import box1card1Img2 from '../../../assets/images/home-image/Stickers V26.png'
import box2cardImg from '../../../assets/images/home-image/Stickers V2 (1).png';
import box3cardImg from '../../../assets/images/home-image/Stickers V42.png';
import {motion} from 'framer-motion';
import {fadeIn} from '../../../../varient'

const RowTwoSection = () => {
  return (
    <section className={styles.home__row_two_section}>
      <div  className={`app--row-container ${styles.home__row_two_container}`}>
        
        {/* Header Section */}
        <div className={styles.home__row_two_header_container}> 
          <motion.div
          variants={fadeIn('right',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.01}} 
          className={styles.home__row_two_header}>
            <img src={line} alt="Line Decoration" />
            Features
          </motion.div>
          <motion.h2
            variants={fadeIn('left',0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.01}}
          >Why Join HoodHub?</motion.h2>
        </div>

        {/* Why Join Section */}
        <div className={styles.JoinUs_container}>
          
          {/* First Box */}
          <motion.div 
            variants={fadeIn('up',0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.01}}
            
          className={styles.box1}>
            <h3>Never miss a beat</h3>
            <p>Stay updated on everything happening in your area.</p>
            <img src={box1Card1} className={styles.box1card1Img1} alt="Card 1" />
            <img src={box1card1Img2} className={styles.box1card1Img2} alt="Decoration" />
          </motion.div>

          {/* Side Container (Second and Third Boxes) */}
          <div className={styles.side_container}>

            {/* Second Box */}
            <motion.div 
              variants={fadeIn('right',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.01}}
            
              className={styles.box2}>
              <div 
              className={styles.box2Text}>
                <h3>Watch out for each other</h3>
                <p>
                  Keep an eye on your neighborhood. Report any odd happenings and
                  get quick alerts about local safety concerns.
                </p>
              </div>
              <div className={styles.box2Img}>
                <img src={box2cardImg} alt="Card 2" />
              </div>
            </motion.div>

            {/* Third Box */}
            <motion.div 
              variants={fadeIn('left',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.01}}
              className={styles.box3}>
              <div className={styles.box3cardImg}>
                <img src={box3cardImg} alt="Card 3" />
              </div>
              <div className={styles.box3cardText}>
                <h3>Find your tribe</h3>
                <p>
                  Meet people who live just around the corner. 
                  Join groups based on your interests or start your
                  own to connect with neighbors who share 
                  your passions.
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default RowTwoSection;
