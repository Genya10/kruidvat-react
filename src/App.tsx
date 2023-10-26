import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { OrderProvider } from './components/Context/OrderProvider';
import { Vitamin1 } from './components/Main/Items/vitamin1';
import { Vitamin2 } from './components/Main/Items/vitamin2';
import { Vitamin3 } from './components/Main/Items/vitamin3';
import { Vitamin4 } from './components/Main/Items/vitamin4';
import { Vitamin5 } from './components/Main/Items/vitamin5';
import { Vitamin6 } from './components/Main/Items/vitamin6';
import {BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <OrderProvider>
        <div className="App">
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/main" element={<Main />}/>
            <Route path="/vitamin1" element={<Vitamin1/>}/>
            <Route path="/vitamin2" element={<Vitamin2/>}/>
            <Route path="/vitamin3" element={<Vitamin3/>}/>
            <Route path="/vitamin4" element={<Vitamin4/>}/>
            <Route path="/vitamin5" element={<Vitamin5/>}/>
            <Route path="/vitamin6" element={<Vitamin6/>}/>
            
          </Routes>
        </div>
      </OrderProvider>
    </BrowserRouter>
  );
}

export default App;
