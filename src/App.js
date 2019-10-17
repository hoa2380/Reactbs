import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import SinhVien from './components/SinhVien/SinhVien';





/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Phan Văn Hoà</h1>
        <p>Đang học</p>
        <SinhVien hoten = "Phan Văn Hoà" tuoi = "19">
          Sở Thích: Bóng đá, Chơi Game, Chân lí trong tim tôi,...
        </SinhVien>
        
      </div>
    );
  }
}
export default App;
