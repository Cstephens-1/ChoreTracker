import logo from './logo.svg';
import './App.css';
import Wallet from './components/Wallet';
import Chores from './components/Chores';

function App() {
  return (
    <div className="App">
      <header>Welcome to Chore Tracker!</header>
      <div>
        <Wallet />
        <Chores />
      </div>
    </div>
  );
}

export default App;
