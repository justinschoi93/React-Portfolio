import { Outlet }  from 'react-router-dom';
import Header  from './components/header';
import Footer  from './components/footer';
import './App.css';



function App() {
  return (
    <div className="App">
        <Header/>
      <div className='body'>
          <Outlet/>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
