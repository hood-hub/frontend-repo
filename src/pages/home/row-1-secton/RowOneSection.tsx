import styles from "./RowOneSection.module.css";
import heroImg from '../../../assets/images/home-image/heroimg.png'
import appleLogo from '../../../assets/images/svg/bi_apple.svg'
import playStoreLogo from '../../../assets/images/svg/playstore.svg'
import QrCode from '../../../assets/images/home-image/barcode.png'
import {motion} from 'framer-motion';
import {fadeIn} from '../../../../varient'




function RowOneSection() {
 
  return (
    <>
      <section className={styles.home__row_one_section}>
        {/* Home Row Container */}
        <div className={`app--row-container ${styles.home__row_one_container}`}>
          {/* Row One Left / Welcome Text*/}
          <div className={styles.home__row_one__left}>
              <motion.div 
              variants={fadeIn('up',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.01}}
              
              className={styles.welcome_text_wrapper}>
                <span>Your Neighborhood,</span>
                <span>Now closer than ever</span>
              </motion.div>

              {/* sub-title Text */}
              <motion.div 
              variants={fadeIn('down',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.01}}
              className={styles.sub_title_text}>
                <p>
                  HoodHub brings your local community to 
                  life right on your phone. Share news, plan events, and keep your area safe - all in 
                  one easy-to-use app.
                </p>
              </motion.div>

             {/* download button */}
              <div className={styles.store_buttons}>
                {/* apple store button */}
                <motion.a 
                variants={fadeIn('right',0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.01}}
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=AjKOAc5sBUWv1KvSB9qmJr6jcxOMICJGsuwWS2eXblVUMEhWQTZVVUI0VFE2RFNXMU9CWElCM0VaRi4u&embed=true" 
                className={styles.apple}>
                  <div className={styles.downloadBtn}>
                    <img src={appleLogo} alt="Apple Store"/>  
                    <div className={styles.downloadText}>
                      <p>Download on the</p>
                      <h3>Apple Store</h3>
                    </div>
                  </div> 
                </motion.a>
                {/* playstore button */}
                <motion.a
                variants={fadeIn('left',0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.01}} 
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=AjKOAc5sBUWv1KvSB9qmJr6jcxOMICJGsuwWS2eXblVUMEhWQTZVVUI0VFE2RFNXMU9CWElCM0VaRi4u&embed=true" 
                  className={styles.google}>
                  <div className={styles.downloadBtn}>
                    <img src={playStoreLogo} alt="Google Play"/> 
                    <div className={styles.downloadText}>
                      <p>Get it on</p>
                      <h3>Google Play</h3>
                    </div>
                  </div>
                </motion.a>
              </div>

              {/* scan QR code  */}
              <motion.div 
              variants={fadeIn('up',0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.01}}
              className={styles.scanQR}>
                <p>or scan to get the app</p>
                <div className={styles.QRimg} >
                  <img src={QrCode} alt="scan Qr code" />
                </div>
              </motion.div>
           
          </div>

          {/* Row One Right / Introduction Text*/}
          <motion.div
          variants={fadeIn('right',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.01}} 
          className={styles.home__row_one__right}>
            <div className={styles.row_image_wrapper}>
                <img src={heroImg} alt="" />            
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default RowOneSection;
