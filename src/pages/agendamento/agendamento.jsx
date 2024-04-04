
import styles from "./styles.module.scss"
import logo from "../assets/MULTILARANJA.png";
import {Link} from "react-router-dom";

export const Agendamento = () =>{

    return(
        <main className={styles.main}>

            <header className={styles.header}>
                <img src={logo} className={styles.img} alt="Logo" />
                <div className={styles.button}>
                    <Link to="/" className={styles.button1} >Voltar ao ínicio</Link>
                </div>
            </header>


            <div className={styles.quadras}>
                <h1 className={styles.h1}> Escolha sua quadra e agende seu horário!</h1>
                <Link to="/quadra_1" className={styles.quadra1}>
                    <h1>QUADRA 1</h1>
                </Link>
                <Link to={'/quadra_2'} className={styles.quadra2} >
                    <h1>QUADRA 2</h1>
                </Link>
                <Link to={'/quadra_3'} className={styles.quadra3}>
                    <h1>QUADRA 3</h1>
                </Link>
            </div>

            <footer className={styles.footer}>
                <span className={styles.textf}>Todos os direitos reservados ©</span>
                <span className={styles.textf}>Gustavo Honorato Cordeiro, 2023</span>
            </footer>
        </main>
    )
}