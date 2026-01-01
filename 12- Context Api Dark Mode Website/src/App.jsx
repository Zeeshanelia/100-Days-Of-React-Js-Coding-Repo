import { DarkModeProvider } from './Context/DarkModeContext';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import './App.css';

export default function App() {
  return (
    <DarkModeProvider>
      <Navbar />
      <Home />
    </DarkModeProvider>
  );
}
