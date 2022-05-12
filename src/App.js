import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { CartContext } from './context/MyContext';
import Home from './pages/Home';
import MyRoutes from './routes/MyRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
