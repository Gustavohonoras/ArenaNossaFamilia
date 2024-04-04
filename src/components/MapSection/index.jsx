
import styles from "./styles.module.scss"



export const MapsSection = () =>{

    const MapaGoogle = () => {
        return (
            <iframe className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1677.9836025285472!2d-37.98301547879197!3d-4.921190402607891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b9777169c049b7%3A0x9abc69a3d36714d2!2sArena%20Mut-Tennis!5e1!3m2!1spt-BR!2sbr!4v1712170662552!5m2!1spt-BR!2sbr"
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


