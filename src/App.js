import './App.css';
import MainScreen from './components/MainScreen';
import RightSide from './components/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="glass">
        <Sidebar />
        <MainScreen/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
