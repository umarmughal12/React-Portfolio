import './App.css';
import './index.css';

import Header from './components/Header';
import Footer, { Copyright } from './components/Footer';

import Home, { About, Counter, Gallery, Services } from './components/Home';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Counter />
      <Gallery />
      <Footer/>
      <Copyright />
    </div>
  );
}

export default App;
