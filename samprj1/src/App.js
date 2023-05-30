import logo from './logo.svg';
import './App.css';
import Sample1 from './components/Sample1';
import Sample2 from './components/Sample2';
import Sample3 from './components/Sample3';
import Sample4 from './components/Sample4';
import Sample5 from './components/Sample5';
import Sample6 from './components/Sample6';
import Sample7 from './components/Sample7';
import Sample8 from './components/Sample8';
import Firstcom from './components/Firstcom';
import Secondcom from './components/Secondcom';
import Sample9 from './components/Sample9';
function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Sample1/>
         <Sample2/>
        <Sample3/>
        <Sample4 fname ="sathya"/>
        <Sample5 fname ="sathya" dept ="mechanical"/>
        <Sample6 name = "sathya" dept ="mechanical"/>
        <button>submit </button>
        <Sample7/>
        <Sample8/>
        <Firstcom/>
        <Secondcom/>
      <Sample9/>
    </div>
  );
}

export default App;
