import './App.css';
import Header from './components/header/Header'
import SecondPage from "./components/secondPage/SecondPage";
import StartPage from './components/startPage/StartPage';
import StartPage2 from './components/StartPage2/StartPage2';
import SmallItem from './components/StartPage2/smallItem/SmallItem';
import SmallItems from './components/StartPage2/smallIlems/SmallItems';
function App() {
  return (
    <div className="App" style={{"border": "10px black"}}>

      <SmallItems/>
    </div>
  );
}

export default App;
