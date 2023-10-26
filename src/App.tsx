import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { OrderProvider } from './components/Context/OrderProvider';

import {BrowserRouter , Route } from "react-router-dom";
import { RoutesComponent } from './components/Routes/RoutesComponent';

function App() {
  return (
    <BrowserRouter>
      <OrderProvider>
        <div className="App">
          <Header />
          <Sidebar />
          <RoutesComponent />
        </div>
      </OrderProvider>
    </BrowserRouter>
  );
}

export default App;
