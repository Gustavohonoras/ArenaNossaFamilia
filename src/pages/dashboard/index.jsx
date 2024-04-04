import { FaVolleyball } from "react-icons/fa6";
import styles from "./styles.module.scss"
import logo from "../assets/ARENA MUT.png"
import volei from "../assets/VOLEI.png"
import futvo from '../assets/futv.png'
import bt from "../assets/BT.png"
import {Link} from "react-router-dom";
import logo2 from "../assets/ARENA MUT.png";
    export const Dashboard = () =>{

        return(
            <main>

                <header className={styles.header}>
                    <img src={logo} className={styles.img} alt="Logo" />
                    <div className={styles.button}>
                        <Link to="/" className={styles.button1} >Voltar ao ínicio</Link>
                    </div>
                </header>

                <div className={styles.title}>
                    <h1 className={styles.h1}>CONHEÇA NOSSAS MODALIDADES</h1>
                    <FaVolleyball className={styles.bola}/>
                </div>

                <div className={styles.modalidades}>

                    <div className={styles.cards}>
                        <img src={volei} className={styles.img}/>
                        <div className={styles.texts}>
                        <h1 className={styles.name_azul}>VOLÊI</h1>
                        <div className={styles.description1}>
                        <span className={styles.description}>
                        O vôlei de praia é um esporte vibrante jogado em equipe na areia.
                        Além de promover o trabalho em grupo, oferece uma ótima maneira de
                        se exercitar ao ar livre, contribuindo para uma vida saudável e equilibrada.
                        </span>
                        </div>

                        </div>

                    </div>

                    <div className={styles.cards}>
                        <img src={bt} className={styles.img}/>
                        <div className={styles.texts}>
                            <h1 className={styles.name}>BEACH TENNIS</h1>
                            <div className={styles.description2}>
                            <span className={styles.description}>
                            O beach tennis é um esporte praticado em duplas,
                            jogado em uma quadra de areia, que combina elementos do tênis,
                            vôlei e badminton. Além de ser uma atividade divertida e social,
                            o beach tennis promove a saúde física e mental, incentivando a interação
                            em grupo e um estilo de vida ativo e saudável.
                        </span>
                        </div>

                        </div>

                    </div>

                    <div className={styles.cards}>
                        <img src={futvo} className={styles.img}/>
                        <div className={styles.texts}>
                            <h1 className={styles.name_azul}>FUTVÔLEI</h1>
                            <div className={styles.description1}>
                         <span className={styles.description}>
                            O futvôlei é uma modalidade esportiva que mistura elementos do futebol
                            e do vôlei, jogado em uma quadra de areia. Além de ser uma atividade dinâmica
                            e empolgante, o futvôlei promove a interação entre os jogadores, destacando a
                            importância do trabalho em equipe e contribuindo para um estilo de vida ativo
                            e saudável.
                            </span>
                            </div>
                        </div>

                    </div>

                    <h1 className={styles.h1}>Ficou interessado em alguma modalidade?</h1>
                    <Link to={"/agendamento"} className={styles.span}>Clique aqui e faça seu agendamento</Link>

                </div>

                <footer className={styles.footer}>
                    <p className={styles.text}>
                        <span className={styles.textf}>Arena Multitennis ® 2024 • Todos os direitos reservados</span>
                        <span className={styles.textf}>   Site by Gustavo Honorato</span>
                    </p>
                    <img className={styles.logo} src={logo2}/>
                </footer>
            </main>
        )
    }