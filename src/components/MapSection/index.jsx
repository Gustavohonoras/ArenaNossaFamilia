
import styles from "./styles.module.scss"



export const MapsSection = () =>{

    const MapaGoogle = () => {
        return (
            <iframe className={styles.map}
                src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.668516997072!2d-38.097777324205936!3d-5.156930652108829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bbd1001ea2f73d%3A0x6945f04fd7a65b94!2sARENA%20NOSSA%20FAM%C3%8DLIA!5e0!3m2!1spt-BR!2sbr!4v1712195295978!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        );
    };

    return(
        <div className={styles.div}>
        <h1 className={styles.h1}>ONDE FICAMOS LOCALIZADOS?</h1>
        <MapaGoogle/>
        </div>
    )

}


