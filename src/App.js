import './App.css';
import { TableData } from './Components';
// import Table from './Components/Table';

function App() {
  return (
    <div className="App">
      <TableData></TableData>
      <p>Rates are based from 1 USD</p>
      <p>This application uses API from <a>https://currencyfreaks.com/</a></p>
    </div>
  );
}

export default App;
