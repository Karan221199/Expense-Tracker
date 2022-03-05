import './App.css';
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom';
import AddExpense from './pages/add-expense';
function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/add-expense' exact element={<AddExpense />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
