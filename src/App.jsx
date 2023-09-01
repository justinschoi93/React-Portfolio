import {Outlet}  from 'react-router-dom';
import Header  from './components/header';
import Footer  from './components/footer';



function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <div className='body'>
          <Outlet/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
