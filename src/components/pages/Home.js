import styles from './Home.module.css'
import saving from '../../img/saving.png'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/novoprojeto' text='Criar Projeto'/>
            <img src={saving} alt="Costs"/>
        </section>
    )
}

export default Home