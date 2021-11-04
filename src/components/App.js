import './styles/App.css';
import { Main } from './Main';
import { Header } from './Header'
import Buttons from './Buttons';

function App() {
  return (
    <article className="payment-card">
      <Header/>
      <Main />
      <Buttons />
    </article>
  );
}

export default App;
