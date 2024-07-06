import './App.css'
import Routers from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import ToasterProvider from './components/Toaster.tsx';
import Navbar from './components/Navbar.tsx';

function App() {

  return (
    <Router>
      <ToasterProvider>
        <Navbar/>
        <Routers />
      </ToasterProvider>
    </Router>
  )
}

export default App
