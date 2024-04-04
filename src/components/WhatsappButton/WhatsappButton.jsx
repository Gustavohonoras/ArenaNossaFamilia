import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import styles from './styles.module.scss'

export const WhatsAppButton = () => {
    return (
        <a className={styles.wpp} href="https://wa.me/5588997856125"
           style={{
               backgroundColor: '#02821c',
               color: '#FFF',
               borderRadius: '50px',
               textAlign: 'center',
               boxShadow: '1px 1px 2px #888',
               zIndex: '1000',
               textDecoration: 'none', // Remova a sublinhado do link
           }}
           target="_blank"
        >
            <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
        </a>
    );
};