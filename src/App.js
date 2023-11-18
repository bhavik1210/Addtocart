import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import  Carddetails from './Components/CardDetails/Carddetails'
import Cards from './Components/Cards/Cards'
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path='/'  element={<Cards/>}/>
      <Route path='/cart/:id'  element={<Carddetails/>}/>

     </Routes>
    </div>
  );
}

export default App;
