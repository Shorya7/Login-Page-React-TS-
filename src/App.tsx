import './App.css'
import Routers from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import ToasterProvider from './components/Toaster.tsx';

function App() {

  return (
    <Router>
      <ToasterProvider>
        <Routers />
      </ToasterProvider>
    </Router>
  )
}

export default App
