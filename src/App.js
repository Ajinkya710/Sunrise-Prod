// Latest Commit
import React, { Component  } from 'react';
import './App.css'
import Header from './components/Header'
import Home from './components/Home';
import Footer from './components/Footer'
import About from './components/About'
import Countries from './components/Countries'
import Universe from './components/Universe'
import Team from './components/Team'
import FAQ from './components/FAQ'
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-247673740-1');

class App extends Component {
  componentDidMount(){
    document.title = "Sunrise Study";
  }
  render() {
    // ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <>
      <Header/>
      <Home/>  
      <About/>
      <Countries/>
      <Universe/>  
      <Team/>
      <FAQ/>
      <Footer/>
      </>
    );
  }
}

export default App;