import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt='icone'/></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/compania">Compania</Link></li>
                    <li className={styles.item}><Link to="/contato">Contato</Link></li>
                    <li className={styles.item}><Link to="/projeto">Projetos</Link></li>
                </ul>
                
                
              
            </Container>
        </nav>
    )
}

export default Navbar