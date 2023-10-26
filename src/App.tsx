import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { OrderProvider } from './components/Context/OrderProvider';

function App() {
  return (
    <OrderProvider>
    <div className="App">
      <Header />
      <Sidebar/>
      <Main/>
     {/*} <Footer/>*/}
    </div>
    </OrderProvider>
  );
}

export default App;
