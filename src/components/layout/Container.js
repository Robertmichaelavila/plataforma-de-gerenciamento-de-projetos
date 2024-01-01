import styles from './Container.module.css'

function Container(props){
    return(
        //a customClass é utilizada para adicionar outros classes de estilos no app.js
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
    )
}

export default Container