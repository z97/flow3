import './App.css';
import Header from './components/header/Header'
import SecondPage from "./components/secondPage/SecondPage";
import StartPage from './components/startPage/StartPage';
function App() {
  return (
    <div className="App">
      <Header/>
        <StartPage/>
        <SecondPage/>
    </div>
  );
}

export default App;
