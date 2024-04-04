import styles from "./styles.module.scss"
import logo from "../assets/ARENA MUT.png";
import {Link} from "react-router-dom";
import {Quadra02} from "../../components/calendar/calendar02.jsx";


export const Quadra2 = () => {
    return(
        <main>

            <header className={styles.header}>
                <img src={logo} className={styles.img} alt="Logo" />
                <div className={styles.button}>
                    <Link to="/" className={styles.button1} >Voltar ao ínicio</Link>
                    <Link to="/agendamento" className={styles.button1} >Ver Quadras</Link>
                </div>
            </header>

            <div className={styles.div}>
                <h1 className={styles.h1}>Agende abaixo seu horário!</h1>
                <span className={styles.span}>aguarde o carregamento dos horários disponíveis</span>
                <Quadra02/>
            </div>

            <footer className={styles.footer}>
                <span className={styles.textf}>Todos os direitos reservados ©</span>
                <span className={styles.textf}>Gustavo Honorato Cordeiro, 2023</span>
            </footer>
        </main>
    )

}