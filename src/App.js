import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import SanPham from './components/SanPham/SanPham';





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
        <h1>SẢN PHẨM</h1>
        <SanPham tenSanPham = "Iphone 11" maSanPham = "1" giaSanPham = "30.000.000" >
          Hàng Chính Hãng
        </SanPham>
        <p>==</p>
        <SanPham tenSanPham = "Samsung Galaxy Note 10" maSanPham = "2" giaSanPham = "20.000.000" >
          Hàng Xách Tay
        </SanPham>
        <p>==</p>
        <SanPham tenSanPham = "Samsung Galaxy S10" maSanPham = "3" giaSanPham = "15.000.000" >
          Hàng Chính Hãng
        </SanPham>
        <p>==</p>
        <SanPham tenSanPham = "Iphone 11 Pro Max" maSanPham = "4" giaSanPham = "40.000.000" >
          Hàng Chính Hãng
        </SanPham>
        <p>==</p>
        <SanPham tenSanPham = "Iphone X" maSanPham = "5" giaSanPham = "17.000.000" >
          Hàng Chính Hãng
        </SanPham>
        <p>==</p>

        
      </div>
    );
  }
}
export default App;
