import './App.css';
import Header from './components/project/Header';
import { AppWrapper } from './components/project/project.style';
import { Routes,Route } from 'react-router-dom';
import Anbod from './components/project/Anbod/Anbod';
import Home from './components/project/Home';
import Detail from './components/project/Anbod/Detail';



function App() {
  return (
    <>
    <AppWrapper>
      <Header/>
      <Routes>
  <Route path='/' exact element={<Home/>}/>
  <Route path='/anbod' exact element={<Anbod/>}/>
  <Route path='/detail' exact element={<Detail/>} />
  </Routes>
  

  </AppWrapper>
    </>
  );
}

export default App;
