import { Link } from "react-router-dom";
import { MapsSection} from "../../components/MapSection";
import logo from "../assets/ARENA MUT.png";
import styles from "./styles.module.scss";
import {WhatsAppButton} from "../../components/WhatsappButton/WhatsappButton.jsx";
import {Bannersection} from "../../components/BannerSection/bannersection.jsx";
import {Bannersection2} from "../../components/BannerSection02/bannersection.jsx";
import logo2 from "../../pages/assets/MULTILARANJA.png"


export const Home = () => {

    return (
    <main className={styles.main}>
        <WhatsAppButton/>
      <header className={styles.header}>
        <img src={logo} className={styles.img} alt="Logo" />
          {/*<div className={styles.menu}>*/}
          {/*    <Link to="/dashboard" className={styles.textheader}>MODALIDADES</Link>*/}
          {/*    <Link to="/dashboard" className={styles.textheader}>PRECOS</Link>*/}
          {/*    <Link to="/dashboard" className={styles.textheader}>CONTATO</Link>*/}
          {/*    <Link to="/dashboard" className={styles.textheader}>QUADRAS</Link>*/}
          {/*</div>*/}

        <div className={styles.button}>
            <Link to="/agendamento" className={styles.button1} >Ver Horários Disponíveis</Link>
        </div>
      </header>

      <div className={styles.banner}>
        <h1 className={styles.h1}>DESCUBRA A EMOÇÃO DOS ESPORTES DE PRAIA</h1>
          <span className={styles.span}>  A mais moderna arena com 3 quadras, materiais de qualidade e área para alimentação e descontração </span>
      </div>

        <MapsSection />
        <Bannersection/>
        <Bannersection2/>

      <footer className={styles.footer}>
        <p className={styles.text}>
          <span className={styles.textf}>Arena MultiTennis ® 2024 • Todos os direitos reservados</span>
          <span className={styles.textf}>   Site by Gustavo Honorato</span>
        </p>
        <img className={styles.logo} src={logo2}/>
      </footer>
    </main>
  );
}





