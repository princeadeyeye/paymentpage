import React from 'react';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Dashbord from './components/Dashbord';
import Profile from './components/Profile';
import ExchangeCurrency from './components/ExchangeCurrency';
import MoneyTransfer from './components/MoneyTransfer';
import WithdrawMoney from './components/WithdrawMoney';
import Support from './components/Support';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
     <Header />
     <Error />
     <Newsletter />
     <Footer />
    </div>
  );
}

export default App;
