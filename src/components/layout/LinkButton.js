import { Link } from "react-router-dom"
import styles from './LinkButton.module.css'

function LinkButton({to, text}){ //torna dinamico
    return(
        <Link className={styles.bnt} to={to} >
            {text}
        </Link>
    )
}

export default LinkButton