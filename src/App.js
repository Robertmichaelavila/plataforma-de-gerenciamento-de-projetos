import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Compania from './components/pages/Compania';
import Contato from './components/pages/Contato';
import Projetos from './components/pages/Projetos'
import NovoProjeto from './components/pages/NovoProjeto';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/compania' element={<Compania/>}/>
          <Route exact path='/contato' element={<Contato/>}/>
          <Route exact path='/projeto' element={<Projetos/>}/>
          <Route exact path='/novoprojeto' element={<NovoProjeto/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App;
