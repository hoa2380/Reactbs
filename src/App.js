import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
// import SanPham from './components/SanPham/SanPham';
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
  state = {
    sinhVien : [
      { hoten: 'Nguyễn Thị Tẹo', tuoi: 35, sothich: 'ngủ nướng'},
      { hoten: 'Nguyễn Thị Téo', tuoi: 36, sothich: 'shopping'},
      { hoten: 'Nguyễn Văn Tị', tuoi: 36, sothich: 'playing pes'}
    ],
    lop : 'Lập trình ReactJS'
  }

xuLyCapNhat = () => {

this.setState(
  {
    sinhVien : [
      { hoten: 'Nguyễn Thị Túng', tuoi: 34, sothich: 'Túng con cá'},
      { hoten: 'Nguyễn Văn Ngụ', tuoi: 32, sothich: 'Ngụ lụ tụ'},
      { hoten: 'Nguyễn Văn Tiếu', tuoi: 34, sothich: 'Tiếu liếu liếu'}
    ],
  }
);

}

  render(){
    return(
      <div className="App">
        <h1>Ứng dụng React đầu tiên</h1>
        <h3>Đến từ Phan Văn Hoà - Lớp {this.state.lop}</h3>
        <button onClick = {this.xuLyCapNhat}>
          Cập nhật
        </button>
        
      <SinhVien 
      hoten={this.state.sinhVien[0].hoten}
      tuoi={this.state.sinhVien[0].tuoi}
      sothich={this.state.sinhVien[0].sothich}
      >
      </SinhVien>
      <p>==</p>
      <SinhVien 
      hoten={this.state.sinhVien[1].hoten}
      tuoi={this.state.sinhVien[1].tuoi}
      sothich={this.state.sinhVien[1].sothich}
      >
      </SinhVien>
      <p>==</p>
      <SinhVien 
      hoten={this.state.sinhVien[2].hoten}
      tuoi={this.state.sinhVien[2].tuoi}
      sothich={this.state.sinhVien[2].sothich}
      >
      </SinhVien>
        {/* <h1>SẢN PHẨM</h1>
        <SanPham tenSanPham = "Iphone 11" maSanPham = "01" giaSanPham = "30.000.000" >
          Hàng Chính Hãng
        </SanPham>
        <p>==</p>
        <SanPham tenSanPham = "Samsung Galaxy Note 10" maSanPham = "02" giaSanPham = "20.000.000" >
          Hàng Xách Tay
        </SanPham>
        <p>==</p>
        <SanPham tenSanPham = "Samsung Galaxy S10" maSanPham = "03" giaSanPham = "15.000.000" >
          Hàng Chính Hãng
        </SanPham>
        <p>==</p>
        <SanPham tenSanPham = "Iphone 11 Pro Max" maSanPham = "04" giaSanPham = "40.000.000" >
          Hàng Chính Hãng
        </SanPham>
        <p>==</p>
        <SanPham tenSanPham = "Iphone X" maSanPham = "05" giaSanPham = "17.000.000" >
          Hàng Chính Hãng
        </SanPham>
        <p>==</p> */}
 
        
      </div>
    );
  }
}
export default App;
