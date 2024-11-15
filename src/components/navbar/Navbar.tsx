import styles from './Navbar.module.css'
import logo from '../../assets/images/svg/logo.svg'
import PrimaryButton from '../button/primary-button/PrimaryButton'


const Navbar = () => {
  return (
    <section className={styles.navbar_container}>
      <div className={styles.navbar_inner}>
      <div className={styles.nav_logo_container}>
        <img src={logo} alt="logo image" />
      </div>
      
      <div className={styles.dowloadApp_button_container}>
        <PrimaryButton
          placeholder="Download app"
          onClick={() => (window.location.href)}
          className={styles.dowload_button_wrapper}
        />
        </div>
      </div>
      
    </section>
  )
}

export default Navbar
