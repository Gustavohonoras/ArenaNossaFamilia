
import img from "../assets/fotomt2.png"
import styles from "./styles.module.scss"
import {Link} from "react-router-dom";
export const Bannersection2 = () =>{

    return(
        <div className={styles.div}>
            <div className={styles.texts}>
                <h1 className={styles.h1}>O MELHOR LUGAR PARA
                    SE CONFRATERNIZAR COM AMIGOS</h1>
                <span className={styles.span}>Nossa galera tá pronta pra te receber de braços abertos
                    e fazer desse rolê uma experiência incrível, cheia de vibes positivas e muita diversão.
                    Vem colar com a gente e descobrir por que somos o point top pra quem curte não só dar um
                    gás nos esportes, mas também fortalecer a amizade e curtir momentos de puro lazer.
                    Tamo esperando você aqui na Mut Tennis em Russas!
                </span>
                <Link to={'/agendamento'} className={styles.button}> Agendar Horário </Link>
            </div>

            <img className={styles.img} src={img} alt=''/>

        </div>
        );
}