import './App.css';
import Header from './components/header/Header'

import StartPage from './components/startPage/StartPage';
import StartPage2 from './components/StartPage2/StartPage2';
import SecondPage2 from "./components/secondPage/SecondPage2";
function App() {
  return (
    <div className="App">
        <Header/>
     {/* <StartPage2 />*/}
        <SecondPage2/>
    </div>
  );
}

export default App;
