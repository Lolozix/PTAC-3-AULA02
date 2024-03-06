
import styles from "./footer.module.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.foo}>
             <p>ORGULHOSAMENTE FEITO COM </p>
            <Image
            width={140}
            height={85}
            src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"}/>
          
         
        </header>
    );
}