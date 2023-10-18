import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JsonData from './data/data.json';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import { useEffect, useState } from 'react';
import Login from './components/login';
import Register from './components/register';
import HomePage from './components/page';

function App() {
  const [data, setData] = useState({});
  useEffect(()=> {
    setData(JsonData);
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage data={data} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
