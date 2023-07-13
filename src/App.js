
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Menu from './components/menu';
import About from './components/about';
import Review from './components/Review';
import Services from './components/Services';
import Subscribe from './components/subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='background'>
        <Header/>
        <Hero/>

        <Menu/>

      {/* <About/> */}
      <Review/>
      <Services/>
      <Subscribe/>

      <Footer/>
      </div>

    </div>
  );
}

export default App;
