import logo from './logo.svg';
import './App.css';
import WelcomeFc from './components/WelcomeFc';
import Welcome from './components/Welcome';

function App() {
  let myName = 'Abdallah';
  return (
    <div className="App">
      <WelcomeFc name={myName} age ="25" />
      <Welcome name="Ahmed" age ="20" />
      <Welcome name="Ali" age ="11" />
    </div>
  );
}


export default App;
