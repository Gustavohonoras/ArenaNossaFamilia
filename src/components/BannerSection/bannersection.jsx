
import img from "../assets/fotomu.png"
import styles from "./styles.module.scss"
import {Link} from "react-router-dom";
export const Bannersection = () =>{

    return(
        <div className={styles.div}>
            <div className={styles.texts}>
                <h1 className={styles.h1}>AGENDE JÁ SUA HORA COM A GENTE</h1>
                <span className={styles.span}>Entendemos como estressante pode ser o dia a dia,
                e descobrir uma atividade que o conecte de maneiras
                diferentes consigo mesmo é uma excelente oportunidade
                para renovar as energias, reduzir o estresse e manter-se em
                forma. Aqui na Arena Multitennis em Russas, temos certeza de que você
                encontrará uma variedade de atividades para desfrutar e se divertir
                ao máximo.
                </span>
                <Link to={'/dashboard'} className={styles.button}> Ver Nossas Modalidades </Link>
            </div>

            <img className={styles.img} src={img} alt=''/>

        </div>
        );
}