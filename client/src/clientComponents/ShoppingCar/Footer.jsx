import logo from '../../assets/mercadopago/horizontal_logo.png'
import styles from './ShoppingCar.module.css';

const Footer = () => {
    return (
      <footer>
        <div className={styles.footer_logo}>
          <img
            className={styles.horizontal_logo}
            alt="image of the logo"
            src={logo}
          />
        </div>
        <div className={styles.footer_text}>
          <p>Developers Site:</p>
          <p>
            <a href="https://developers.mercadopago.com" target="_blank">
              https://developers.mercadopago.com
            </a>
          </p>
        </div>
      </footer>
    );
  };


export default Footer;