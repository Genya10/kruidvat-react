import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { OrderProvider } from './components/OrderProvider';

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
