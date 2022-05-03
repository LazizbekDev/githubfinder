import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer';
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import './app.css'
import { GithubProvider } from './context/GithubContext';

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main className='container px-3 mx-auto pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
